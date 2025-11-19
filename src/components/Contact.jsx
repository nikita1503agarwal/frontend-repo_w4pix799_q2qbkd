import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Let’s build something futuristic</h2>
            <p className="mt-3 text-white/70">Tell me about your idea. I’ll respond with concepts, timelines, and a plan.</p>

            <div className="mt-8 space-y-3">
              <a href="mailto:hello@itzwish.me" className="group relative inline-flex items-center gap-2 rounded-2xl border border-fuchsia-500/60 bg-fuchsia-500/10 px-6 py-3 text-fuchsia-200 transition hover:bg-fuchsia-500/20">
                <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-fuchsia-500/30 blur-md opacity-50 group-hover:opacity-80" />
                hello@itzwish.me
              </a>
              <div className="block" />
              <a href="https://itzwish.me" target="_blank" className="group relative inline-flex items-center gap-2 rounded-2xl border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 text-cyan-200 transition hover:bg-cyan-400/20" rel="noreferrer">
                <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-cyan-400/30 blur-md opacity-50 group-hover:opacity-80" />
                itzwish.me
              </a>
            </div>
          </div>
          <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none placeholder-white/40 focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
              <input className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none placeholder-white/40 focus:ring-2 focus:ring-cyan-400" placeholder="Email" />
              <textarea rows={5} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none placeholder-white/40 focus:ring-2 focus:ring-fuchsia-500" placeholder="Your message" />
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white transition hover:bg-white/15">
                <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
