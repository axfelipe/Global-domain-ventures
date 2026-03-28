import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'

const WHATSAPP_LINK =
  'https://wa.me/5531995195540?text=Hi,%20I%20want%20a%20website%20for%20my%20roofing%20business%20in%20Houston.'

export default function RoofingPage() {
  const openWhatsApp = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'roofing_page_houston',
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
          Affordable Website Design for Roofing Contractors in Houston
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl">
          We build fast, professional websites for roofing contractors in Houston
          who want more calls, more local leads, and a stronger online presence.
          Get your roofing website ready in 7–14 days.
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
            'Get more roofing leads in Houston',
            'Build trust with homeowners before they call',
            'Show your roofing services and past projects clearly',
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
            What a roofing website in Houston should include
          </h2>

          <p className="text-gray-300 mb-6">
            A roofing website should do more than look good. It should help your
            business appear professional, rank better locally, and turn visitors
            into real calls and quote requests.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Mobile-friendly design for customers searching on their phone</li>
            <li>• Fast loading pages to keep visitors on your site</li>
            <li>• Clear roofing services and service area information</li>
            <li>• Project photos that build credibility</li>
            <li>• Strong call-to-action buttons for quotes and WhatsApp</li>
            <li>• SEO-ready structure for Houston roofing searches</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-blue-900/20 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Perfect for roofing contractors who want more jobs
          </h2>

          <p className="text-gray-300 mb-4">
            This is ideal for small roofing companies, independent roofers, and
            service businesses in Houston that want a simple, professional website
            focused on generating more local customers.
          </p>

          <p className="text-gray-300">
            Whether you offer roof repair, roof replacement, inspections, or
            residential roofing services, a strong website helps your company look
            established and ready to win more business.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 rounded-3xl p-8 border border-blue-900/20">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to get more roofing leads in Houston?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s build a website that helps your roofing business stand out, look
            trustworthy, and generate more calls from local customers.
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Roofing Website Today
          </button>
        </div>
      </div>
    </div>
  )
}
