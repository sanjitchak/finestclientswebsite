from __future__ import annotations

from copy import deepcopy
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

from lxml import etree


REFERENCE = Path("/Users/Administrator/Downloads/GrowOnlineToday_PATNI_PERSONALITY_PLUS_invoice .docx")
OUTPUT_DIR = Path("/Users/Administrator/Downloads/Gofreedomlike FInest website/finestclientswebsite/invoice-output")
DOCUMENT_XML = "word/document.xml"
W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS = {"w": W_NS}


INVOICES = [
    {
        "output": "Invoice_120PP945_Yakeen_Awasthi_GST_Inclusive.docx",
        "invoice_number": "120PP945",
        "date": "5 August 2026",
        "customer": "YAKEEN AWASTHI",
        "email": "yakeenawasthi@gmail.com",
        "contact": "+91 9461503124",
        "payment_method": "Card",
        "payment_id": "pay_TM26PekkfA8G09",
        "taxable": "33,898.31",
        "gst": "6,101.69",
        "total": "40,000.00",
    },
    {
        "output": "Invoice_120PP946_Sujal_Meshram_GST_Inclusive.docx",
        "invoice_number": "120PP946",
        "date": "6 August 2026",
        "customer": "SUJAL MESHRAM",
        "email": "sujalmeshram345@gmail.com",
        "contact": "+91 9834476824",
        "payment_method": "UPI",
        "payment_id": "pay_TMWrJvDygtJ528",
        "taxable": "21,186.44",
        "gst": "3,813.56",
        "total": "25,000.00",
    },
]


def replace_once(root: etree._Element, old: str, new: str) -> None:
    matches = [node for node in root.xpath(".//w:t", namespaces=NS) if node.text == old]
    if len(matches) != 1:
        raise RuntimeError(f"Expected exactly one match for {old!r}, found {len(matches)}")
    matches[0].text = new


def replace_all(root: etree._Element, old: str, new: str, expected: int) -> None:
    matches = [node for node in root.xpath(".//w:t", namespaces=NS) if node.text == old]
    if len(matches) != expected:
        raise RuntimeError(f"Expected {expected} matches for {old!r}, found {len(matches)}")
    for node in matches:
        node.text = new


def set_shared_left_tab(root: etree._Element, marker: str, position: str = "6500") -> None:
    matches = [node for node in root.xpath(".//w:t", namespaces=NS) if node.text and node.text.startswith(marker)]
    if len(matches) != 1:
        raise RuntimeError(f"Expected one alignment marker for {marker!r}, found {len(matches)}")

    marker_text = matches[0]
    run = marker_text.getparent()
    paragraph = run.getparent()

    for tab in list(run.findall(f"{{{W_NS}}}tab")):
        run.remove(tab)
    run.insert(run.index(marker_text), etree.Element(f"{{{W_NS}}}tab"))

    ppr = paragraph.find(f"{{{W_NS}}}pPr")
    if ppr is None:
        ppr = etree.Element(f"{{{W_NS}}}pPr")
        paragraph.insert(0, ppr)
    old_tabs = ppr.find(f"{{{W_NS}}}tabs")
    if old_tabs is not None:
        ppr.remove(old_tabs)
    tabs = etree.Element(f"{{{W_NS}}}tabs")
    tab = etree.SubElement(tabs, f"{{{W_NS}}}tab")
    tab.set(f"{{{W_NS}}}val", "left")
    tab.set(f"{{{W_NS}}}pos", position)
    ppr.insert(0, tabs)


def patch_document(xml_bytes: bytes, invoice: dict[str, str]) -> bytes:
    parser = etree.XMLParser(remove_blank_text=False)
    root = etree.fromstring(xml_bytes, parser)

    replace_once(root, "Invoice #: 120PP944", f"Invoice #: {invoice['invoice_number']}")
    replace_once(
        root,
        "                                Date: 14 July 2026",
        f"Date: {invoice['date']}",
    )
    replace_once(root, "20,397", invoice["total"])
    replace_once(root, "PATNI PERSONALITY PLUS PRIVATE LIMITED", invoice["customer"])
    replace_once(root, "48/10, NEHRU NAGAR EAST, BHILAI, DISTRICT - DURG", f"Email: {invoice['email']}")
    replace_once(
        root,
        "Chhattisgarh, 490020, Contact - 7024193337",
        f"Contact: {invoice['contact']} | Payment: {invoice['payment_method']}",
    )
    replace_once(root, "GST - 22AAFCP2512E1Z3", "")

    set_shared_left_tab(root, "Invoice #:")
    set_shared_left_tab(root, "Date:")

    replace_once(
        root,
        "Ad Spend Management Fee (15%) - Ujjwal Patni Personal (₹107,645.00 ad spend; 13 June to 12 July 2026)",
        "Digital Marketing Consulting and Implementation Services (ongoing)",
    )
    replace_all(root, "₹16,146.75", f"₹{invoice['taxable']}", expected=2)
    replace_once(
        root,
        "Ad Spend Management Fee (15%) - BusinessJeeto Ad Account (₹7,593.66 ad spend; 13 June to 12 July 2026)",
        f"Payment reference: {invoice['payment_id']} | Paid {invoice['date']} via {invoice['payment_method']}",
    )
    replace_all(root, "₹1,139.05", "", expected=2)
    replace_once(root, "₹17,285.80", f"₹{invoice['taxable']}")
    replace_once(root, "₹3,111.44", f"₹{invoice['gst']}")
    replace_once(root, "₹20,397", f"₹{invoice['total']}")

    return etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone=True)


def clone_with_document_patch(invoice: dict[str, str]) -> Path:
    output = OUTPUT_DIR / invoice["output"]
    with ZipFile(REFERENCE, "r") as source, ZipFile(output, "w") as target:
        for source_info in source.infolist():
            data = source.read(source_info.filename)
            if source_info.filename == DOCUMENT_XML:
                data = patch_document(data, invoice)
            info = ZipInfo(source_info.filename, date_time=source_info.date_time)
            info.compress_type = source_info.compress_type
            info.comment = source_info.comment
            info.extra = source_info.extra
            info.internal_attr = source_info.internal_attr
            info.external_attr = source_info.external_attr
            info.create_system = source_info.create_system
            info.create_version = source_info.create_version
            info.extract_version = source_info.extract_version
            info.flag_bits = source_info.flag_bits
            target.writestr(info, data)
    return output


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for invoice in INVOICES:
        print(clone_with_document_patch(invoice))


if __name__ == "__main__":
    main()
