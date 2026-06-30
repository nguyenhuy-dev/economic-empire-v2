import type { Team, Company, Holdings, CompanyId } from '../types'

export function fmt(value: number): string {
  const v = Math.round(value * 10) / 10
  return `${v}B`
}

export function round1(value: number): number {
  return Math.round(value * 10) / 10
}

// Đếm ngược -> chuỗi m:ss (vd 90 -> "1:30", 30 -> "0:30")
export function fmtTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds))
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

function indexCompanies(companies: Company[]): Record<CompanyId, Company> {
  return Object.fromEntries(companies.map((c) => [c.id, c]))
}

export function holdingsValue(holdings: Holdings = {}, companies: Company[] = []): number {
  const byId = indexCompanies(companies)
  return Object.entries(holdings).reduce((sum, [id, qty]) => {
    const c = byId[id]
    return sum + (c ? c.price * qty : 0)
  }, 0)
}

export function totalAssets(team: Team, companies: Company[] = []): number {
  return team.cash + holdingsValue(team.holdings, companies)
}

export function totalShares(holdings: Holdings = {}): number {
  return Object.values(holdings).reduce((a, b) => a + (b || 0), 0)
}

// totalSharesPerCompany dùng để tính % thị phần (lấy từ state.config.totalShares)
export function marketShare(holdings: Holdings, companyId: CompanyId, totalSharesPerCompany = 10): number {
  return Math.round(((holdings?.[companyId] || 0) / totalSharesPerCompany) * 100)
}

export function monopolies(holdings: Holdings = {}, companies: Company[] = [], totalSharesPerCompany = 10): string[] {
  const byId = indexCompanies(companies)
  return Object.entries(holdings)
    .filter(([, qty]) => qty / totalSharesPerCompany >= 0.5)
    .map(([id]) => byId[id]?.name)
    .filter(Boolean) as string[]
}

// threshold lấy từ state.config.earlyWinShares
export function earlyWinCompany(holdings: Holdings = {}, companies: Company[] = [], threshold = 6): string | null {
  const byId = indexCompanies(companies)
  const hit  = Object.entries(holdings).find(([, qty]) => qty >= threshold)
  return hit ? byId[hit[0]]?.name ?? null : null
}

export function taxFor(round: number, team: Team, companies: Company[] = [], taxRates: Record<number, number> = {}): { rate: number; amount: number } {
  const rate = taxRates[round] ?? 0
  return { rate, amount: round1((totalAssets(team, companies) * rate) / 100) }
}

export function priceChange(company: Company): number {
  if (!company.prevPrice) return 0
  return Math.round(((company.price - company.prevPrice) / company.prevPrice) * 100)
}
