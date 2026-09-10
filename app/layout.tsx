import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Capitólio 2026 — Guia da viagem",
  description: "Guia digital privado para uma viagem de 3 dias a Capitólio, Minas Gerais.",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Suspense fallback={null}>{children}</Suspense></body></html>
}
