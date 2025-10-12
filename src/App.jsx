import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Globe, Code, Palette, Smartphone, Zap, Mail, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import logo from './assets/logo.jpeg'

function App() {
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Websites Corporativos",
      description: "Sites institucionais modernos e responsivos que fortalecem a presença digital da sua empresa",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Máxima"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desenvolvimento Web",
      description: "Soluções web customizadas com as tecnologias mais avançadas do mercado",
      features: ["React & Next.js", "APIs Integradas", "Código Limpo"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e atraentes que proporcionam experiências memoráveis",
      features: ["Design System", "Prototipagem", "Testes de Usabilidade"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para maximizar seus resultados de marketing",
      features: ["Alta Conversão", "A/B Testing", "Analytics Integrado"]
    }
  ]

  const portfolio = [
    {
      title: "E-commerce Fashion",
      category: "Loja Virtual",
      description: "Plataforma completa de vendas online com integração de pagamentos",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tech Startup",
      category: "Website Corporativo",
      description: "Site institucional moderno para startup de tecnologia",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Restaurant App",
      category: "Aplicação Web",
      description: "Sistema de pedidos online com gestão de cardápio",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Finance Dashboard",
      category: "Painel Administrativo",
      description: "Dashboard interativo para análise de dados financeiros",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Tech Solutions",
      text: "A Global Domain Ventures transformou completamente nossa presença online. Profissionalismo excepcional!",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Inovare Group",
      text: "Entrega rápida, design impecável e suporte contínuo. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Digital Marketing Pro",
      text: "Parceria estratégica que elevou nossos resultados digitais a outro nível.",
      rating: 5
    }
  ]

  const stats = [
    { number: "20+", label: "Projetos Entregues" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Disponível" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
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
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Depoimentos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Contato
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Web Design de Alto Impacto</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Transformamos Ideias em
              <br />
              <span className="text-cyan-400">Experiências Digitais</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Criamos websites e aplicações web que encantam usuários e impulsionam resultados para empresas multinacionais
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
                Ver Portfólio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-cyan-400">Serviços</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Soluções completas de web design e desenvolvimento para empresas que buscam excelência digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveService(index)}
              >
                <Card className={`bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 h-full ${
                  activeService === index ? 'ring-2 ring-cyan-500/50' : ''
                }`}>
                  <CardHeader>
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {service.description}
                    </CardDescription>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos <span className="text-cyan-400">Destacados</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
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
                      Ver Detalhes <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem <span className="text-cyan-400">Nossos Clientes</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Depoimentos de empresas que confiaram em nosso trabalho
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto Para Transformar Sua <span className="text-cyan-400">Presença Digital?</span>
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos criar uma solução web perfeita para o seu negócio
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8">
                <Mail className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
                Agendar Reunião
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
              <p className="text-slate-400 text-sm">
                Managed for Multinational Enterprises
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Serviços</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Web Design</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Desenvolvimento</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">UI/UX Design</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Consultoria</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Sobre Nós</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Portfólio</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Carreira</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contato</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">contato@gdv.com</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">+55 11 9999-9999</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-cyan-400 cursor-pointer transition-colors">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Global Domain Ventures. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

