import { createContext, useContext, useReducer, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { gameReducer, makeInitialState } from './gameReducer'
import type { GameState, GameAction, TeamId } from '../types'

interface GameContextValue {
  state: GameState
  dispatch: (action: GameAction) => void
  isHost: boolean
  viewTeamId: TeamId
  secondsLeft: number | null
}

const GameContext = createContext<GameContextValue | null>(null)

interface GameProviderProps {
  children: ReactNode
  numTeams?: number
}

/**
 * Chế độ "một máy / quản trò": toàn bộ ván chạy bằng state cục bộ trong React,
 * không có backend / socket. Đồng hồ chạy LẦN LƯỢT từng nhóm trong mỗi phase:
 * hết giờ nhóm này → sang nhóm kế; xong nhóm cuối → sang phase kế; hết phase 3 → kết thúc round.
 */
export function GameProvider({ children, numTeams = 4 }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, numTeams, makeInitialState)

  // Giữ state mới nhất cho interval (đăng ký 1 lần).
  const stateRef = useRef(state)
  useEffect(() => { stateRef.current = state })

  // Đồng hồ chạy luật: hết giờ lượt hiện tại → sang nhóm kế / phase kế / kết thúc round.
  // stateRef chỉ cập nhật sau khi React render, nên dùng sentDeadlineRef để CHỈ bắn
  // NEXT_TURN đúng 1 lần cho mỗi mốc phaseEndsAt (tránh bắn 2 lần làm nhảy cóc 1 nhóm).
  const sentDeadlineRef = useRef<number | null>(null)
  useEffect(() => {
    const iv = setInterval(() => {
      const cur = stateRef.current
      if (!cur || cur.gameOver || cur.paused || !cur.phaseEndsAt) return
      if (Date.now() >= cur.phaseEndsAt && sentDeadlineRef.current !== cur.phaseEndsAt) {
        sentDeadlineRef.current = cur.phaseEndsAt
        dispatch({ type: 'NEXT_TURN' })
      }
    }, 500)
    return () => clearInterval(iv)
  }, [])

  // Đồng hồ hiển thị (mọi giây tự cập nhật để vẽ số đếm ngược).
  const [now, setNow] = useState<number>(() => Date.now())
  useEffect(() => {
    const iv = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(iv)
  }, [])

  const secondsLeft = state.gameOver
    ? null
    : state.paused
      ? Math.max(0, Math.ceil((state.pauseLeftMs ?? 0) / 1000))          // đóng băng khi tạm dừng
      : state.phaseEndsAt
        ? Math.max(0, Math.ceil((state.phaseEndsAt - now) / 1000))
        : null

  const value: GameContextValue = {
    state,
    dispatch,
    isHost: true,
    viewTeamId: state.activeTeamId,
    secondsLeft,
  }
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame phải nằm trong <GameProvider>')
  return ctx
}
