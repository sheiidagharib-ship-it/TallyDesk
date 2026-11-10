# app — README (Claude Code)
Version: v1.1 · Date: 2026-11-10 · Time: 17:32 · Created by: Sheida · Made with: Claude Code

## What is in this folder
The clickable prototype of the Tally Desk flow, built from the wireframes in ../wireframes. Only code lives here.

## Start the app (Windows, PowerShell)
Open this folder in PowerShell, then run once:
`npm install`
Then, every time:
`npm run dev`
The browser opens at http://localhost:5173. Add `?review=1` to the address to see the review bar with every screen and state.

## Files
| Path | What it is |
|---|---|
| src/App.jsx | Holds what the person typed and chose, and switches between screens (no routing library) |
| src/data.js | All example data in one place (from the demo app and the wireframes' sample data) |
| src/StateSwitcher.jsx | Review bar, shown only with ?review=1 |
| src/screens/S1NewInvoice/ | S1 New invoice |
| src/screens/S3CheckBeforeSending/ | S3 Check before sending |
| src/screens/S6CorrectionWithHistory/ | S6 Correction with history |
| src/screens/S7OverdueOverview/ | S7 Overdue overview (Default, Empty, Loading, Error) |
| src/screens/S9SendFollowUp/ | S9 Send follow-up |
| src/components/ | Sidebar frame and step bar shared by the screens |
| src/styles/base.css | Shared colours, type and spacing copied from the wireframes |
