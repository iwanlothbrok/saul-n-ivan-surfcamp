'use client'

import React, { useState } from 'react'
import {
  Waves,
  Sun,
  ShieldCheck,
  MapPin,
  Star,
  Users,
  CheckCircle2,
  Calendar,
  Home,
  Clock,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Award,
  Video,
  HeartHandshake,
  MessageCircle,
  Bed,
  Globe,
  Sparkles,
  Wind,
  Compass,
  Thermometer,
  Eye,
  Check
} from 'lucide-react'
import { t, packagesData, housesData, reviewsData, faqsData } from '../data/content'

export default function HomePage() {
  const [lang, setLang] = useState('es')
  const [selectedNights, setSelectedNights] = useState(7)
  const [activeLevel, setActiveLevel] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Calculator states
  const [calcCamp, setCalcCamp] = useState('intensivo')
  const [calcNights, setCalcNights] = useState(7)
  const [calcGuests, setCalcGuests] = useState(1)
  const [calcRoom, setCalcRoom] = useState('shared')
  const [calcDate, setCalcDate] = useState('')
  const [calcName, setCalcName] = useState('')
  const [calcEmail, setCalcEmail] = useState('')
  const [calcPhone, setCalcPhone] = useState('')
  const [calcNotes, setCalcNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const curT = t[lang]

  // Filter packages by level if selected
  const filteredPackages = packagesData.filter(p => {
    if (activeLevel === 'all') return true
    if (activeLevel === 'beginner') return p.id === 'debutantes' || p.id === 'intensivo'
    if (activeLevel === 'intermediate') return p.id === 'experiencia_total'
    if (activeLevel === 'advanced') return p.id === 'tecnificacion'
    return true
  })

  // Calculate live price
  const baseCamp = packagesData.find(p => p.id === calcCamp) || packagesData[1]
  const roomMultiplier = calcRoom === 'private' ? 1.25 : calcRoom === 'penthouse' ? 1.5 : 1.0
  const nightsMultiplier = calcNights === 3 ? 1.0 : calcNights === 5 ? 1.55 : calcNights === 7 ? 2.05 : calcNights === 10 ? 2.85 : 3.8
  const estimatedTotal = Math.round(baseCamp.basePrice3Nights * nightsMultiplier * roomMultiplier * calcGuests)

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Saul n Ivan! Quiero consultar disponibilidad para el ${baseCamp.nameEs}, ${calcNights} noches, ${calcGuests} persona(s), fecha aprox: ${calcDate || 'Próximamente'}. Mi nombre es ${calcName || 'un futuro surfista'}.`
    )
    return `https://wa.me/34612345678?text=${text}`
  }

  return (
    <div className="min-h-screen bg-[#070b12] font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950">

      {/* TOP NOTIFICATION / LIVE SWELL BAR */}
      <div className="bg-[#0b121e]/90 backdrop-blur-md text-slate-300 text-xs py-2 px-4 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Live Conditions Ticker */}
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Famara: 1.8m @ 12s
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Wind className="w-3.5 h-3.5 text-sky-400" /> Offshore 8 kts
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Agua 21°C
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline text-slate-400">
              📍 Reserva Natural de Famara, Lanzarote
            </span>
          </div>

          {/* Social Proof & Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-300 font-medium">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="text-white font-bold">4.98</span>
              <span className="text-slate-400">/ 5</span>
              <span className="text-slate-500 text-[11px]">(280+ reseñas)</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 text-xs">
              <Globe className="w-3 h-3 text-slate-400 mr-0.5" />
              <button
                onClick={() => setLang('es')}
                className={`px-1.5 py-0.5 rounded font-bold transition ${lang === 'es' ? 'text-amber-300 bg-white/10' : 'text-slate-400 hover:text-white'}`}
              >
                ES
              </button>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded font-bold transition ${lang === 'en' ? 'text-amber-300 bg-white/10' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => setLang('bg')}
                className={`px-1.5 py-0.5 rounded font-bold transition ${lang === 'bg' ? 'text-amber-300 bg-white/10' : 'text-slate-400 hover:text-white'}`}
              >
                BG
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#070b12]/80 backdrop-blur-xl border-b border-white/5 transition duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Saul n Ivan */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400/20 via-sky-500/20 to-surf-600/30 p-[1px] shadow-lg shadow-black/40 group-hover:scale-105 transition transform">
              <div className="w-full h-full rounded-[15px] bg-[#0c1322] flex items-center justify-center">
                <Waves className="w-6 h-6 text-amber-300 transition group-hover:text-amber-200" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                Saul <span className="text-amber-400 font-serif italic text-xl">&amp;</span> Ivan
              </span>
              <span className="block text-[9px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                {curT.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#camps" className="hover:text-amber-300 transition duration-200">{curT.navCamps}</a>
            <a href="#why-us" className="hover:text-amber-300 transition duration-200">{curT.navWhyUs}</a>
            <a href="#houses" className="hover:text-amber-300 transition duration-200">{curT.navHouses}</a>
            <a href="#calculator" className="hover:text-amber-300 transition duration-200">{curT.navCalculator}</a>
            <a href="#reviews" className="hover:text-amber-300 transition duration-200">{curT.navReviews}</a>
            <a href="#faq" className="hover:text-amber-300 transition duration-200">{curT.navFaq}</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/34612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              {curT.bookNow}
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1322] border-b border-white/10 px-6 pt-4 pb-8 space-y-4">
            <a href="#camps" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navCamps}</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navWhyUs}</a>
            <a href="#houses" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navHouses}</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navCalculator}</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navReviews}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-200 hover:text-amber-300">{curT.navFaq}</a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-black text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300"
              >
                {curT.bookNow}
              </a>
              <a
                href="https://wa.me/34612345678"
                className="w-full text-center py-2.5 rounded-full font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
              >
                WhatsApp (+34 612 345 678)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - REFINED LUXURY EDITORIAL STYLE */}
      <section className="relative min-h-[640px] lg:min-h-[720px] py-16 flex items-center justify-center overflow-hidden bg-[#070b12]">
        
        {/* High-definition cinematic ocean backdrop */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2200&q=85')"
          }}
        />

        {/* Cinematic smooth radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b12]/80 via-[#070b12]/50 to-[#070b12] z-10" />
        <div className="absolute inset-0 hero-mesh z-10 pointer-events-none" />

        {/* Ambient floating blur orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] z-10 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Subtle location pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-amber-200/90 mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-wide">{curT.badgeFamara}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.08]">
            Surf?{' '}
            <span className="text-gradient-champagne font-serif italic font-normal">
              Es una forma
            </span>{' '}
            <span className="text-white">de vida.</span>
          </h1>

          {/* Subheading in warm champagne gold */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300/90 mb-10 font-normal leading-relaxed">{curT.heroDesc}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#camps"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 shadow-2xl shadow-white/10 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <span>{curT.btnExplore}</span>
              <ArrowRight className="w-4 h-4 transition transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#calculator"
              className="w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-white glass-pill hover:bg-white/15 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{curT.btnCalculate}</span>
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{curT.btnWhatsApp}</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Instructores Titulados ISA &amp; Rescate</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-300" />
              <span>+2,800 Alumnos Graduados</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.98 / 5 Puntuación Media</span>
            </div>
          </div>

        </div>
      </section>

      {/* STATS & VALUE TICKER */}
      <section className="bg-[#0b121e] border-y border-white/5 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-start gap-4 p-5 rounded-2xl glass-premium card-hover-glow">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{curT.statWaves}</h3>
                <p className="text-xs text-slate-400 mt-1">{curT.statWavesDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass-premium card-hover-glow">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{curT.statSmallGroups}</h3>
                <p className="text-xs text-slate-400 mt-1">{curT.statSmallGroupsDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass-premium card-hover-glow">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{curT.statCoaches}</h3>
                <p className="text-xs text-slate-400 mt-1">{curT.statCoachesDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass-premium card-hover-glow">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{curT.statBeach}</h3>
                <p className="text-xs text-slate-400 mt-1">{curT.statBeachDesc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAUL N IVAN */}
      <section id="why-us" className="py-24 bg-[#070b12] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              {curT.brand} Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              {curT.whyTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {curT.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-premium p-7 rounded-3xl hover:border-amber-400/40 transition group card-hover-glow">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{curT.why1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{curT.why1Desc}</p>
            </div>

            <div className="glass-premium p-7 rounded-3xl hover:border-sky-400/40 transition group card-hover-glow">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{curT.why2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{curT.why2Desc}</p>
            </div>

            <div className="glass-premium p-7 rounded-3xl hover:border-emerald-400/40 transition group card-hover-glow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{curT.why3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{curT.why3Desc}</p>
            </div>

            <div className="glass-premium p-7 rounded-3xl hover:border-purple-400/40 transition group card-hover-glow">
              <div className="w-12 h-12 rounded-2xl bg-purple-400/10 border border-purple-400/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{curT.why4Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{curT.why4Desc}</p>
            </div>

          </div>

          {/* FOUNDERS EDITORIAL CARD */}
          <div className="mt-16 glass-premium rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Conoce a los fundadores
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                  Saul &amp; Ivan: Pura pasión por las olas de Famara
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  Crecimos surfeando las costas de Lanzarote y conocemos cada sección, corriente y marea de Famara como la palma de nuestra mano. Fundamos este camp para alejarte del turismo masivo y ofrecerte una experiencia auténtica: grupos reducidos, sonrisas en el agua, técnica depurada y amigos que te durarán toda la vida.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-lg text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Entrenadores Titulados ISA
                  </span>
                  <span className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-lg text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Socorrismo Acuático Profesional
                  </span>
                  <span className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-lg text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> +15 Años en Famara
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400/30 to-sky-400/30 p-[1px] mb-4">
                  <div className="w-full h-full rounded-[15px] bg-[#0c1322] flex items-center justify-center">
                    <Waves className="w-10 h-10 text-amber-300" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white">Saul &amp; Ivan</h4>
                <p className="text-xs text-slate-400 mt-0.5">Directores &amp; Head Coaches</p>
                <a
                  href="#calculator"
                  className="mt-5 w-full py-2.5 px-4 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-md"
                >
                  Reserva con nosotros
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SURF CAMPS & PACKAGES - REFINED LIGHT BACKGROUND FOR CLARITY */}
      <section id="camps" className="py-24 bg-[#f8fafc] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-surf-700 bg-surf-100 px-3.5 py-1.5 rounded-full">
              All Inclusive Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              {curT.campsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {curT.campsSubtitle}
            </p>

            {/* Interactive Night Selector */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-slate-200/80 shadow-inner">
              <span className="text-xs font-bold text-slate-600 pl-4 pr-2 hidden sm:inline">
                {curT.selectNights}
              </span>
              {[3, 5, 7, 10, 14].map(n => (
                <button
                  key={n}
                  onClick={() => setSelectedNights(n)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition duration-200 ${
                    selectedNights === n
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {n} {curT.nightsUnit}
                </button>
              ))}
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {packagesData.map(pkg => {
              const multiplier = selectedNights === 3 ? 1.0 : selectedNights === 5 ? 1.55 : selectedNights === 7 ? 2.05 : selectedNights === 10 ? 2.85 : 3.8
              const price = Math.round(pkg.basePrice3Nights * multiplier)
              const name = lang === 'en' ? pkg.nameEn : lang === 'bg' ? pkg.nameBg : pkg.nameEs
              const desc = lang === 'en' ? pkg.descEn : lang === 'bg' ? pkg.descBg : pkg.descEs

              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 relative bg-white ${
                    pkg.popular
                      ? 'border-2 border-amber-400 shadow-2xl ring-4 ring-amber-400/10'
                      : 'border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300'
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
                      ★ {curT.mostPopular} ★
                    </div>
                  )}

                  {/* Card Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={name}
                      className="w-full h-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                      <span className="text-white text-xs font-bold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                        {selectedNights} {curT.nightsUnit}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                        {name}
                      </h3>
                      <p className="text-xs text-slate-600 mb-6 leading-relaxed min-h-[48px]">
                        {desc}
                      </p>

                      {/* Pricing Tag */}
                      <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] text-slate-500 block">Total {selectedNights} {curT.nightsUnit}</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900">{price}€</span>
                            <span className="text-xs text-slate-500">{curT.perPerson}</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-surf-700 bg-surf-100 px-2 py-1 rounded-md">
                          ~{Math.round(price / selectedNights)}€/noche
                        </span>
                      </div>

                      {/* Feature List */}
                      <ul className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-tight">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat[lang] || feat.es}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#calculator"
                      onClick={() => {
                        setCalcCamp(pkg.id)
                        setCalcNights(selectedNights)
                      }}
                      className={`w-full py-3.5 px-4 rounded-2xl text-center text-xs font-black uppercase tracking-wider transition duration-200 ${
                        pkg.popular
                          ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {curT.bookCamp}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* SURF HOUSES / ACCOMMODATION */}
      <section id="houses" className="py-24 bg-[#0c1322] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Beachside Surf Houses
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              {curT.housesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {curT.housesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {housesData.map(h => (
              <div
                key={h.id}
                className="glass-premium rounded-3xl overflow-hidden hover:border-amber-400/30 transition group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">
                    {h.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{h.name}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{h.dist}</span>
                    </div>

                    <div className="text-xs text-slate-400 mb-4 font-medium flex items-center gap-2">
                      <Bed className="w-3.5 h-3.5 text-slate-500" />
                      <span>{h.capacity}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 border-t border-white/5 pt-3 mb-6">
                      {h.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#calculator"
                    className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition"
                  >
                    Ver disponibilidad
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TYPICAL DAY SCHEDULE */}
      <section className="py-24 bg-[#070b12] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              The Daily Flow
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              {curT.dayTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {curT.daySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="glass-premium p-5 rounded-2xl card-hover-glow">
              <span className="text-xs font-black text-amber-300">08:30 - Desayuno</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Café recién hecho, fruta fresca y vistas al mar para empezar con energía.</p>
            </div>
            <div className="glass-premium p-5 rounded-2xl card-hover-glow">
              <span className="text-xs font-black text-amber-300">09:30 - Lectura de mar</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Saul &amp; Ivan analizan el viento, mareas y definen objetivos del día.</p>
            </div>
            <div className="glass-premium p-5 rounded-2xl border-amber-400/40 shadow-lg shadow-amber-400/5 card-hover-glow">
              <span className="text-xs font-black text-amber-300">10:00 - 12:30 Sesión</span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">Práctica intensiva en el agua, corrección de postura y fotos HD.</p>
            </div>
            <div className="glass-premium p-5 rounded-2xl card-hover-glow">
              <span className="text-xs font-black text-amber-300">13:00 - Picnic playa</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Comida sana en la arena, descanso bajo el sol y risas en grupo.</p>
            </div>
            <div className="glass-premium p-5 rounded-2xl card-hover-glow">
              <span className="text-xs font-black text-sky-300">15:00 - Video análisis</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Revisión en vídeo o práctica de giros en surf-skate sobre asfalto.</p>
            </div>
            <div className="glass-premium p-5 rounded-2xl card-hover-glow">
              <span className="text-xs font-black text-amber-300">19:00 - Sunset &amp; Chill</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Atardecer sobre la bahía de Famara y cena compartida en el pueblo.</p>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE BOOKING / PRICE CALCULATOR */}
      <section id="calculator" className="py-24 bg-[#0c1322] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Live Price Calculator
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-4 tracking-tight">
              {curT.calcTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {curT.calcSubtitle}
            </p>
          </div>

          <div className="glass-premium rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">¡Solicitud Recibida!</h3>
                <p className="text-slate-300 max-w-md mx-auto mb-8 text-sm">
                  {curT.calcSuccess}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir WhatsApp directo ahora
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Calcular otra fecha
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                
                {/* Selectors Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {curT.fieldCamp}
                    </label>
                    <select
                      value={calcCamp}
                      onChange={(e) => setCalcCamp(e.target.value)}
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {packagesData.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.nameEs}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {curT.fieldNights}
                    </label>
                    <select
                      value={calcNights}
                      onChange={(e) => setCalcNights(Number(e.target.value))}
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value={3}>3 noches (escapada fin de semana)</option>
                      <option value={5}>5 noches (progreso rápido)</option>
                      <option value={7}>7 noches (1 semana completa)</option>
                      <option value={10}>10 noches (experiencia profunda)</option>
                      <option value={14}>14 noches (2 semanas intensivas)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {curT.fieldGuests}
                    </label>
                    <select
                      value={calcGuests}
                      onChange={(e) => setCalcGuests(Number(e.target.value))}
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value={1}>1 persona (viajero solo)</option>
                      <option value={2}>2 personas (pareja / amigos)</option>
                      <option value={3}>3 personas</option>
                      <option value={4}>4 personas (grupo)</option>
                      <option value={5}>5 personas</option>
                      <option value={6}>6+ personas (grupo grande)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {curT.fieldRoom}
                    </label>
                    <select
                      value={calcRoom}
                      onChange={(e) => setCalcRoom(e.target.value)}
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="shared">Cama en habitación compartida</option>
                      <option value="private">Habitación privada (+25%)</option>
                      <option value="penthouse">Ático privado La Cubierta (+50%)</option>
                    </select>
                  </div>
                </div>

                {/* Instant Quote Box with champagne aesthetic */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-400/10 via-white/[0.04] to-sky-400/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block">
                      {curT.totalEst}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{estimatedTotal}€</span>
                      <span className="text-xs text-slate-400">
                        ({calcGuests} pers. • {calcNights} noches • {calcRoom === 'shared' ? 'hab. compartida' : calcRoom === 'private' ? 'hab. privada' : 'ático'})
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-emerald-400 font-medium">
                    ✓ Sin pago por adelantado para consultar<br />
                    ✓ Cancelación flexible con Saul &amp; Ivan
                  </div>
                </div>

                {/* User Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      {curT.fieldName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={calcName}
                      onChange={(e) => setCalcName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      {curT.fieldEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={calcEmail}
                      onChange={(e) => setCalcEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      {curT.fieldPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={calcPhone}
                      onChange={(e) => setCalcPhone(e.target.value)}
                      placeholder="+34 600 000 000"
                      className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    {curT.fieldNotes}
                  </label>
                  <textarea
                    rows={2}
                    value={calcNotes}
                    onChange={(e) => setCalcNotes(e.target.value)}
                    placeholder="Cuéntanos tu nivel actual, fechas tentativas o dudas..."
                    className="w-full bg-[#070b12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-8 rounded-full font-black text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/20 transition transform hover:-translate-y-0.5"
                  >
                    {curT.btnSubmitCalc}
                  </button>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-4 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar directo por WhatsApp
                  </a>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section id="reviews" className="py-24 bg-[#070b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Real Surfer Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              {curT.reviewsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {curT.reviewsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewsData.map((rev, i) => (
              <div
                key={i}
                className="glass-premium p-7 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-amber-400/30 transition card-hover-glow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed mb-6 font-normal">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/30"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    <span className="text-[10px] text-slate-400">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#0b121e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
              {curT.faqTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {curT.faqSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((item, index) => {
              const q = lang === 'en' ? item.qEn : lang === 'bg' ? item.qBg : item.qEs
              const a = lang === 'en' ? item.aEn : lang === 'bg' ? item.aBg : item.aEs
              const isOpen = openFaq === index

              return (
                <div
                  key={index}
                  className="glass-premium rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left font-bold text-white flex justify-between items-center hover:bg-white/[0.03]"
                  >
                    <span className="text-sm sm:text-base pr-4">{q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-300 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5">
                      {a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080e] text-slate-400 pt-16 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
            
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-sky-400/20 p-[1px]">
                  <div className="w-full h-full rounded-[11px] bg-[#0c1322] flex items-center justify-center">
                    <Waves className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <span className="text-2xl font-black text-white">Saul <span className="text-amber-400 font-serif italic">&amp;</span> Ivan</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mb-6">
                {curT.footerAbout}
              </p>
              <div className="text-xs text-slate-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{curT.footerAddress}</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Surf Camps</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#camps" className="hover:text-amber-300 transition">Camp Debutantes (Iniciación)</a></li>
                <li><a href="#camps" className="hover:text-amber-300 transition">Camp Principiante Intensivo</a></li>
                <li><a href="#camps" className="hover:text-amber-300 transition">Camp Experiencia Total (Intermedio)</a></li>
                <li><a href="#camps" className="hover:text-amber-300 transition">Camp Tecnificación Saul &amp; Ivan</a></li>
                <li><a href="#houses" className="hover:text-amber-300 transition">Surf Houses en Famara</a></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contacto Directo</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-300" />
                  <a href="tel:+34612345678" className="hover:text-white">+34 612 345 678</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <a href="https://wa.me/34612345678" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp con Saul e Ivan
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-300" />
                  <a href="mailto:hola@saulnivan-surfcamp.com" className="hover:text-white">
                    hola@saulnivan-surfcamp.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Abierto todos los días 08:00 - 20:30</span>
                </li>
              </ul>
            </div>

            {/* Col 4: WhatsApp CTA */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">¿Hablamos de olas?</h4>
              <p className="text-xs text-slate-400 mb-4">
                Escríbenos directamente o reserva tu plaza para la próxima temporada antes de que se agoten las habitaciones.
              </p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar a Saul e Ivan por WhatsApp
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 {curT.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Aviso Legal</a>
              <a href="#" className="hover:text-slate-400">Política de Privacidad</a>
              <a href="#" className="hover:text-slate-400">Cookies</a>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group transition transform hover:scale-110"
        title="Hablar con Saul &amp; Ivan"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline-block text-xs font-bold pr-1">
          WhatsApp con Saul &amp; Ivan
        </span>
      </a>

    </div>
  )
}

