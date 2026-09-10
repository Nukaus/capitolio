'use client'

import { useEffect, useState } from "react"
import { arrivalDate } from "@/data/trip"

const units = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
] as const

function getRemaining(target: Date, now: number) {
  const difference = Math.max(0, target.getTime() - now)
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor(difference / 3600000) % 24,
    minutes: Math.floor(difference / 60000) % 60,
    seconds: Math.floor(difference / 1000) % 60,
    started: now >= target.getTime(),
  }
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  if (now === null) {
    return <div className="mt-8 h-[76px]" aria-label="Carregando contagem regressiva" />
  }

  const remaining = getRemaining(arrivalDate, now)

  if (remaining.started) {
    return <p className="mt-8 text-sm font-semibold text-white/85">É HOJE! Aproveitem cada momento.</p>
  }

  return (
    <div className="mt-8 grid max-w-sm grid-cols-4 gap-2.5" aria-label="Contagem regressiva para a viagem">
      {units.map(({ key, label }) => (
        <div key={key} className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center shadow-lg backdrop-blur-md">
          <strong className="block font-serif text-2xl leading-none text-white tabular-nums">{String(remaining[key]).padStart(2, "0")}</strong>
          <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.12em] text-white/65">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Countdown
