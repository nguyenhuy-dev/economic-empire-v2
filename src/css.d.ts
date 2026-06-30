import 'react'

// Cho phép dùng CSS custom property (--tc, --bc, ...) trong style inline
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
