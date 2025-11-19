import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Social from './components/Social'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpotifyDocs from './components/SpotifyDocs'

function HomePage() {
  return (
    <>
      <Hero />
      <Social />
      <About />
      <Projects />
      <Contact />
      <SpotifyDocs />
    </>
  )
}

function AboutPage() { return (<><Hero /><About /><Footer /></>) }
function ProjectsPage() { return (<><Hero /><Projects /><Footer /></>) }
function ContactPage() { return (<><Hero /><Contact /><Footer /></>) }

export default function App() {
  return (
    <div className="min-h-screen font-[var(--font-manrope)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
