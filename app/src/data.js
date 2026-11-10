// All example data for the prototype lives here, so it can be changed in one place.
// Sources: Tally Desk Demo App v1 (demo), Approved — Wireframes v1.0 (sample data).

// "Today" in the prototype (demo: today is 30 Oct 2026).
export const TODAY = '2026-10-30'

export const people = {
  freelancer: { initial: 'M', name: 'Mina', role: 'Freelance designer', business: 'Mina Design', email: 'mina@minadesign.example' },
  company: { initial: 'O', name: 'Office manager', role: 'Small company' },
}

export const clients = [
  { id: 'lumen', name: 'Studio Lumen', contact: 'Sara Okafor', email: 'accounts@studiolumen.example', needsOrderNumber: true },
  { id: 'northwind', name: 'Northwind Books', contact: 'Tom Reyes', email: 'tom@northwindbooks.example', needsOrderNumber: false },
  { id: 'kite', name: 'Kite & Co', contact: 'Lea Brandt', email: 'billing@kiteco.example', needsOrderNumber: false },
]

// Set by the app, can't be changed (K11).
export const nextInvoiceNumber = 'INV-0043'

// Payment terms in days (K12).
export const paymentTerms = [7, 14, 30]

// Used on the Check screen while the person has not chosen a client or dates yet.
export const exampleInvoice = { clientId: 'lumen', issueDate: '2026-10-30', termDays: 14 }

// Items, tax and discount (screen S2 is not built yet, so these come from the demo).
export const invoiceItems = [{ name: 'Brand identity design', qty: 1, price: 1200 }]
export const taxPercent = 20
export const discount = 0

// Correction of INV-0043 (sample data).
export const correction = {
  sentOn: '2026-10-30',
  addedItems: [{ name: 'Social media kit', qty: 1, price: 250 }],
  notePlaceholder: 'I added a missing item. Please pay the corrected amount.',
}

// Overdue invoices (INV-0042 from demo; the others are sample data).
export const overdueInvoices = [
  { number: 'INV-0042', clientId: 'northwind', total: 840, due: '2026-10-16', seen: true, followUps: [] },
  { number: 'INV-0038', clientId: 'kite', total: 1120, due: '2026-10-09', seen: false, followUps: ['2026-10-20'] },
  { number: 'INV-0036', clientId: 'lumen', total: 2300, due: '2026-10-02', seen: true, followUps: ['2026-10-21', '2026-10-23'] },
]
