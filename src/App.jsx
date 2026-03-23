import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Hammer,
  Paintbrush,
  Home,
  Sparkles,
  Stethoscope,
  Wrench,
  Globe,
  Clock,
  Shield,
  BadgeDollarSign,
} from 'lucide-react'
import './App.css'
import logo from './assets/logo.jpeg'

const WHATSAPP_LINK =
  'https://wa.me/5531995195540?text=Hi,%20I%20want%20a%20website%20for%20my%20business.'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')
  }

  const industries = [
    { name: 'Drywall Contractors', icon: Hammer },
    { name: 'Painters', icon: Paintbrush },
    { name: 'Roofers', icon: Home },
    { name: 'Dentists', icon: Stethoscope },
    { name: 'Cleaning Companies', icon: Sparkles },
    { name: 'Handyman Services', icon: Wrench },
  ]

  const portfolioItems = [
    {
      title: 'Andrade Drywall Services',
      category: 'Drywall Contractor',
      url: 'https://andradedrywallservices.com',
      description:
        'Professional website built for a drywall services company focused on trust, clarity, and local lead generation.',
    },
    {
      title: 'Rikos',
      category: 'Business Website',
      url: 'https://rikos.com.br',
      description:
        'Clean business website with a polished presentation and strong visual structure.',
    },
    {
      title: 'Laboratório Mais Você',
      category: 'Medical Laboratory',
      url: 'https://laboratoriomaisvoce.com.br',
      description:
        'Healthcare website designed to present services clearly and strengthen digital presence.',
    },
    {
      title: 'BAR',
      category: 'Domain Project',
      url: 'https://bar.com.br',
      description:
        'Premium domain project presented with a simple and direct digital identity.',
    },
  ]

  const packageFeatures = [
    'Professional business website',
    'Mobile optimized',
    'Fast loading',
    'WhatsApp button included',
    'Lead capture section included',
    'Google-ready structure',
  ]

  const whyUs = [
    {
      title: 'Delivered in 7–14 days',
      description:
        'A realistic timeline with room for revisions and a smoother delivery process.',
      icon: Clock,
    },
    {
      title: 'Affordable pricing',
      description:
        'Simple and clear pricing for small businesses that need a professional online presence.',
      icon: BadgeDollarSign,
    },
    {
      title: 'We handle everything',
      description:
        'Design, setup, hosting, and simple maintenance — all done for you.',
      icon: Shield,
    },
    {
      title: 'No technical knowledge needed',
      description:
        'You focus on your business. We take care of the website side.',
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0f1c]/95 backdrop-blur-md border-b border-blue-900/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3"
              aria-label="Go to top"
            >
              <img
                src={logo}
                alt="Global Domain Ventures"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Examples
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f1c]/98 backdrop-blur-md border-t border-blue-900/30">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                Examples
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                Why Us
              </button>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                <span>Websites delivered in 7–14 business days</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Websites for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Small Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                We build your website, host it, and keep it running — starting
                at $49/month. Simple, professional, and done for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>

                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="border border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-blue-900/20"
                >
                  See Examples
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Simple monthly pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% done-for-you</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-cyan-400/10 blur-3xl rounded-full" />
              <div className="relative bg-[#0f172a] border border-blue-900/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Starter Website Package</p>
                    <h2 className="text-3xl font-bold">$499 setup</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Hosting + maintenance</p>
                    <p className="text-2xl font-bold text-green-400">$49/mo</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {packageFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-2">Domain registration</p>
                  <p className="text-lg font-semibold">$36/year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#0d1323] border-y border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A simple website package built for small businesses
            </h2>
            <p className="text-gray-400 text-lg">
              We keep the process easy. You tell us about your business, and we
              build a clean, professional website that helps customers find and
              contact you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#111827] border border-blue-900/20 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">What’s included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {packageFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-4"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-900/20 rounded-3xl p-8">
              <p className="text-blue-300 text-sm font-medium mb-2">Pricing</p>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-400 text-sm">Website creation</p>
                  <p className="text-3xl font-bold">$499–$699</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Hosting + maintenance</p>
                  <p className="text-3xl font-bold text-green-400">$49/month</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Domain registration</p>
                  <p className="text-2xl font-bold">$36/year</p>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Industries
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We build websites for local service businesses
            </h2>
            <p className="text-gray-400 text-lg">
              Especially businesses that need a simple, professional online
              presence and an easy way for customers to get in touch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div
                  key={industry.name}
                  className="bg-[#111827] border border-blue-900/20 rounded-3xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-[#0d1323] border-y border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Real examples
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Websites already built
            </h2>
            <p className="text-gray-400 text-lg">
              Here are real projects we can show right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#111827] border border-blue-900/20 rounded-3xl p-8 hover:border-blue-500/40 transition-colors"
              >
                <p className="text-blue-400 text-sm font-medium mb-3">
                  {item.category}
                </p>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Why choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple service, clear pricing, realistic delivery
            </h2>
            <p className="text-gray-400 text-lg">
              We focus on small businesses that want a professional website
              without a complicated process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-[#111827] border border-blue-900/20 rounded-3xl p-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-950/70 to-slate-900 border-t border-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-3">
            Ready to start?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get your website in 7–14 days
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Talk to us on WhatsApp and let’s discuss your business.
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-semibold text-xl transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </button>
        </div>
      </section>

      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      <footer className="bg-[#050811] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Global Domain Ventures"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </div>

            <div className="flex items-center gap-8 text-gray-400">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="hover:text-white transition-colors"
              >
                Examples
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="hover:text-white transition-colors"
              >
                Why Us
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Global Domain Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App