# Tally Desk — Wireframes
Version: v1.0 · Date: 2026-11-07 · Time: 21:05 · Created by: Claude · Approved by: Nest
What changed: 10 desktop screens (1440×900) added to Tally Desk Canvas, each under its flow step and joined to it by a line labelled "Step N → screen name". Flow 2 · Step 1 has a state switch (Default, Empty, Loading, Error). The earlier draft screens on the canvas were removed.
Canvas: https://claude.ai/artifact/MaA4MVpDW8Whgebt3YT9Jv
Sources: flows = Approved — Flows v1.0; persona = Approved — Persona v1.0; brief = Approved — brief v1.0; demo = Tally Desk Demo App v1.html.
Evidence limit: no real interviews exist (flows, persona). These screens are not evidence about Tally Desk users. Anything not from these files is marked "sample data" on the canvas.

## 1. Screen list
| # | Persona | Flow step | Screen |
|---|---|---|---|
| S1 | Persona 1, Freelancer | Flow 1 · Step 1 | New invoice |
| S2 | Persona 1, Freelancer | Flow 1 · Step 2 | Items, tax and discount |
| S3 | Persona 1, Freelancer | Flow 1 · Step 3 (and Step 4 decision) | Check before sending |
| S4 | Persona 1, Freelancer | Flow 1 · Step 5 | Send invoice |
| S5 | Persona 1, Freelancer | Flow 1 · Step 6 (decision) | Delivery status |
| S6 | Persona 1 and 2 | Flow 1 · Step 7; Flow 2 · Step 5 | Correction with history |
| S7 | Persona 2, Small company | Flow 2 · Step 1 (and Step 8 return) | Overdue overview (4 states) |
| S8 | Persona 2, Small company | Flow 2 · Step 2 (and Step 3 decision) | Overdue invoice |
| S9 | Persona 2, Small company | Flow 2 · Step 4 (Steps 5–6 decisions as outcomes) | Send follow-up |
| S10 | Persona 2, Small company | Flow 2 · Step 7 | Mark as paid |

Flow 2 · Step 5 has no new screen. It uses S6 (flows: the same correction step). Decision steps (F1 Step 4; F2 Steps 3, 5, 6, 8) are branches shown on the screen named above, not separate screens.

## 2. Screen contents (max 4 parts · one main action)
**S1 New invoice** · Flow 1 Step 1 (flows)
- Parts: step bar (Client and details → Items → Check → Send) (brief §4); invoice details: number INV-0043 set by the app (K11), issue date, terms 7/14/30 days with due date (K12); client cards Studio Lumen, Northwind Books, Kite & Co (demo); "+ Add a new client" (K13).
- Main action: pick a client → Next: items (S2).

**S2 Items, tax and discount** · Flow 1 Step 2 (flows)
- Parts: items table (Brand identity design, 1 × €1,200, demo); + Add line; tax % and discount € (K14); totals €1,200 + 20% = €1,440 (demo).
- Main action: Next: check the invoice (S3).

**S3 Check before sending** · Flow 1 Steps 3–4 (flows)
- Parts: invoice preview; check list: billing contact OK (demo), client order number missing (sample data), matches what was agreed (sample data); "1 thing is missing" banner; I don't know: where "what was agreed" comes from (flows Step 3).
- Main action: Next: send (S4). Step 4 loop: Fix → S2 (flows).

**S4 Send invoice** · Flow 1 Step 5 (flows)
- Parts: invoice preview; To = billing contact, Subject and Message filled in (K15, demo); PDF attachment note (K15).
- Main action: Send invoice → S5.

**S5 Delivery status** · Flow 1 Step 6 (flows)
- Parts: sent / reached the right person / seen tiles (values: sample data); I don't know: how "reached" and "seen" are detected (flows Step 6); "Make a correction" entry (K16, flows Step 7); activity log (demo).
- Main action: Correct contact and resend → S4 (flows Step 6 No). Other branch: Make a correction → S6.

**S6 Correction with history** · Flow 1 Step 7; Flow 2 Step 5 (flows)
- Parts: one history: original INV-0043 and its correction (flows); what changed table (added line: sample data); note to the client (sample data); Ask the company: numbering, void or credit (K11, K16: no Void button in demo).
- Main action: Send correction → S5.

**S7 Overdue overview** · Flow 2 Step 1, Step 8 return (flows)
- Parts: state switch; counts (sample data); overdue table: INV-0042 Northwind Books €840, due 16 Oct 2026 (demo), two more rows (sample data); "Paid invoices leave this list" (flows Step 7).
- Main action: Follow up on a row → S8.

**S8 Overdue invoice** · Flow 2 Steps 2–3 (flows)
- Parts: invoice facts for INV-0042 (demo); reached and seen tiles (sample data), Correct contact (flows Step 3 No); activity "Payment is late. No reminder sent yet." (K18, demo); I don't know: how "seen" is detected.
- Main action: Send follow-up → S9.

**S9 Send follow-up** · Flow 2 Step 4 (flows)
- Parts: To, empty Subject and Message as today (K17, demo); I don't know: channel and wording (flows Step 4); "After you send" outcomes: mistake → S6, paid → S10, not paid → stays in list (flows Steps 5–6); I don't know: who follows up in a small company (persona 2).
- Main action: Send follow-up → S7.

**S10 Mark as paid** · Flow 2 Step 7 (flows)
- Parts: confirm panel for INV-0042 (demo); "It leaves the overdue list. 2 remain" (sample data); Ask the company: partial payments.
- Main action: Mark as paid → S7 (Step 8: more overdue invoices?). Paid is marked by hand (K19).

## 3. Screen with states: S7 Overdue overview (Flow 2 · Step 1)
Why this one: which problem matters most is not known (K10, persona). I picked S7 because it is the one place where three chosen directions meet in the flow (overview, delivery check, correction: flows Flow 2), and it is a list, so all four states can really happen there. This is my choice, not evidence.
- **Default:** overdue table. Next: pick an invoice and follow up.
- **Empty:** "No overdue invoices". Next: nothing to follow up, go back to Invoices. What else to show: ask the company.
- **Loading:** grey placeholder rows. Next: wait; follow-up buttons appear when the list loads.
- **Error:** "The overdue list could not be loaded" + Try again. Next: try again. Cause and message: ask the company.

## 4. Unknowns
- I don't know: where "what was agreed" comes from (S3); how "reached" and "seen" are detected (S5, S8); follow-up channel and wording (S9); who follows up in a small company (S9).
- Ask the company: correction numbering, void or credit (S6); Empty and Error handling (S7); partial payments (S10).
- The skill /ui-design:design-screen was not available; screens were built with the canvas's own design tools.
