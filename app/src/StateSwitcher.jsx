// Review bar: shows every screen and state. Visible only with ?review=1 in the address.
// It floats above the page and takes no space in the layout.
// To remove it, delete this line in App.jsx:
//   {review && <StateSwitcher state={state} go={go} />}

const items = [
  { label: 'S1 New invoice', screen: 'S1' },
  { label: 'S3 Check before sending', screen: 'S3' },
  { label: 'S6 Correction with history', screen: 'S6' },
  { label: 'S7 Overdue · Default', screen: 'S7', overviewState: 'default' },
  { label: 'S7 Overdue · Empty', screen: 'S7', overviewState: 'empty' },
  { label: 'S7 Overdue · Loading', screen: 'S7', overviewState: 'loading' },
  { label: 'S7 Overdue · Error', screen: 'S7', overviewState: 'error' },
  { label: 'S9 Send follow-up', screen: 'S9' },
]

const bar = {
  position: 'fixed', left: '50%', bottom: 12, transform: 'translateX(-50%)', zIndex: 9999,
  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, maxWidth: 'calc(100vw - 24px)',
  padding: 6, background: '#222', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,.35)',
  font: '12px/1.2 system-ui, sans-serif',
}
const btn = (on) => ({
  border: '1px solid #555', borderRadius: 5, padding: '6px 8px', cursor: 'pointer', font: 'inherit',
  background: on ? '#fff' : 'transparent', color: on ? '#000' : '#fff', fontWeight: on ? 700 : 400,
})

export default function StateSwitcher({ state, go }) {
  return (
    <div style={bar} role="toolbar" aria-label="Review: screens and states">
      {items.map((it) => {
        const on = state.screen === it.screen && (!it.overviewState || state.overviewState === it.overviewState)
        return (
          <button key={it.label} type="button" aria-pressed={on} style={btn(on)}
            onClick={() => go(it.screen, it.overviewState ? { overviewState: it.overviewState } : {})}>
            {it.label}
          </button>
        )
      })}
    </div>
  )
}
