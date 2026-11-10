import { useState } from 'react'
import Shell from '../../components/Shell.jsx'
import { clients, TODAY } from '../../data.js'
import { daysBetween, formatMoney } from '../../format.js'
import './S9SendFollowUp.css'

// S9 Send follow-up · Flow 2 Step 4 (Steps 5–6 as outcomes)
export default function S9SendFollowUp({ state, update, go, nav }) {
  const [to, setTo] = useState(null)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const inv = state.overdue.find((i) => i.number === state.followUpNumber) ?? state.overdue[0]
  if (!inv) return null
  const client = clients.find((c) => c.id === inv.clientId)

  const send = () => {
    const overdue = state.overdue.map((i) => (i.number === inv.number ? { ...i, followUps: [...i.followUps, TODAY] } : i))
    go('S7', { overdue, overviewState: 'default' })
  }

  return (
    <Shell person="company" active="overdue" nav={nav}>
      <div className="page-head">
        <div className="titles">
          <h1>Send a follow-up</h1>
          <div className="sub">Written by hand today</div>
        </div>
        {/* Cancel: where it leads is not in the wireframes */}
        <button type="button" className="btn">Cancel</button>
      </div>

      <div className="s9-cols cols">
        <section className="card">
          <div>
            <h2>Follow-up to {client.name}</h2>
            <div className="card-sub">{inv.number} · {formatMoney(inv.total)} · {daysBetween(inv.due, TODAY)} days overdue</div>
          </div>
          {/* To is filled in from the client (demo) */}
          <label className="field">To<input value={to ?? client.email} onChange={(e) => setTo(e.target.value)} /></label>
          <label className="field">Subject<input value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)} /></label>
          <label className="field">Message<textarea value={message} placeholder="Write your message" onChange={(e) => setMessage(e.target.value)} /></label>
        </section>

        <section className="card">
          <div>
            <h2>After you send</h2>
            <div className="card-sub">What the client does next</div>
          </div>
          <div className="s9-outcomes">
            <div><span>Client reported a mistake</span><button type="button" className="btn ghost" onClick={() => go('S6')}>Make a correction</button></div>
            {/* Mark as paid opens S10 (no wireframe yet) */}
            <div><span>Client has paid</span><button type="button" className="btn ghost">Mark as paid</button></div>
            <div><span>Not paid yet</span><span className="s9-muted">Stays in the overdue list</span></div>
          </div>
        </section>
      </div>

      <div className="page-foot">
        {/* Back goes to S8 (no wireframe yet) */}
        <button type="button" className="btn">Back</button>
        <button type="button" className="btn pri" onClick={send}>Send follow-up</button>
      </div>
    </Shell>
  )
}
