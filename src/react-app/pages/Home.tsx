import { useEffect } from 'react';
import Section from '@/react-app/components/Section';
import AnimatedSection from '@/react-app/components/AnimatedSection';
import { 
  Building2, 
  Users, 
  Wrench, 
  Store, 
  Smartphone,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Target,
  Handshake,
  TrendingUp,
  Award,
  Percent,
  Crown,
  Megaphone,
  MapPin,
  Globe,
  Truck,
  Zap as FastIcon,
  Network,
  Wrench as ToolIcon,
  Search,
  CheckCircle,
  Star
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Load Montserrat font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body
    document.body.style.fontFamily = "'Montserrat', sans-serif";
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const problems = [
    {
      icon: Store,
      title: "Lojistas",
      issues: [
        "Dificuldade para encontrar clientes",
        "Gestão complexa de estoque",
        "Falta de visibilidade no mercado",
        "Processos manuais e demorados"
      ]
    },
    {
      icon: Wrench,
      title: "Prestadores",
      issues: [
        "Busca por trabalhos constantes",
        "Negociação direta com clientes",
        "Falta de credibilidade no mercado",
        "Dificuldade de precificação"
      ]
    },
    {
      icon: Users,
      title: "Clientes",
      issues: [
        "Dificuldade para encontrar fornecedores",
        "Falta de transparência nos preços",
        "Desconfiança na qualidade",
        "Processo de compra complexo"
      ]
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Simplicidade",
      description: "Interface intuitiva que qualquer pessoa pode usar"
    },
    {
      icon: DollarSign,
      title: "Economia",
      description: "Preços competitivos e transparentes para todos"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Conexões rápidas entre demanda e oferta"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Transações protegidas e avaliações confiáveis"
    }
  ];

  const differentials = [
    {
      icon: Zap,
      title: "Tecnologia de ponta",
      description: "Plataforma moderna e eficiente"
    },
    {
      icon: Target,
      title: "Foco no setor",
      description: "Especialização em construção civil"
    },
    {
      icon: Handshake,
      title: "Relacionamentos",
      description: "Conectamos pessoas e negócios"
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Escalabilidade para todo o Brasil"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Padrão premium de serviço"
    },
    {
      icon: Building2,
      title: "Experiência",
      description: "Conhecimento profundo do mercado"
    }
  ];

  const businessModel = [
    {
      icon: Percent,
      text: "Comissão sobre vendas realizadas na plataforma"
    },
    {
      icon: Handshake,
      text: "Taxa de intermediação para prestadores de serviços"
    },
    {
      icon: Crown,
      text: "Planos premium para fornecedores com maior visibilidade"
    },
    {
      icon: Megaphone,
      text: "Publicidade direcionada para empresas do setor"
    }
  ];

  const ourDifferentials = [
    {
      icon: MapPin,
      title: "Rede de Produtos Locais",
      description: "Conectamos você com fornecedores da sua região"
    },
    {
      icon: Globe,
      title: "Loja Online para Fornecedores",
      description: "Plataforma completa para vendas digitais"
    },
    {
      icon: Truck,
      title: "Logística Local",
      description: "Mais rapidez e praticidade nas entregas"
    },
    {
      icon: FastIcon,
      title: "Entrega Mais Rápida",
      description: "Otimização de rotas e tempos de entrega"
    },
    {
      icon: Network,
      title: "Rede de Prestadores",
      description: "Conexão direta com profissionais qualificados"
    },
    {
      icon: ToolIcon,
      title: "Venda e Locação",
      description: "Equipamentos para compra ou aluguel"
    },
    {
      icon: Search,
      title: "Comparação de Preços",
      description: "Compare preços online em tempo real"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Execução",
      description: "Garantimos a qualidade dos serviços contratados"
    },
    {
      icon: Star,
      title: "Sistema de Avaliação",
      description: "Avalie fornecedores, produtos e serviços"
    }
  ];

  const team = [
    { 
      name: "Gleydson Pires", 
      role: "Co-Fundador",
      image: "https://mocha-cdn.com/019910ed-f227-7652-945d-2889de9e624e/01.jpg"
    },
    { 
      name: "Enoque Sanches Borges", 
      role: "Co-Fundador",
      image: "https://mocha-cdn.com/019910ed-f227-7652-945d-2889de9e624e/Imagem-do-WhatsApp-de-2025-09-03-%C3%A0(s)-16.13.57_ba0188ee.jpg"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Section id="hero" background="primary">
        <AnimatedSection animation="fadeIn">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://mocha-cdn.com/019910ed-f227-7652-945d-2889de9e624e/logoxopy3.jpg" 
                alt="Xopy Logo" 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Xopy
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 opacity-90">
              O futuro da construção civil no seu bolso
            </h2>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
              Conectamos fornecedores, prestadores e clientes em um marketplace revolucionário
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Problem Section */}
      <Section id="problem" background="white">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
              O Problema
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              O mercado da construção civil enfrenta desafios em toda a cadeia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {problems.map((problem, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 mx-auto">
                    <problem.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    {problem.title}
                  </h3>
                  <ul className="space-y-3">
                    {problem.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Solution Section */}
      <Section id="solution" background="secondary">
        <AnimatedSection animation="fadeIn">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Nossa Solução
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold mb-8 opacity-90">
                O Xopy é um marketplace completo
              </p>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Conectamos fornecedores de materiais, prestadores de serviços e clientes 
                em uma plataforma única, moderna e segura. Simplificamos processos, 
                reduzimos custos e criamos oportunidades para todos.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Value Proposition */}
      <Section id="value" background="white">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
              Proposta de Valor
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Benefícios que transformam o mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 150}>
                <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:from-orange-100 hover:to-orange-200 transition-all">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Our Differentials */}
      <Section id="our-differentials" background="secondary">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              NOSSOS DIFERENCIAIS
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              O que nos torna a melhor escolha para seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourDifferentials.map((differential, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto">
                    <differential.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {differential.title}
                  </h3>
                  <p className="text-white/80">
                    {differential.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Differentials */}
      <Section id="differentials" background="dark">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-xl md:text-2xl opacity-80">
              O que nos torna únicos no mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <div className="text-center p-6 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-xl mb-4 mx-auto">
                    <differential.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    {differential.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {differential.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Business Model */}
      <Section id="business" background="white">
        <AnimatedSection animation="slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-gray-900">
              Modelo de Negócios
            </h2>
            
            <div className="space-y-6">
              {businessModel.map((item, index) => (
                <AnimatedSection key={index} animation="slideLeft" delay={index * 150}>
                  <div className="flex items-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-xl mr-6 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg text-gray-800 font-medium flex-1">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Team */}
      <Section id="team" background="secondary">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              Profissionais experientes e apaixonados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 150}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="w-24 h-24 mb-6 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="opacity-80">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Closing */}
      <Section id="closing" background="primary">
        <AnimatedSection animation="fadeIn">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://mocha-cdn.com/019910ed-f227-7652-945d-2889de9e624e/logoxopy3.jpg" 
                alt="Xopy Logo" 
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto rounded-full shadow-lg opacity-90"
              />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Estamos construindo o futuro da construção civil.
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold opacity-90">
              Vamos juntos?
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
