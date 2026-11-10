const money = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' })
export const formatMoney = (n) => money.format(n)

const toDate = (iso) => new Date(iso + 'T00:00:00')
export const formatDate = (iso) =>
  iso ? toDate(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''
export const formatShortDate = (iso) =>
  toDate(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })

export const addDays = (iso, days) => {
  const d = toDate(iso)
  d.setDate(d.getDate() + Number(days))
  return d.toISOString().slice(0, 10)
}
export const daysBetween = (fromIso, toIso) => Math.round((toDate(toIso) - toDate(fromIso)) / 86400000)

export const totals = (items, taxPercent, discount = 0) => {
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)
  const tax = ((subtotal - discount) * taxPercent) / 100
  return { subtotal, tax, total: subtotal - discount + tax }
}
