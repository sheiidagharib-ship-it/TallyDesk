import Shell from '../../components/Shell.jsx'
import { clients, TODAY } from '../../data.js'
import { daysBetween, formatDate, formatMoney, formatShortDate } from '../../format.js'
import './S7OverdueOverview.css'

// S7 Overdue overview · Flow 2 Step 1 (and Step 8 return). States: default, empty, loading, error.
export default function S7OverdueOverview({ state, update, nav }) {
  const view = state.overviewState
  const rows = state.overdue.map((inv) => ({
    ...inv, client: clients.find((c) => c.id === inv.clientId), daysLate: daysBetween(inv.due, TODAY),
  }))
  const notSeen = rows.filter((r) => !r.seen).length
  const oldest = rows.length ? Math.max(...rows.map((r) => r.daysLate)) : 0

  return (
    <Shell person="company" active="overdue" nav={nav}>
      <div className="page-head">
        <div className="titles">
          <h1>Overdue invoices</h1>
          <div className="sub">All overdue invoices in one place</div>
        </div>
        {/* Opens the oldest invoice in S8 (no wireframe yet) */}
        {view === 'default' && <button type="button" className="btn pri">Start with the oldest</button>}
      </div>

      {view === 'default' && (
        <div className="s7-stack">
          <div className="s7-counts">
            <div className="s7-count"><span>Overdue</span><b>{rows.length}</b></div>
            <div className="s7-count"><span>Not seen by the client</span><b>{notSeen}</b></div>
            <div className="s7-count"><span>Oldest overdue</span><b>{oldest} days</b></div>
          </div>
          <section className="card">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Number</th><th>Client</th><th className="r">Total</th><th>Due</th><th className="r">Overdue</th><th>Delivery</th><th>Follow-ups</th><th /></tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.number}>
                      <td className="mono">{r.number}</td>
                      <td>{r.client.name}</td>
                      <td className="r num">{formatMoney(r.total)}</td>
                      <td>{formatDate(r.due)}</td>
                      <td className="r num">{r.daysLate} days</td>
                      <td>{r.seen ? <span className="pill green">Seen</span> : <span className="pill amber">Not seen</span>}</td>
                      <td>{r.followUps.length ? `${r.followUps.length} · ${formatShortDate(r.followUps.at(-1))}` : 'None yet'}</td>
                      {/* Follow up opens S8 (no wireframe yet) */}
                      <td className="r s7-action"><button type="button" className="btn small">Follow up</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="s7-next"><b>What you can do next:</b><span>Pick an overdue invoice and follow up. Paid invoices leave this list.</span></div>
          </section>
        </div>
      )}

      {view === 'empty' && (
        <section className="card">
          <div className="s7-empty">
            <div className="s7-empty-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F5C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <h2>No overdue invoices</h2>
            <p>Every invoice is paid or not yet due. This round of follow-up is done.</p>
          </div>
          <div className="s7-next"><b>What you can do next:</b><span>Nothing to follow up. Go back to Invoices.</span></div>
        </section>
      )}

      {view === 'loading' && (
        <section className="card">
          <div className="s7-loading" aria-busy="true">
            <div className="s7-counts">{[0, 1, 2].map((i) => <div key={i} className="s7-ph-card" />)}</div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="s7-ph-row">{[70, 80, 60, 70, 50].map((w, j) => <div key={j} style={{ width: w + '%' }} />)}</div>
            ))}
            <span className="s7-muted">Loading overdue invoices…</span>
          </div>
          <div className="s7-next"><b>What you can do next:</b><span>Wait. Follow-up buttons appear when the list has loaded.</span></div>
        </section>
      )}

      {view === 'error' && (
        <section className="card">
          <div className="s7-error" role="alert">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A5200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
            <div>
              <b>The overdue list could not be loaded</b>
              <span>Your invoices are not changed. Try again.</span>
            </div>
          </div>
          <div><button type="button" className="btn" onClick={() => update({ overviewState: 'default' })}>Try again</button></div>
          <div className="s7-next"><b>What you can do next:</b><span>Try again. If it keeps failing: ask the company what support offers.</span></div>
        </section>
      )}
    </Shell>
  )
}
