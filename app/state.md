# app — state (Claude Code)
Version: v1.1 · Date: 2026-11-10 · Time: 17:32 · Created by: Sheida · Made with: Claude Code

## Status
| Item | Value |
|---|---|
| Screens built | S1, S3, S6, S7 (4 states), S9 |
| Screens missing | S2, S4, S5, S8, S10 (no wireframe yet) |
| Data | Kept in the browser (localStorage); example data in src/data.js |
| Last check | npm run build and npm run dev ran without errors; the screen has not been looked at |

## Decisions
| Date | Decision | Reason |
|---|---|---|
| 2026-11-10 | Vite + React | Most common simple option; one command to start |
| 2026-11-10 | Buttons that lead to a missing screen do nothing | Sheida agreed; the wireframes link them to # |
| 2026-11-10 | Removed from the screens: persona/flow badge, "sample data" and "from demo.html" tags, window frame, "I don't know" and "Ask the company" boxes | A test participant must see only the design; Sheida agreed |
| 2026-11-10 | S6 "Numbering and record" and S9 "Who follows up" sections removed | Their only content was an "Ask the company" / "I don't know" box |
| 2026-11-10 | S7 state buttons moved from the screen to the review bar | Sheida agreed |
| 2026-11-10 | S7 subtitle "· today is 30 Oct 2026 (demo.html)" removed | It is a note about the demo date, not design (guess) |
| 2026-11-10 | Example "today" is 30 Oct 2026 | Demo app |
| 2026-11-10 | Review bar also opens with #review in the address | The claude.ai link can't pass ?review=1 |
| 2026-11-10 | A private claude.ai link of the built prototype: https://claude.ai/artifact/MyPhaa6m6NNwV4X5qnpovY | Sheida could not see the localhost of the cloud session |

## History
| Date | What changed |
|---|---|
| 2026-11-10 | Folder created, empty |
| 2026-11-10 | Prototype built: S1, S3, S6, S7, S9 and the review bar |
| 2026-11-10 | Added #review; browser storage errors are caught; built copy published as a private claude.ai link |
