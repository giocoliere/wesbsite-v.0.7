declare global {
  interface Window {
    ElfSight?: {
      refresh: () => void
    }
  }
}

export {}
