import { useEffect, useState } from 'react'
import { overdueInvoices } from './data.js'
import S1NewInvoice from './screens/S1NewInvoice/S1NewInvoice.jsx'
import S3CheckBeforeSending from './screens/S3CheckBeforeSending/S3CheckBeforeSending.jsx'
import S6CorrectionWithHistory from './screens/S6CorrectionWithHistory/S6CorrectionWithHistory.jsx'
import S7OverdueOverview from './screens/S7OverdueOverview/S7OverdueOverview.jsx'
import S9SendFollowUp from './screens/S9SendFollowUp/S9SendFollowUp.jsx'
import StateSwitcher from './StateSwitcher.jsx'

const STORAGE_KEY = 'tally-desk-prototype'

const startState = {
  screen: 'S1',
  overviewState: 'default',
  invoice: { clientId: null, reference: '', issueDate: '', termDays: '' },
  overdue: overdueInvoices,
  followUpNumber: 'INV-0042',
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return saved ? { ...startState, ...saved } : startState
  } catch {
    return startState
  }
}

const review = new URLSearchParams(window.location.search).get('review') === '1'

export default function App() {
  const [state, setState] = useState(loadState)
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(state)), [state])

  const update = (patch) => setState((s) => ({ ...s, ...patch }))
  const go = (screen, extra = {}) => {
    update({ screen, ...extra })
    window.scrollTo(0, 0)
  }
  const nav = (item) => go(item === 'overdue' ? 'S7' : 'S1', item === 'overdue' ? { overviewState: 'default' } : {})

  const props = { state, update, go, nav }
  const screens = {
    S1: <S1NewInvoice {...props} />,
    S3: <S3CheckBeforeSending {...props} />,
    S6: <S6CorrectionWithHistory {...props} />,
    S7: <S7OverdueOverview {...props} />,
    S9: <S9SendFollowUp {...props} />,
  }

  return (
    <>
      {screens[state.screen] ?? screens.S1}
      {review && <StateSwitcher state={state} go={go} />}
    </>
  )
}
