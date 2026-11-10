import { people } from '../data.js'

// Sidebar + main area shared by every screen (from the wireframes).
export default function Shell({ person, active, nav, children }) {
  const me = people[person]
  return (
    <div className="shell">
      <nav className="side" aria-label="Main">
        <div className="logo"><span>T</span>Tally Desk</div>
        <button type="button" className={'nav-item' + (active === 'invoices' ? ' on' : '')}
          aria-current={active === 'invoices' ? 'page' : undefined} onClick={() => nav('invoices')}>Invoices</button>
        <button type="button" className={'nav-item' + (active === 'overdue' ? ' on' : '')}
          aria-current={active === 'overdue' ? 'page' : undefined} onClick={() => nav('overdue')}>Overdue</button>
        <div className="me">
          <span className="avatar">{me.initial}</span>
          <div><b>{me.name}</b><small>{me.role}</small></div>
        </div>
      </nav>
      <main className="main">{children}</main>
    </div>
  )
}
