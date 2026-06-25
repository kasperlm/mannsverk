'use client'

import { useEffect, useState } from 'react'

const lines = [
  '> Kasper Mannsverk',
  '> Full-stack indie developer',
  '> Based in Norway',
]

function TerminalTyper() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }

    const line = lines[currentLine]
    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev]
          if (next.length <= currentLine) next.push('')
          next[currentLine] = line.slice(0, charIndex + 1)
          return next
        })
        setCharIndex((c) => c + 1)
      }, 28)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCharIndex(0)
      }, 220)
      return () => clearTimeout(t)
    }
  }, [currentLine, charIndex, done])

  return (
    <div className="font-mono text-sm text-muted-foreground space-y-1 min-h-[6rem]" aria-live="polite">
      {visibleLines.map((line, i) => (
        <p key={i} className={i === visibleLines.length - 1 && !done ? 'text-foreground' : ''}>
          {line}
          {i === visibleLines.length - 1 && !done && (
            <span className="cursor-blink text-primary">█</span>
          )}
        </p>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto"
      aria-label="Hero"
    >
      {/* Grid lines background decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 3%) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Terminal block */}
        <div className="bg-card border border-border rounded-lg p-5 mb-12 max-w-md font-mono">
          <div className="flex items-center gap-2 mb-4">
            <span className="size-3 rounded-full bg-destructive/60 block" />
            <span className="size-3 rounded-full bg-primary/30 block" />
            <span className="size-3 rounded-full bg-primary/60 block" />
            <span className="ml-2 text-xs text-muted-foreground">mannsverk ~ zsh</span>
          </div>
          <TerminalTyper />
        </div>
      </div>
    </section>
  )
}
