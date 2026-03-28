import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'

const WHATSAPP_LINK =
  'https://wa.me/5531995195540?text=Hi,%20I%20want%20a%20website%20for%20my%20cleaning%20business%20in%20Orlando.'

export default function CleaningPage() {
  const openWhatsApp = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'cleaning_page_orlando',
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
          Affordable Website Design for Cleaning Services in Orlando
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl">
          We build fast, professional websites for cleaning services in Orlando
          that want more clients, more bookings, and a stronger online presence.
          Get your cleaning website ready in 7–14 days.
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
            'Get more cleaning clients in Orlando',
            'Make it easy for customers to request a quote',
            'Build trust with homeowners and Airbnb hosts',
            'Show your services clearly and professionally',
            'Look more professional than competitors',
            'Mobile-optimized for more calls and bookings',
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
            What a cleaning website in Orlando should include
          </h2>

          <p className="text-gray-300 mb-6">
            A cleaning service website should help your business look reliable,
            attract local customers, and convert visitors into real bookings and
            quote requests.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Mobile-friendly design for customers searching on their phone</li>
            <li>• Fast loading pages to keep visitors on your site</li>
            <li>• Clear list of services and service areas</li>
            <li>• Easy quote request and WhatsApp contact</li>
            <li>• Sections for residential, commercial, and Airbnb cleaning</li>
            <li>• SEO-ready structure for Orlando cleaning searches</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-blue-900/20 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Perfect for cleaning businesses that want more bookings
          </h2>

          <p className="text-gray-300 mb-4">
            Ideal for house cleaning services, deep cleaning, move-in/move-out,
            Airbnb cleaning, office cleaning, and small cleaning companies in
            Orlando looking to grow.
          </p>

          <p className="text-gray-300">
            A professional website helps your business stand out, build trust fast,
            and make it easier for customers to choose you over competitors.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 rounded-3xl p-8 border border-blue-900/20">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to get more cleaning clients in Orlando?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s build a website that helps your cleaning business get more
            bookings, more visibility, and more consistent clients.
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Cleaning Website Today
          </button>
        </div>
      </div>
    </div>
  )
}
