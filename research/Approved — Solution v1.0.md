# Tally Desk — Solution
Version: v1.0 · Date: 2026-11-07 · Time: 20:29 · Created by: Claude · Approved by: Nest

Sources: problem = Approved — Problem Statement v1.0; persona = Approved — Persona v1.0; dashboard = Approved — Dashboard v3.0; demo = Tally Desk Demo App v1.html; sim = "Simulated interviews" at the end of this file.

**SIMULATED EVIDENCE.** Nest asked Claude to answer Approved — Interview Questions v1.0 itself. SIM-P1, SIM-P2 and SIM-P3 are made up by Claude. They are not real users. "partly supported by SIM-…" means made-up data only, which is not evidence about Tally Desk users. Since Claude wrote both the answers and the directions, the support is circular. No winner is chosen here.

---

Problem 1: Creating an invoice is slow, and mistakes get through to the client (problem P1)
How might we help users put together a correct invoice with less effort, so that mistakes are caught before the client sees them?
- 1.1 Let users build a new invoice from what already exists, such as their past invoice for that client or the agreed quote, instead of typing every line again. [partly supported by SIM-P1, SIM-P2]
  Serves: Persona 1 (freelancer). Reason: SIM-P1 copies her last invoice; SIM-P2 retypes many repeat lines (sim).
- 1.2 Before sending, compare the invoice with what was agreed and with what the client needs, and point out what is missing or different. [partly supported by SIM-P1, SIM-P3]
  Serves: Persona 1 and 2. Reason: SIM-P1 checks against the quote and is unsure about tax; SIM-P3 entered a % discount as € and missed a PO number (sim). Elsewhere, reviewers miss most errors (dashboard RQ4).
- 1.3 Do not make a complete client record a condition for creating the invoice; let missing client details be filled in later. [partly supported by SIM-P3]
  Serves: Persona 2 (small company). Reason: SIM-P3 stopped at the new-client form for lack of an address (sim). The form is long (demo).

Chosen direction and my reason: 1.2 — چون فکر می‌کنم از بقیه راه‌ها خطای کمتری دارد. (Nest)

---

Problem 2: Once an invoice is sent, a mistake in it is hard to fix (problem P2)
How might we make correcting a sent invoice clear and quick for both the sender and the client?
- 2.1 Offer one guided way to correct a sent invoice that creates a proper linked correction and tells the client what changed and which invoice to pay. [partly supported by SIM-P2, SIM-P3]
  Serves: Persona 1 and 2. Reason: SIM-P3 had no Void button and asked the client to ignore the old invoice; SIM-P2's client accountant questioned her fix (sim). Legally a correction is a linked document (dashboard RQ4).
- 2.2 Allow a short period after sending in which a mistake can still be put right before the client acts on the invoice. [partly supported by SIM-P1]
  Serves: Persona 1. Reason: SIM-P1 found her missing item a few hours after sending; SIM-P2 and SIM-P3 learned of mistakes days later from the client side, so a short window would not have helped them (sim).
- 2.3 Keep the original invoice and its correction together as one visible history, so the client and their accountant can see why an amount changed or a number is missing. [partly supported by SIM-P2]
  Serves: Persona 1. Reason: SIM-P2's client accountant asked about the gap in invoice numbers (sim).

Chosen direction and my reason: 2.3 — چون فاکتورها بایگانی می‌شوند و سوابق مالی واضح هستند. (Nest)

---

Problem 3: Following up on payment is manual, time-consuming and socially risky (problem P3)
How might we help users follow up on payment with little time and without putting the client relationship at risk?
- 3.1 Let follow-up messages go out on a due-date schedule that the user agrees to once, so chasing no longer depends on remembering and deciding each time. [no evidence]
  Serves: Persona 1 and 2. Reason: SIM-P2 uses calendar reminders only for herself; no participant spoke about messages going out on their own (sim). Whether "system" reminders feel less risky: I don't know (dashboard RQ3, RQ6).
