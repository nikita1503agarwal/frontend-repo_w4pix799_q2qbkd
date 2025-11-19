import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/60 to-cyan-400/0" />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">Designed and Built by Wish • itzwish.me</p>
          <p className="text-xs text-white/40">All rights and credits to itzwish.me</p>
        </div>
      </div>
    </footer>
  )
}
