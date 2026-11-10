import Shell from '../../components/Shell.jsx'
import StepBar from '../../components/StepBar.jsx'
import { clients, discount, exampleInvoice, invoiceItems, nextInvoiceNumber, people, taxPercent } from '../../data.js'
import { addDays, formatDate, formatMoney, totals } from '../../format.js'
import './S3CheckBeforeSending.css'

// S3 Check before sending · Flow 1 Steps 3–4
export default function S3CheckBeforeSending({ state, update, nav }) {
  const inv = state.invoice
  const client = clients.find((c) => c.id === (inv.clientId || exampleInvoice.clientId))
  const issue = inv.issueDate || exampleInvoice.issueDate
  const term = inv.termDays || exampleInvoice.termDays
  const sum = totals(invoiceItems, taxPercent, discount)
  const me = people.freelancer

  const checks = [
    { label: 'Billing contact', detail: client.email, status: client.email ? 'ok' : 'missing' },
    client.needsOrderNumber && {
      label: 'Client order number', detail: `${client.name} asks for an order number on every invoice`, status: 'missing', fix: true,
    },
    { label: 'Matches what was agreed', detail: 'Items and prices compared with the agreement', status: 'unchecked' },
  ].filter(Boolean)
  const missing = checks.filter((c) => c.status === 'missing').length
  const pill = { ok: ['green', 'OK'], missing: ['amber', 'Missing'], unchecked: ['grey', 'Not checked'] }

  return (
    <Shell person="freelancer" active="invoices" nav={nav}>
      <div className="page-head">
        <div className="titles">
          <h1>Check the invoice</h1>
          <div className="sub">{nextInvoiceNumber} · {client.name}</div>
        </div>
        <button type="button" className="btn" onClick={() => update({ invoice: { ...inv } })}>Save as draft</button>
      </div>

      <StepBar current={2} />

      <div className="s3-cols cols">
        <section className="card">
          <h2>Invoice as the client will see it</h2>
          <div className="s3-paper">
            <div className="s3-row">
              <div><div className="s3-title">Invoice</div><div className="mono">{nextInvoiceNumber}</div></div>
              <div className="s3-right"><b>{me.business}</b><br /><span className="s3-muted">{me.email}</span></div>
            </div>
            <div className="s3-row">
              <div><span className="s3-muted">Bill to</span><br /><b>{client.name}</b><br />{client.contact}</div>
              <div className="s3-right">
                <span className="s3-muted">Issued</span> {formatDate(issue)}<br />
                <span className="s3-muted">Due</span> {formatDate(addDays(issue, term))}
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Item</th><th className="r">Qty</th><th className="r">Price</th><th className="r">Amount</th></tr></thead>
                <tbody>
                  {invoiceItems.map((it) => (
                    <tr key={it.name}>
                      <td>{it.name}</td><td className="r num">{it.qty}</td>
                      <td className="r num">{formatMoney(it.price)}</td><td className="r num">{formatMoney(it.qty * it.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="s3-totals num">
              <span>Subtotal</span><span>{formatMoney(sum.subtotal)}</span>
              {discount > 0 && <><span>Discount</span><span>−{formatMoney(discount)}</span></>}
              <span>Tax {taxPercent}%</span><span>{formatMoney(sum.tax)}</span>
              <span className="s3-total">Total</span><span className="s3-total">{formatMoney(sum.total)}</span>
            </div>
          </div>
        </section>

        <section className="card">
          <div>
            <h2>Check before sending</h2>
            <div className="card-sub">Against what was agreed and what the client needs</div>
          </div>
          {missing > 0 && (
            <div className="s3-banner" role="status">
              {missing} {missing === 1 ? 'thing is' : 'things are'} missing. Fix {missing === 1 ? 'it' : 'them'} before you send.
            </div>
          )}
          <div>
            {checks.map((c) => (
              <div key={c.label} className="s3-check">
                <span className={'pill ' + pill[c.status][0] + ' s3-pill'}>{pill[c.status][1]}</span>
                <div><b className="s3-check-label">{c.label}</b><div className="s3-muted s3-small">{c.detail}</div></div>
                {/* Fix goes back to S2 (no wireframe yet) */}
                <div>{c.fix && <button type="button" className="btn small">Fix</button>}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="page-foot">
        {/* Back goes to S2 and Next goes to S4 (no wireframes yet) */}
        <button type="button" className="btn">Back</button>
        <button type="button" className="btn pri">Next: send</button>
      </div>
    </Shell>
  )
}
