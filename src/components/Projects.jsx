import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Neon UI Kit', desc: 'Glassmorphic components with glow effects', tags: ['React', 'Tailwind'] },
  { title: 'AI Image Studio', desc: 'Generative art with control panels', tags: ['FastAPI', 'AI'] },
  { title: 'Cyber Dashboard', desc: 'Real-time analytics in sci‑fi style', tags: ['Vite', 'D3'] },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="mt-2 text-slate-600">Floating glass cards with neon borders and smooth hover.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-slate-200 shadow-xl">
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 0 1px rgba(168,85,247,0.5), 0 0 35px rgba(34,211,238,0.35)' }} />
              <div className="relative p-6">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-slate-100 to-white ring-1 ring-slate-200" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
