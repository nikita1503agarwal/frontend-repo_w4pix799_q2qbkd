import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black overflow-hidden">
      {/* Neon gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" /> AI-Driven Portfolio
          </div>

          <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
            WISH — Developer, Designer, Innovator
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Building the future with code, creativity, and imagination.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-2xl border border-fuchsia-500/60 bg-fuchsia-500/10 px-6 py-3 text-fuchsia-200 transition hover:bg-fuchsia-500/20">
              <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-fuchsia-500/30 blur-md opacity-50 group-hover:opacity-80" />
              Explore Work
            </a>
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-2xl border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 text-cyan-200 transition hover:bg-cyan-400/20">
              <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-cyan-400/30 blur-md opacity-50 group-hover:opacity-80" />
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Glow line separator */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/60 to-cyan-400/0" />
      </div>
    </section>
  )
}
