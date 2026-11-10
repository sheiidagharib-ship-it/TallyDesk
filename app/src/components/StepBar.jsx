const steps = ['1. Client and details', '2. Items, tax and discount', '3. Check', '4. Send']

export default function StepBar({ current }) {
  return (
    <div className="stepbar" aria-label="Steps">
      {steps.map((s, i) => (
        <div key={s} className={i === current ? 'on' : i < current ? 'done' : ''}
          aria-current={i === current ? 'step' : undefined}>{s}</div>
      ))}
    </div>
  )
}
