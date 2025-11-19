import React from 'react'
import { Instagram, Github, Waves } from 'lucide-react'

export default function Social() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Instagram */}
          <a href="https://instagram.com/itzmewish" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/60 transition">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/60 border border-white/10 text-white">
                <Instagram />
              </div>
              <div>
                <p className="text-white/70 text-sm">Follow on</p>
                <h3 className="text-white text-xl font-semibold">Instagram</h3>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a href="https://github.com/H1ouredWish" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/60 transition">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/60 border border-white/10 text-white">
                <Github />
              </div>
              <div>
                <p className="text-white/70 text-sm">Explore</p>
                <h3 className="text-white text-xl font-semibold">GitHub</h3>
              </div>
            </div>
          </a>

          {/* Spotify Panel Placeholder */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-0 backdrop-blur-xl">
            <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]" />
            <div className="relative p-6 grid grid-cols-[72px,1fr] gap-4 items-center">
              <div className="h-16 w-16 rounded-xl bg-white/10 border border-white/20" />
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Now Playing</h3>
                  <Waves className="text-fuchsia-400 animate-pulse" />
                </div>
                <p className="text-white/80 text-sm mt-1">Song Title — Artist</p>
                <div className="mt-3 h-1 rounded bg-white/10">
                  <div className="h-1 w-1/3 rounded bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
            {/* Placeholder code snippet for Spotify integration */}
            <div className="relative border-t border-white/10 p-4 text-xs text-white/60">
              <pre className="whitespace-pre-wrap">{
`// Example: Fetch Spotify now playing from backend
fetch(\`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/spotify/now-playing\`)
  .then(r => r.json())
  .then(data => console.log(data))`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
