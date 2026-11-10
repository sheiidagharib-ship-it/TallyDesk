# Tally Desk — Flows
Version: v1.0 · Date: 2026-11-07 · Time: 20:45 · Created by: Claude · Approved by: Nest
Canvas: Tally Desk Canvas — https://claude.ai/artifact/MaA4MVpDW8Whgebt3YT9Jv
Sources: brief = Approved — brief v1.0; problem = Approved — Problem Statement v1.0; persona = Approved — Persona v1.0; solution = Solution.md (chosen directions 1.2, 2.3, 3.3, 4.1 + 4.2); dashboard = Approved — Dashboard v3.0.
Evidence limit: no real interviews exist. SIM-P1 to SIM-P3 are made up (solution). External research is about other people (dashboard). Nothing here is evidence about how Tally Desk users move through the flow.
Symbols: oval = start/end · rectangle = step · diamond = decision · parallelogram = what the person enters · dashed = unhappy path.

---

## Flow 1 — Freelancer (Persona 1): send a correct invoice that reaches the right person
**Goal:** the client's right person receives a correct invoice and can pay it. (brief §1; problem P1, P4)
**Entry point:** the freelancer has finished work for a client and wants to be paid. They come from their own project work. (brief §1; persona 1) What exactly triggers it (end of project, end of month, a deadline): I don't know.

1. Starts a new invoice for a client. (brief §4 steps 1–2)
2. *[enters]* Enters the items, prices, tax and discount. (brief §4 steps 3–4)
3. Gets the invoice checked against what was agreed and what the client needs, such as their order number and billing contact. (solution 1.2, 4.2) Where "what was agreed" comes from for our users: I don't know (problem P1).
4. **Decision:** is anything missing or different?
   - Yes → *(dashed)* fixes or adds it, then back to Step 3. (solution 1.2)
   - No → Step 5.
5. Sends the invoice to the client's billing contact. (brief §4 step 5, K6; solution 4.2)
6. **Decision:** did it reach the right person, and was it seen? (solution 4.1)
   - No → *(dashed)* corrects the contact, then back to Step 5 to send again. (solution 4.1)
   - Yes → Step 7.
7. **Decision:** has a mistake been found after sending? (brief K7)
   - Yes → *(dashed)* makes a correction that stays together with the original in one visible history, then sends it → end point. (solution 2.3)
   - No → end point.

**End point:** a correct invoice (or its correction, with its history) has been seen by the right person and is waiting for payment. (solution 1.2, 2.3, 4.1)
**Exit / drop-off points:** Step 4 loop, Step 6 loop, Step 7 correction.
**Reason:** SIM-P3 missed a PO number and SIM-P2's invoice went to a contact who had left (simulated, solution); elsewhere, reviewers caught only 39% of planted errors (dashboard RQ4).

---

## Flow 2 — Small company (Persona 2): follow up on every overdue invoice
**Goal:** every overdue invoice is followed up until paid, and none is forgotten. (problem P3; solution 3.3)
**Entry point:** an invoice passes its due date and becomes overdue (brief K18), and someone in the company sets time aside to chase payment. Who in the company does this, and whether several people share it: I don't know (persona 2).

1. Looks at all overdue invoices together in one place. (solution 3.3)
2. Picks the next overdue invoice to follow up. (solution 3.3)
3. **Decision:** did the invoice reach the right person, and was it seen? (solution 4.1)
   - No → *(dashed)* corrects the contact, then Step 4: sends the invoice again with the follow-up. (solution 4.1)
   - Yes → Step 4.
4. Sends a follow-up to the client. (brief K5) Channel and wording: I don't know (dashboard RQ3).
5. **Decision:** does the client report a mistake in the invoice? (brief K7)
   - Yes → *(dashed)* makes a correction that stays together with the original in one visible history, then back to Step 4. (solution 2.3)
   - No → Step 6.
6. **Decision:** has the client paid?
   - No → *(dashed)* the invoice stays in the overview for the next round, then Step 8. (solution 3.3)
   - Yes → Step 7.
7. *[enters]* Marks the invoice as paid, so it leaves the overview. (brief K19; solution 3.3)
8. **Decision:** are there more overdue invoices?
   - Yes → back to Step 2.
   - No → end point.

**End point:** every overdue invoice has been followed up this round; paid ones have left the overview. (solution 3.3)
**Exit / drop-off points:** Step 3 contact correction, Step 5 correction, Step 6 not paid.
**Reason:** SIM-P3 chases from a spreadsheet every Friday, and her client found a missing PO number she could not fix in the app (simulated, solution); elsewhere, about a third of firms don't chase at all, mainly for fear of harming the client relationship (dashboard RQ3).

---

## Notes and unknowns
- H1 (hypothesis, Nest): directions 4.1 and 2.3 also serve Persona 2 (small company), not only Persona 1 as Solution.md lists. Not evidence. Support: a correction is legally a linked document for any business, and lost invoices are a common payer reason (dashboard RQ2, RQ4); SIM-P3 (simulated). Against: the only simulated support for a visible history is SIM-P2, a freelancer; no Tally Desk user data. Test with RQ4 questions (Interview Questions v1.0) in interviews with small companies.
- How long between Step 5 and Steps 6–7 in Flow 1 (hours or days): I don't know.
- The interaction-design skill was not available; flows follow the IxDF user-flow method (goal, entry point, steps and decisions, end point).
