import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'

const WHATSAPP_LINK =
  'https://wa.me/5531995195540?text=Hi,%20I%20want%20a%20website%20for%20my%20painting%20business%20in%20Orlando.'

export default function PaintersPage() {
  const openWhatsApp = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'painters_page_orlando',
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

        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6 leading-tight">
          Affordable Website Design for Painters in Orlando
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl">
          We build fast, professional websites for painters in Orlando who want
          more local leads, more quote requests, and a stronger online presence.
          Get your painting website ready in 7–14 days.
        </p>

        <div className="mb-12">
          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Get a Free Quote on WhatsApp
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            'Get more painting leads in Orlando',
            'Show before-and-after projects clearly',
            'Build trust with homeowners before they call',
            'Make it easy for customers to request a quote',
            'Look more professional than local competitors',
            'Mobile-optimized for more calls and messages',
          ].map((item) => (
            <div
              key={item}
              className="bg-[#111827] rounded-2xl p-5 border border-blue-900/20 flex gap-3"
            >
              <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-blue-900/20 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What a painting website in Orlando should include
          </h2>

          <p className="text-gray-300 mb-6">
            A painting website should do more than look nice. It should help your
            business look trustworthy, show real work, and turn visitors into
            calls and quote requests from local customers.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Mobile-friendly design for customers searching on their phone</li>
            <li>• Fast loading pages to keep visitors on your site</li>
            <li>• Painting services and service area information</li>
            <li>• Before-and-after photos that build credibility</li>
            <li>• Strong call-to-action buttons for quotes and WhatsApp</li>
            <li>• SEO-ready structure for Orlando painting searches</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-blue-900/20 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Perfect for painters who want more local jobs
          </h2>

          <p className="text-gray-300 mb-4">
            This is ideal for house painters, commercial painters, independent
            painting contractors, and small painting companies in Orlando that
            want a clean, professional website focused on generating more leads.
          </p>

          <p className="text-gray-300">
            Whether you offer interior painting, exterior painting, cabinet
            painting, drywall prep, or pressure washing, a strong website helps
            your business stand out and win more local customers.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 rounded-3xl p-8 border border-blue-900/20">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to get more painting leads in Orlando?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s build a website that helps your painting business look more
            professional, earn trust fast, and generate more local quote requests.
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Painting Website Today
          </button>
        </div>
      </div>
    </div>
  )
}
