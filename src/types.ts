// ===================== Domain model =====================

export type TeamId = string
export type CompanyId = string
export type Holdings = Record<CompanyId, number>

export interface Team {
  id: TeamId
  name: string
  logo: string
  color: string
  cash: number
  holdings: Holdings
  buffs: string[]
  taxFreeRounds: number
  bankrupt: boolean
}

export interface Company {
  id: CompanyId
  name: string
  ticker: string
  icon: string
  color: string
  price: number
  prevPrice: number
  sharesAvailable: number
}

export interface RoundCounter {
  quizDone: boolean
  transactions: number
  extraBuys: number
  buffBought: boolean
  tradeProposed: boolean
}

export interface TradeBundle {
  shares?: Record<CompanyId, number>
  cash?: number
}

export type TradeStatus = 'pending' | 'accepted' | 'rejected'

export interface Trade {
  id: string
  fromTeam: TeamId
  toTeam: TeamId
  give: TradeBundle
  receive: TradeBundle
  status: TradeStatus
}

export interface LogEntry {
  id: number
  kind: string
  text: string
}

export interface GameEventEffect {
  type: string            // 'sector' | 'market' | 'cash'
  companyId?: CompanyId
  pct?: number
  amount?: number
}

export interface GameEvent {
  title: string
  type: string            // 'good' | 'bad' | 'neutral'
  desc: string
  icon: string
  effect: GameEventEffect
}

export interface GameConfig {
  numTeams: number
  totalRounds: number
  startingCash: number
  totalShares: number
  earlyWinShares: number
  maxTransactions: number
  phaseDurations: Record<number, number>
  taxRates: Record<number, number>
  events: Record<number, GameEvent>
}

export interface GameState {
  config: GameConfig
  round: number
  phase: number
  phaseEndsAt: number | null
  paused: boolean
  pauseLeftMs: number | null
  activeTeamId: TeamId
  teams: Team[]
  companies: Company[]
  perRound: Record<TeamId, RoundCounter>
  trades: Trade[]
  event: GameEvent | null
  log: LogEntry[]
  logSeq: number
  winner: TeamId | null
  winReason: string | null
  gameOver: boolean
}

// ===================== Reducer actions =====================

export type GameAction =
  | { type: 'SET_PHASE'; phase: number }
  | { type: 'SET_ACTIVE_TEAM'; teamId: TeamId }
  | { type: 'NEXT_TURN' }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'ANSWER_QUIZ'; difficulty: string; correct: boolean; teamId?: TeamId }
  | { type: 'BUY_SHARE'; companyId: CompanyId; teamId?: TeamId }
  | { type: 'SELL_SHARE'; companyId: CompanyId; teamId?: TeamId }
  | { type: 'BUY_BUFF'; buffId: string; teamId?: TeamId }
  | { type: 'PROPOSE_TRADE'; fromTeam: TeamId; toTeam: TeamId; give: TradeBundle; receive: TradeBundle; teamId?: TeamId }
  | { type: 'RESOLVE_TRADE'; tradeId: string; accept: boolean; teamId?: TeamId }
  | { type: 'END_ROUND' }
  | { type: 'RESET' }
