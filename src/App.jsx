import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Globe, Code, Palette, Smartphone, Zap, Mail, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import logo from './assets/logo.jpeg'
import labImg from './assets/lab.png'
import barImg from './assets/bar.png'

function App() {
  const [lang, setLang] = useState('en')
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const i18n = {
    en: {
      tagline: 'High-Impact Web Design',
      h1a: 'We turn ideas into', h1b: 'Digital Experiences',
      hero_p: 'We build websites and web apps that delight users and drive results.',
      cta_primary: 'Start Project', cta_portfolio: 'See Portfolio',
      stats: [
        { number: '20+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '5+', label: 'Years of Experience' },
        { number: '24/7', label: 'Available Support' },
      ],
      header: { services:'Services', portfolio:'Portfolio', testimonials:'Testimonials', contact:'Contact' },
      services_title_a:'Our ', services_title_b:'Services',
      services_p:'Complete web design & development solutions.',
      services: [
        { icon:<Globe className="w-12 h-12"/>, title:'Corporate Websites', description:'Modern, responsive and fast', features:['Responsive Design','SEO Optimized','Top Performance'] },
        { icon:<Code className="w-12 h-12"/>, title:'Web Development', description:'Custom solutions with modern stacks', features:['React & Next.js','Integrated APIs','Clean Code'] },
        { icon:<Palette className="w-12 h-12"/>, title:'UI/UX Design', description:'Intuitive and beautiful interfaces', features:['Design System','Prototyping','Usability Testing'] },
        { icon:<Smartphone className="w-12 h-12"/>, title:'Landing Pages', description:'Conversion-focused pages', features:['High Conversion','A/B Testing','Built-in Analytics'] },
        { icon:<Globe className="w-12 h-12"/>, title:'Domain Brokerage', description:'Acquire/appraise premium domains', features:['Valuation & Strategy','Backorders & Auctions','DNS Setup & SEO'] },
        { icon:<Mail className="w-12 h-12"/>, title:'Email Setup & Management', description:'Professional email with security', features:['Zoho/Google Workspace','Domains & DNS','SPF/DKIM/DMARC'] },
      ],
      portfolio_a:'Featured ', portfolio_b:'Projects',
      portfolio_p:'Some projects we built for clients',
      portfolio:[
        {
          title:'Healthcare-focused website',
          category:'Healthcare',
          description:'Web solutions for clinics and labs with performance, credibility and medical SEO.',
          image: labImg
        },
        {
          title:'Premium domain brokerage',
          category:'Digital Asset',
          description:'High-value domain intermediation — example: BAR.com.br.',
          image: barImg
        },
        { title:'Restaurant App', category:'Web App', description:'Online ordering + menu', gradient:'from-orange-500 to-red-500' },
        { title:'Finance Dashboard', category:'Admin Panel', description:'Interactive analytics', gradient:'from-green-500 to-emerald-500' }
      ],
      testi_a:'What Our ', testi_b:'Clients Say', testi_p:'Testimonials from companies that trusted our work',
      testimonials:[
        { name:'Mary Smith', company:'Tech Solutions', text:'Outstanding professionalism!', rating:5 },
        { name:'John Santos', company:'Inovare Group', text:'Fast delivery and great design.', rating:5 },
        { name:'Anna Costa', company:'Digital Marketing Pro', text:'Boosted our results.', rating:5 }
      ],
      contact_a:'Ready to Transform Your ', contact_b:'Digital Presence?', contact_p:'Reach out and let’s craft the perfect web solution.',
      contact_btn:'Request a Quote', email:'contato@globaldomainventures.com', phone:'+55 31 99519-5540',
      footer:{ services:'Services', company:'Company', contact:'Contact',
        servicesLinks:['Web Design','Development','UI/UX Design','Consulting'],
        companyLinks:['About Us','Portfolio','Careers'],
        copy:'All rights reserved.' }
    },
    pt: {
      tagline:'Web Design de Alto Impacto',
      h1a:'Transformamos Ideias em', h1b:'Experiências Digitais',
      hero_p:'Criamos websites e aplicações web que encantam e geram resultados.',
      cta_primary:'Iniciar Projeto', cta_portfolio:'Ver Portfólio',
      stats:[
        { number:'20+', label:'Projetos Entregues' },
        { number:'98%', label:'Satisfação dos Clientes' },
        { number:'5+', label:'Anos de Experiência' },
        { number:'24/7', label:'Suporte Disponível' },
      ],
      header:{ services:'Serviços', portfolio:'Portfólio', testimonials:'Depoimentos', contact:'Contato' },
      services_title_a:'Nossos ', services_title_b:'Serviços',
      services_p:'Soluções completas de web design e desenvolvimento.',
      services: [
        { icon:<Globe className="w-12 h-12"/>, title:'Websites Corporativos', description:'Modernos, responsivos e rápidos', features:['Design Responsivo','SEO Otimizado','Performance Máxima'] },
        { icon:<Code className="w-12 h-12"/>, title:'Desenvolvimento Web', description:'Soluções sob medida com stacks modernas', features:['React & Next.js','APIs Integradas','Código Limpo'] },
        { icon:<Palette className="w-12 h-12"/>, title:'UI/UX Design', description:'Interfaces intuitivas e bonitas', features:['Design System','Prototipagem','Testes de Usabilidade'] },
        { icon:<Smartphone className="w-12 h-12"/>, title:'Landing Pages', description:'Páginas focadas em conversão', features:['Alta Conversão','Testes A/B','Analytics Integrado'] },
        { icon:<Globe className="w-12 h-12"/>, title:'Compra e Venda de Domínios', description:'Aquisição/avaliação de domínios premium', features:['Valuation & Estratégia','Backorder e Leilões','Configuração de DNS & SEO'] },
        { icon:<Mail className="w-12 h-12"/>, title:'Configuração e Gestão de E-mail', description:'E-mail profissional com segurança', features:['Zoho/Google Workspace','Domínios & DNS','SPF/DKIM/DMARC'] },
      ],
      portfolio_a:'Projetos ', portfolio_b:'Destacados', portfolio_p:'Alguns dos projetos que desenvolvemos',
      portfolio:[
        {
          title:'Site voltado pra saúde',
          category:'Saúde',
          description:'Soluções digitais para clínicas e laboratórios com foco em performance, credibilidade e SEO médico.',
          image: labImg
        },
        {
          title:'Compra e venda de domínios premium',
          category:'Ativo Digital',
          description:'Intermediação e gestão de ativos digitais de alto valor — exemplo: BAR.com.br.',
          image: barImg
        },
        { title:'App de Restaurante', category:'Aplicação Web', description:'Pedidos online + cardápio', gradient:'from-orange-500 to-red-500' },
        { title:'Dashboard Financeiro', category:'Painel Administrativo', description:'Analytics interativo', gradient:'from-green-500 to-emerald-500' }
      ],
      testi_a:'O Que Dizem ', testi_b:'Nossos Clientes', testi_p:'Depoimentos de quem confia no nosso trabalho',
      testimonials:[
        { name:'Maria Silva', company:'Tech Solutions', text:'Profissionalismo excepcional!', rating:5 },
        { name:'João Santos', company:'Inovare Group', text:'Entrega rápida e ótimo design.', rating:5 },
        { name:'Ana Costa', company:'Digital Marketing Pro', text:'Resultados elevados.', rating:5 }
      ],
      contact_a:'Pronto Para Transformar Sua ', contact_b:'Presença Digital?', contact_p:'Fale com a gente e crie a solução perfeita.',
      contact_btn:'Solicitar Orçamento', email:'contato@globaldomainventures.com', phone:'+55 31 99519-5540',
      footer:{ services:'Serviços', company:'Empresa', contact:'Contato',
        servicesLinks:['Web Design','Desenvolvimento','UI/UX Design','Consultoria'],
        companyLinks:['Sobre Nós','Portfólio','Carreira'],
        copy:'Todos os direitos reservados.' }
    }
  }

  const t = useMemo(() => i18n[lang], [lang])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      {/* Header */}
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Global Domain Ventures" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Global Domain Ventures</h1>
              <p className="text-xs text-cyan-400/80">Managed for Multinational Enterprises</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-cyan-400 transition-colors">{t.header.services}</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">{t.header.portfolio}</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">{t.header.testimonials}</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">{t.header.contact}</a>
            </nav>
            <div className="flex items-center gap-2">
              <button aria-label="English" onClick={() => setLang('en')}
                className={`text-lg ${lang==='en'?'opacity-100':'opacity-60 hover:opacity-100'}`} title="English">🇺🇸</button>
              <span className="text-slate-600">|</span>
              <button aria-label="Português" onClick={() => setLang('pt')}
                className={`text-lg ${lang==='pt'?'opacity-100':'opacity-60 hover:opacity-100'}`} title="Português">🇧🇷</button>
            </div>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Mail className="w-4 h-4 mr-2" /> {t.header.contact}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">{t.tagline}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            {t.h1a}<br /><span className="text-cyan-400">{t.h1b}</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{t.hero_p}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8">
              {t.cta_primary} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
              {t.cta_portfolio}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.stats.map((s,i)=>(
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{s.number}</div>
              <div className="text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">{t.services_title_a}<span className="text-cyan-400">{t.services_title_b}</span></h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.services_p}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((srv, idx)=>(
              <Card key={idx}
                className={`bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 h-full ${activeService===idx?'ring-2 ring-cyan-500/50':''}`}
                onMouseEnter={()=>setActiveService(idx)}>
                <CardHeader>
                  <div className="text-cyan-400 mb-4">{srv.icon}</div>
                  <CardTitle className="text-white text-xl">{srv.title}</CardTitle>
                  <CardDescription className="text-slate-400">{srv.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {srv.features.map((f,j)=>(
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">{t.portfolio_a}<span className="text-cyan-400">{t.portfolio_b}</span></h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.portfolio_p}</p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          {t.portfolio.map((p, i)=>(
            <Card key={i} className="bg-slate-900/50 border-slate-800 overflow-hidden h-full hover:border-cyan-500/50 transition-all">
              {p.image ? (
                <div className="h-48 w-full" style={{ backgroundImage:`url(${p.image})`, backgroundSize:'cover', backgroundPosition:'center' }} />
              ) : (
                <div className={`h-48 bg-gradient-to-br ${p.gradient}`} />
              )}
              <CardContent className="p-6">
                <div className="text-sm font-semibold mb-1 opacity-80">{p.category}</div>
                <div className="text-2xl font-bold mb-2">{p.title}</div>
                <p className="text-slate-400">{p.description}</p>
                <Button variant="ghost" className="mt-4 text-cyan-400 hover:text-cyan-300 p-0">
                  {t.cta_portfolio} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">{t.testi_a}<span className="text-cyan-400">{t.testi_b}</span></h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.testi_p}</p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {t.testimonials.map((tt, i)=>(
            <Card key={i} className="bg-slate-900/50 border-slate-800 h-full">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(tt.rating)].map((_,k)=>(<Star key={k} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{tt.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{tt.name}</div>
                  <div className="text-sm text-cyan-400">{tt.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.contact_a}<span className="text-cyan-400">{t.contact_b}</span></h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">{t.contact_p}</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
            onClick={() => (window.location.href = `mailto:${t.email}`)}
          >
            <Mail className="w-5 h-5 mr-2" /> {t.contact_btn}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="GDV" className="h-10 w-10 rounded-lg object-cover" />
              <div className="font-bold text-cyan-400">Global Domain Ventures</div>
            </div>
            <p className="text-slate-400 text-sm">Managed for Multinational Enterprises</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.services}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {t.footer.servicesLinks.map((s,i)=>(<li key={i} className="hover:text-cyan-400">{s}</li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.company}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {t.footer.companyLinks.map((s,i)=>(<li key={i} className="hover:text-cyan-400">{s}</li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.contact}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-cyan-400">{t.email}</li>
              <li className="hover:text-cyan-400">{t.phone}</li>
              <li className="hover:text-cyan-400">LinkedIn</li>
              <li className="hover:text-cyan-400">Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Global Domain Ventures. {t.footer.copy}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
