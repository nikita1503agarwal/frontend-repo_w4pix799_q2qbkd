import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-300/40 to-cyan-300/40 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-900/5 ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Futuristic portrait" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              itzwish.me
            </div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">About Wish</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">I craft premium, next‑gen experiences blending code, design, and motion. Obsessed with detail, performance, and futuristic aesthetics.</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Developer','Full Stack Developer','UI/UX Designer','Gamer'].map((t) => (
                <div key={t} className="rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-slate-200 p-4">
                  <p className="text-slate-800 font-semibold">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
