import { useState } from 'react'
import Shell from '../../components/Shell.jsx'
import { clients, correction, discount, exampleInvoice, invoiceItems, nextInvoiceNumber, taxPercent } from '../../data.js'
import { formatDate, formatMoney, totals } from '../../format.js'
import './S6CorrectionWithHistory.css'

// S6 Correction with history · Flow 1 Step 7; Flow 2 Step 5
export default function S6CorrectionWithHistory({ state, nav }) {
  const [note, setNote] = useState('')
  const client = clients.find((c) => c.id === (state.invoice.clientId || exampleInvoice.clientId))
  const before = totals(invoiceItems, taxPercent, discount)
  const after = totals([...invoiceItems, ...correction.addedItems], taxPercent, discount)

  return (
    <Shell person="freelancer" active="invoices" nav={nav}>
      <div className="page-head">
        <div className="titles">
          <h1>Correct {nextInvoiceNumber}</h1>
          <div className="sub">{client.name} · the sent invoice stays in the history</div>
        </div>
        {/* Cancel: where it leads is not in the wireframes */}
        <button type="button" className="btn">Cancel</button>
      </div>

      <div className="s6-cols cols">
        <section className="card">
          <div>
            <h2>One visible history</h2>
            <div className="card-sub">The original and its correction stay together</div>
          </div>
          <ol className="s6-history">
            <li>
              <i className="s6-dot" aria-hidden="true" />
              <div>
                <b className="mono">{nextInvoiceNumber}</b> · original
                <div className="s6-muted">Sent {formatDate(correction.sentOn)} · {formatMoney(before.total)}</div>
              </div>
              <span className="pill grey">Replaced</span>
            </li>
            <li>
              <i className="s6-dot now" aria-hidden="true" />
              <div>
                <b>Correction to {nextInvoiceNumber}</b>
                <div className="s6-muted">Draft · {formatMoney(after.total)}</div>
              </div>
              <span className="pill brand">To send</span>
            </li>
          </ol>
        </section>

        <div className="s6-stack">
          <section className="card">
            <div>
              <h2>What changed</h2>
              <div className="card-sub">The client and their accountant see this</div>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Line</th><th className="r">Original</th><th className="r">Correction</th></tr></thead>
                <tbody className="num">
                  {invoiceItems.map((it) => (
                    <tr key={it.name}><td>{it.name}</td><td className="r">{formatMoney(it.qty * it.price)}</td><td className="r">{formatMoney(it.qty * it.price)}</td></tr>
                  ))}
                  {correction.addedItems.map((it) => (
                    <tr key={it.name} className="s6-added"><td><b>{it.name}</b> · added</td><td className="r">—</td><td className="r">{formatMoney(it.qty * it.price)}</td></tr>
                  ))}
                  <tr><td>Tax {taxPercent}%</td><td className="r">{formatMoney(before.tax)}</td><td className="r">{formatMoney(after.tax)}</td></tr>
                  <tr><td><b>Total</b></td><td className="r"><b>{formatMoney(before.total)}</b></td><td className="r"><b>{formatMoney(after.total)}</b></td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="card">
            <label className="field">Note to the client
              <input value={note} placeholder={correction.notePlaceholder} onChange={(e) => setNote(e.target.value)} />
            </label>
          </section>
        </div>
      </div>

      <div className="page-foot">
        {/* Back to invoice and Send correction go to S5 (no wireframe yet) */}
        <button type="button" className="btn">Back to invoice</button>
        <button type="button" className="btn pri">Send correction</button>
      </div>
    </Shell>
  )
}