- 3.2 Give users ready wording for reminders in a tone they choose and can edit, so a polite message does not have to be written from nothing. [partly supported by SIM-P1]
  Serves: Persona 1. Reason: SIM-P1 spends about 15 minutes per reminder worrying about tone (sim); reminders start from empty fields (demo).
- 3.3 Bring every overdue invoice into one ongoing follow-up overview, so chasing becomes a routine instead of a memory task kept in notes or a spreadsheet. [partly supported by SIM-P1, SIM-P3]
  Serves: Persona 2 (and 1). Reason: SIM-P3 keeps a spreadsheet and chases every Friday; SIM-P1 tracks in phone notes (sim).

Chosen direction and my reason: 3.3 — چون جامع و کامل است و چیزی از قلم نمی‌افتد. (Nest)

---

Problem 4: Invoices are paid late, and the sender doesn't know why (problem P4)
How might we help the sender find out why an invoice is late, and remove the causes that lie in our part of the flow?
- 4.1 Tell the sender whether the invoice actually reached the right person and was seen. [partly supported by SIM-P2]
  Serves: Persona 1. Reason: SIM-P2's invoice went to a contact who had left the company (sim); lost invoices are a common payer reason elsewhere (dashboard RQ2).
- 4.2 Make sure, before sending, that the invoice carries what the client's approval process needs, such as their order number and the right billing contact. [partly supported by SIM-P1, SIM-P3]
  Serves: Persona 2 (and 1). Reason: SIM-P3's invoice was rejected without a PO number; SIM-P1's invoice waited for an absent approver (sim). Approvals delay freelancer pay elsewhere (dashboard RQ2).
- 4.3 As part of the follow-up, ask the client when they expect to pay or what is holding it, and keep that answer with the invoice. [no evidence]
  Serves: Persona 1 and 2. Reason: no participant asked clients for a date; they only heard reasons the client offered unasked (sim).

Chosen direction and my reason: 4.1 و 4.2 با هم — چون با هم فرایند پرداخت کامل می‌شود. (Nest)

---

Counts: 10 partly supported (by simulated participants only), 2 no evidence.

---

## Simulated interviews (made up by Claude, not evidence)
Answers to Approved — Interview Questions v1.0, summarised by RQ.

**SIM-P1 — freelance graphic designer (Persona 1)**
- RQ1: Copies her last invoice and changes it. Items take longest: she rereads chat messages to recall what was agreed. Unsure whether to add tax for a client abroad. Compares the preview with the quote in her email.
- RQ2: Last late invoice waited about two weeks; the client's accounts person was on leave. Client said it was "waiting for approval".
- RQ3: First reminder by WhatsApp, then email. About 15 minutes per message because she worries about sounding rude. Tracks in phone notes; usually 2–3 reminders.
- RQ4: Noticed a missing item herself a few hours after sending, while rereading the chat. Sent a second invoice for it; the client at first paid only the first one.

**SIM-P2 — freelance translator (Persona 1)**
- RQ1: Many small invoices with per-word lines; typing many lines is slow; once used an old rate. Rarely looks at the preview.
- RQ2: Invoice went to a contact who had left the client company; nobody saw it for three weeks.
- RQ3: Calendar reminders for herself; reminders by email; about 2 hours a month; does not chase small amounts, to keep the client.
- RQ4: The client's accountant found wrong VAT ten days later. She wrote an explanation and made a new invoice; the accountant then asked about the gap in invoice numbers.

**SIM-P3 — office manager, 6-person software studio (Persona 2)**
- RQ1: Two people make invoices. Stopped at the new-client form because she lacked the client's address; saved a draft and returned the next day. Once entered a 10% discount as €10.
- RQ2: A large client rejected an invoice without a PO number; payment slipped a month. Her own company pays suppliers late when cash is tight.
- RQ3: Spreadsheet of overdue invoices; one hour every Friday; email first, then phone; the owner makes the hard calls.
- RQ4: The client noticed the missing PO number. The invoice could not be edited and there was no Void button, so she asked the client to ignore it and sent a new one.
