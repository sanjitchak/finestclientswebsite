# Invoice template execution contract

## Reference

- Source: `/Users/Administrator/Downloads/GrowOnlineToday_PATNI_PERSONALITY_PLUS_invoice .docx`
- SHA-256: `5cfed786229452db8c9111cc376af312ee91eee35547a831789805fed38d09f8`
- Page count: 1
- Section count: 1
- Evidence: `/private/tmp/invoice-template-work/reference-render/page-1.png`, `/private/tmp/invoice-template-work/template-style-evidence.json`

## Page system

- A4 portrait, 8.27 x 11.69 inches.
- Margins: 1.00 inch left/right and 0.47 inch top/bottom.
- One section, no distinct first-page header, footer not linked to another section.
- Preserve the single-page invoice layout, all anchored objects, and the footer position.

## Typography and components

- Preserve the source's direct formatting and styles. Main fonts are Arial, Calibri, and embedded Arial Black.
- Keep the upper-left logo, upper-right gray `INVOICE` title, seller/contact block, invoice/date block, `Bill To` block, outlined amount box, three-column fee table, payment terms, bank block, and centered footer.
- Keep the source colors, paragraph alignment, tab positions, line spacing, borders, and all anchored drawing geometry unchanged.

## Table system

- One six-row, three-column table.
- Column grid widths: 5634, 1276, and 1874 DXA.
- Rows: header; service line 1; service line 2 or intentionally blank second service line; subtotal; GST at 18%; total due.
- Preserve the gray header fill, grid borders, numeric alignment, and summary-cell borders.

## Editable slot map

- `word/document.xml`, body paragraph 5: invoice number only; preserve seller name and tabs.
- `word/document.xml`, body paragraph 6: invoice date only; preserve seller address and tabs.
- `word/document.xml`, body paragraph 11 anchored text box: displayed total.
- `word/document.xml`, body paragraphs 12-15: customer name and contact/email details; the recipient GST line is intentionally blank.
- `word/document.xml`, table rows 2-3: service description(s) and line amounts.
- `word/document.xml`, table rows 4-6: taxable subtotal, GST 18%, and GST-inclusive total.
- All seller identity, GSTIN, logo, UPI/bank details, payment terms, and footer content are preserve-only.

## Content rules

- Invoice totals must equal the captured payments: INR 40,000 and INR 25,000.
- Totals are GST-inclusive. Taxable value is total divided by 1.18; GST is the balancing amount after rounding to two decimals.
- Recipient GSTIN and street address are not available and must not be invented. Leave the recipient GST line blank and use the provided customer name, email, phone, transaction ID, and payment method/date as the available recipient/payment evidence.
- Use `Digital Marketing Consulting and Implementation Services` as the neutral service description, consistent with the user's earlier business description.

## Package preservation

- Editable part: `word/document.xml` only.
- Preserve byte-for-byte: `[Content_Types].xml`, all relationship files, `customXML/*`, `word/fontTable.xml`, embedded font, `word/footer1.xml`, both media files, `word/numbering.xml`, `word/settings.xml`, `word/styles.xml`, and `word/theme/theme1.xml`.
- Preserve all package paths and relationship IDs. Do not use a full python-docx save.

## Fidelity gates

- Reference SHA-256 must remain unchanged.
- Final documents must remain one A4 page with identical page/section geometry.
- Render every final page and inspect at 100% zoom.
- Invoice number and date must share one explicit 6500 DXA left tab stop so their labels align vertically across Word and PDF renderers.
- No clipped customer text, table overflow, altered logo/title, displaced amount box, or bank/footer movement.
- Package comparison must show only `word/document.xml` changed.
