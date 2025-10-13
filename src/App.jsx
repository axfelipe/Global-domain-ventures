import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Globe, Code, Palette, Smartphone, Zap, Mail, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import logo from './assets/logo.jpeg'

function App() {
  const [lang, setLang] = useState('en') // 'en' default (prioridade ao inglês)
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Textos nas duas línguas
  const i18n = {
    en: {
      tagline: 'High-Impact Web Design',
      h1a: 'We turn ideas into',
      h1b: 'Digital Experiences',
      hero_p: 'We build websites and web applications that delight users and drive results for multinational companies.',
      cta_primary: 'Start Project',
      cta_portfolio: 'See Portfolio',
      stats: [
        { number: '20+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '5+', label: 'Years of Experience' },
        { number: '24/7', label: 'Available Support' },
      ],
      services_title: 'Our ',
      services_title_high: 'Services',
      services_p: 'Complete web design and development solutions for companies seeking digital excellence.',
      services: [
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Corporate Websites',
          description: 'Modern, responsive websites that strengthen your brand’s digital presence',
          features: ['Responsive Design', 'SEO Optimized', 'Top Performance'],
        },
        {
          icon: <Code className="w-12 h-12" />,
          title: 'Web Development',
          description: 'Custom web solutions using the most advanced technologies',
          features: ['React & Next.js', 'Integrated APIs', 'Clean Code'],
        },
        {
          icon: <Palette className="w-12 h-12" />,
          title: 'UI/UX Design',
          description: 'Intuitive, attractive interfaces that create memorable experiences',
          features: ['Design System', 'Prototyping', 'Usability Testing'],
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: 'Landing Pages',
          description: 'Conversion-optimized pages to maximize your marketing results',
          features: ['High Conversion', 'A/B Testing', 'Built-in Analytics'],
        },
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Domain Brokerage',
          description: 'Acquisition, appraisal and negotiation of premium domains aligned to your brand strategy',
          features: ['Valuation & Strategy', 'Backorders & Auctions', 'DNS Setup & SEO'],
        },
        {
          icon: <Mail className="w-12 h-12" />,
          title: 'Email Setup & Management',
          description: 'Professional email deployment and governance with high deliverability and security',
          features: ['Zoho/Google Workspace', 'Domains & DNS', 'Antispam, SPF/DKIM/DMARC'],
        },
      ],
      portfolio_title_a: 'Featured ',
      portfolio_title_b: 'Projects',
      portfolio_p: 'Check out some of the projects we built for our clients',
      portfolio: [
        { title: 'Fashion E-commerce', category: 'Online Store', description: 'Full sales platform with payment integration', gradient: 'from-purple-500 to-pink-500' },
        { title: 'Tech Startup', category: 'Corporate Website', description: 'Modern institutional site for a tech startup', gradient: 'from-blue-500 to-cyan-500' },
        { title: 'Restaurant App', category: 'Web App', description: 'Online ordering system with menu management', gradient: 'from-orange-500 to-red-500' },
        { title: 'Finance Dashboard', category: 'Admin Panel', description: 'Interactive dashboard for financial analysis', gradient: 'from-green-500 to-emerald-500' },
      ],
      testi_title_a: 'What Our ',
      testi_title_b: 'Clients Say',
      testi_p: 'Testimonials from companies that trusted our work',
      testimonials: [
        { name: 'Mary Smith', company: 'Tech Solutions', text: 'Global Domain Ventures transformed our online presence. Outstanding professionalism!', rating: 5 },
        { name: 'John Santos', company: 'Inovare Group', text: 'Fast delivery, flawless design and ongoing support. Strongly recommended!', rating: 5 },
        { name: 'Anna Costa', company: 'Digital Marketing Pro', text: 'A strategic partnership that took our digital results to another level.', rating: 5 },
      ],
      contact_title_a: 'Ready to Transform Your ',
      contact_title_b: 'Digital Presence?',
      contact_p: 'Reach out and discover how we can craft the perfect web solution for your business.',
      contact_btn: 'Request a Quote',
      header_links: { services: 'Services', portfolio: 'Portfolio', testimonials: 'Testimonials', contact: 'Contact' },
      footer_services: 'Services',
      footer_company: 'Company',
      footer_contact: 'Contact',
      footer_links_services: ['Web Design', 'Development', 'UI/UX Design', 'Consulting'],
      footer_links_company: ['About Us', 'Portfolio', 'Careers'],
      footer_copy: 'All rights reserved.',
      contact_email: 'contato@globaldomainventures.com',
      contact_phone: '+55 31 99519-5540',
    },
    pt: {
      tagline: 'Web Design de Alto Impacto',
      h1a: 'Transformamos Ideias em',
      h1b: 'Experiências Digitais',
      hero_p: 'Criamos websites e aplicações web que encantam usuários e impulsionam resultados para empresas multinacionais.',
      cta_primary: 'Iniciar Projeto',
      cta_portfolio: 'Ver Portfólio',
      stats: [
        { number: '20+', label: 'Projetos Entregues' },
        { number: '98%', label: 'Satisfação dos Clientes' },
        { number: '5+', label: 'Anos de Experiência' },
        { number: '24/7', label: 'Suporte Disponível' },
      ],
      services_title: 'Nossos ',
      services_title_high: 'Serviços',
      services_p: 'Soluções completas de web design e desenvolvimento para empresas que buscam excelência digital.',
      services: [
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Websites Corporativos',
          description: 'Sites institucionais modernos e responsivos que fortalecem sua presença digital',
          features: ['Design Responsivo', 'SEO Otimizado', 'Performance Máxima'],
        },
        {
          icon: <Code className="w-12 h-12" />,
          title: 'Desenvolvimento Web',
          description: 'Soluções web sob medida com tecnologias de ponta',
          features: ['React & Next.js', 'APIs Integradas', 'Código Limpo'],
        },
        {
          icon: <Palette className="w-12 h-12" />,
          title: 'UI/UX Design',
          description: 'Interfaces intuitivas e atraentes com foco em experiência',
          features: ['Design System', 'Prototipagem', 'Testes de Usabilidade'],
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: 'Landing Pages',
          description: 'Páginas de alta conversão para maximizar resultados',
          features: ['Alta Conversão', 'Testes A/B', 'Analytics Integrado'],
        },
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Compra e Venda de Domínios',
          description: 'Aquisição, avaliação e negociação de domínios premium alinhados à sua marca',
          features: ['Valuation & Estratégia', 'Backorder e Leilões', 'Configuração de DNS & SEO'],
        },
        {
          icon: <Mail className="w-12 h-12" />,
          title: 'Configuração e Gestão de E-mail',
          description: 'Implantação e governança de e-mail profissional com alta entregabilidade e segurança',
          features: ['Zoho/Google Workspace', 'Domínios & DNS', 'Antispam, SPF/DKIM/DMARC'],
        },
      ],
      portfolio_title_a: 'Projetos ',
      portfolio_title_b: 'Destacados',
      portfolio_p: 'Conheça alguns dos projetos que desenvolvemos para nossos clientes',
      portfolio: [
        { title: 'E-commerce de Moda', category: 'Loja Virtual', description: 'Plataforma completa com integração de pagamentos', gradient: 'from-purple-500 to-pink-500' },
        { title: 'Tech Startup', category: 'Site Corporativo', description: 'Site institucional moderno para startup de tecnologia', gradient: 'from-blue-500 to-cyan-500' },
        { title: 'App de Restaurante', category: 'Aplicação Web', description: 'Pedidos online com gestão de cardápio', gradient: 'from-orange-500 to-red-500' },
        { title: 'Dashboard Financeiro', category: 'Painel Administrativo', description: 'Dashboard interativo para análise financeira', gradient: 'from-green-500 to-emerald-500' },
      ],
      testi_title_a: 'O Que Dizem ',
      testi_title_b: 'Nossos Clientes',
      testi_p: 'Depoimentos de empresas que confiaram em nosso trabalho',
      testimonials: [
        { name: 'Maria Silva', company: 'Tech Solutions', text: 'A Global Domain Ventures transformou nossa presença online. Profissionalismo excepcional!', rating: 5 },
        { name: 'João Santos', company: 'Inovare Group', text: 'Entrega rápida, design impecável e suporte contínuo. Recomendo!', rating: 5 },
        { name: 'Ana Costa', company: 'Digital Marketing Pro', text: 'Parceria estratégica que elevou nossos resultados.', rating: 5 },
      ],
      contact_title_a: 'Pronto Para Transformar Sua ',
      contact_title_b: 'Presença Digital?',
      contact_p: 'Fale com a gente e descubra como criar a solução web perfeita para o seu negócio.',
      contact_btn: 'Solicitar Orçamento',
      header_links: { services: 'Serviços', portfolio: 'Portfólio', testimonials: 'Depoimentos', contact: 'Contato' },
      footer_services: 'Serviços',
      footer_company: 'Empresa',
      footer_contact: 'Contato',
      footer_links_services: ['Web Design', 'Desenvolvimento', 'UI/UX Design', 'Consultoria'],
      footer_links_company: ['Sobre Nós', 'Portfólio', 'Carreira'],
      footer_copy: 'Todos os direitos reservados.',
      contact_email: 'contato@globaldomainventures.com',
      contact_phone: '+55 31 99519-5540',
    },
  }

  const t = useMemo(() => i18n[lang], [lang])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Global Domain Ventures" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Global Domain Ventures
              </h1>
              <p className="text-xs text-cyan-400/80">Managed for Multinational Enterprises</p>
            </div>
          </div>

          {/* Nav + Language */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-cyan-400 transition-colors">{t.header_links.services}</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">{t.header_links.portfolio}</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">{t.header_links.testimonials}</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">{t.header_links.contact}</a>
            </nav>

            {/* Selector de idioma com bandeiras (prioridade EN) */}
            <div className="flex items-center gap-2">
              <button
                aria-label="English"
                onClick={() => setLang('en')}
                className={`text-lg leading-none ${lang === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}
                title="English"
              >
                🇺🇸
              </button>
              <span className="text-slate-600">|</span>
              <button
                aria-label="Português"
                onClick={() => setLang('pt')}
                className={`text-lg leading-none ${lang === 'pt' ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}
                title="Português"
              >
                🇧🇷
              </button>
            </div>

            <Button className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              {t.header_links.contact}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">{t.tagline}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              {t.h1a}
              <br />
              <span className="text-cyan-400">{t.h1b}</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t.hero_p}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8">
                {t.cta_primary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
                {t.cta_portfolio}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              {t.services_title}
              <span className="text-cyan-400">{t.services_title_high}</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.services_p}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveService(index)}
              >
                <Card className={`bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 h-full ${activeService === index ? 'ring-2 ring-cyan-500/50' : ''}`}>
                  <CardHeader>
                    <div className="text-cyan-400 mb-4">{service.icon}</div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-slate-400">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              {t.portfolio_title_a}<span className="text-cyan-400">{t.portfolio_title_b}</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.portfolio_p}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.portfolio.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02 }} className="group cursor-pointer">
                <Card className="bg-slate-900/50 border-slate-800 overflow-hidden h-full hover:border-cyan-500/50 transition-all">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <div className="text-sm font-semibold mb-2 opacity-80">{project.category}</div>
                        <div className="text-2xl font-bold">{project.title}</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-400">{project.description}</p>
                    <Button variant="ghost" className="mt-4 text-cyan-400 hover:text-cyan-300 p-0">
                      {t.cta_portfolio} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              {t.testi_title_a}<span className="text-cyan-400">{t.testi_title_b}</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.testi_p}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="bg-slate-900/50 border-slate-800 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-slate-700 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              {t.contact_title_a}<span className="text-cyan-400">{t.contact_title_b}</span>
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              {t.contact_p}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
                onClick={() => (window.location.href = `mailto:${t.contact_email}`)}
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.contact_btn}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="GDV" className="h-10 w-10 rounded-lg object-cover" />
                <div className="font-bold text-cyan-400">Global Domain Ventures</div>
              </div>
              <p className="text-slate-400 text-sm">Managed for Multinational Enterprises</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.footer_services}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {t.footer_links_services.map((item, i) => (
                  <li key={i} className="hover:text-cyan-400 cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.footer_company}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {t.footer_links_company.map((item, i) => (
                  <li key={i} className="hover:text-cyan-400 cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.footer_contact}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">{t.contact_email}</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">{t.contact_phone}</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Global Domain Ventures. {t.footer_copy}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
