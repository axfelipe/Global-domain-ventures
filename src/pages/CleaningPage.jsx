import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'

const WHATSAPP_LINK =
  'https://wa.me/5531995195540?text=Hi,%20I%20want%20a%20website%20for%20my%20cleaning%20business.'

export default function CleaningPage() {
  const openWhatsApp = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'cleaning_page',
      })
    }
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">
          Website Design for Cleaning Services in the USA
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          We build professional websites for cleaning companies that want more
          leads, more trust, and a simple way for customers to get in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            'Present your cleaning services clearly',
            'Build trust with homeowners and offices',
            'Make booking inquiries easier',
            'Create a stronger online presence',
          ].map((item) => (
            <div key={item} className="bg-[#111827] rounded-2xl p-5 border border-blue-900/20 flex gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-blue-900/20 mb-10">
          <h2 className="text-2xl font-semibold mb-4">What your cleaning website should include</h2>
          <p className="text-gray-400 mb-6">
            A cleaning service website should make your company look reliable,
            show your services clearly, and encourage visitors to request a quote.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>• Mobile-friendly design</li>
            <li>• Fast loading pages</li>
            <li>• Service list and contact section</li>
            <li>• WhatsApp and quote request buttons</li>
            <li>• SEO-ready structure</li>
          </ul>
        </div>

        <button
          onClick={openWhatsApp}
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Talk on WhatsApp
        </button>
      </div>
    </div>
  )
}
