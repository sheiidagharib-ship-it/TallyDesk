import Shell from '../../components/Shell.jsx'
import StepBar from '../../components/StepBar.jsx'
import { clients, nextInvoiceNumber, paymentTerms } from '../../data.js'
import { addDays, formatDate } from '../../format.js'
import './S1NewInvoice.css'

// S1 New invoice · Flow 1 Step 1
export default function S1NewInvoice({ state, update, nav }) {
  const inv = state.invoice
  const set = (patch) => update({ invoice: { ...inv, ...patch } })
  const due = inv.issueDate && inv.termDays ? formatDate(addDays(inv.issueDate, inv.termDays)) : ''

  return (
    <Shell person="freelancer" active="invoices" nav={nav}>
      <div className="page-head">
        <div className="titles">
          <h1>New invoice</h1>
          <div className="sub">For a client you finished work for</div>
        </div>
        {/* Saves the draft in this browser (K20) */}
        <button type="button" className="btn" onClick={() => update({ invoice: { ...inv } })}>Save as draft</button>
      </div>

      <StepBar current={0} />

      <div className="s1-cols cols">
        <section className="card">
          <h2>Invoice details</h2>
          <div className="s1-fields">
            <label className="field">Invoice number
              <input className="mono" value={nextInvoiceNumber} readOnly />
              <span className="hint">Set by the app</span>
            </label>
            <label className="field">Your reference
              <input value={inv.reference} placeholder="e.g. Project name" onChange={(e) => set({ reference: e.target.value })} />
            </label>
            <label className="field">Issue date
              <input type="date" value={inv.issueDate} onChange={(e) => set({ issueDate: e.target.value })} />
            </label>
            <label className="field">Payment terms
              <select value={inv.termDays} onChange={(e) => set({ termDays: e.target.value })}>
                <option value="" />
                {paymentTerms.map((d) => <option key={d} value={d}>{d} days</option>)}
              </select>
              <span className="hint">7, 14 or 30 days{due && ` · due ${due}`}</span>
            </label>
          </div>
        </section>

        <section className="card">
          <div>
            <h2>Who is this invoice for?</h2>
            <div className="card-sub">Pick a client or add a new one</div>
          </div>
          <div className="s1-clients">
            {clients.map((c) => {
              const on = inv.clientId === c.id
              return (
                <button key={c.id} type="button" className={'pick s1-client' + (on ? ' on' : '')} aria-pressed={on}
                  onClick={() => set({ clientId: c.id })}>
                  <b>{c.name}</b>
                  <span className="s1-contact">{c.contact}</span>
                  <span className="mono s1-email">{c.email}</span>
                  {on && <span className="pill brand">Selected</span>}
                </button>
              )
            })}
            {/* No wireframe for the new-client form yet */}
            <button type="button" className="pick s1-client s1-add">
              <b>+ Add a new client</b>
              <span className="s1-contact">Name, contact, email, address</span>
            </button>
          </div>
        </section>
      </div>

      <div className="page-foot">
        <button type="button" className="btn" disabled>Back</button>
        {/* Goes to S2 (no wireframe yet) */}
        <button type="button" className="btn pri">Next: items</button>
      </div>
    </Shell>
  )
}
