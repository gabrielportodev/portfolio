export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    // Sidebar
    sidebar: {
      role: 'Desenvolvedor Full Stack',
      nav: {
        home: 'Home',
        about: 'Sobre',
        experiences: 'Experiências',
        projects: 'Projetos',
        contact: 'Contato'
      },
      resume: 'Currículo',
      resumeTooltip: 'Baixar Currículo',
      collapse: 'Recolher',
      expandLabel: 'Expandir menu',
      collapseLabel: 'Recolher menu',
      dark: 'Dark',
      light: 'Light',
      darkMode: 'Modo Dark',
      lightMode: 'Modo Light',
      toggleTheme: 'Alternar tema',
      openMenu: 'Abrir menu',
      nav_menu: 'Menu de Navegação',
      switchLang: 'Switch to English'
    },

    // Home
    home: {
      greeting: 'Olá, eu sou',
      badge: 'Desenvolvedor Full Stack | Java & Spring Boot | Next.js & TypeScript',
      heroP1:
        'Desenvolvedor focado em arquiteturas robustas e interfaces de alta performance, com experiência em sistemas que atendem mais de 15 mil usuários.',
      heroP2:
        'Atualmente no ecossistema digital do IFNMG, contribuindo para o Pharus (gestão de eventos) e para o app Cajuí Mobile, unindo um back-end seguro em Java/Spring Boot a front-ends rápidos em Next.js e React Native.',
      specialtiesTitle: 'Minhas Especialidades',
      specialties: [
        {
          title: 'Back-end Java & Spring Boot',
          description: 'APIs RESTful com segurança, validação, JPA e integrações prontas para produção.'
        },
        {
          title: 'Front-end Next.js & TypeScript',
          description: 'Experiências rápidas com App Router, SSR/SSG, acessibilidade e componentes reusáveis.'
        },
        {
          title: 'Mobile com React Native',
          description: 'Aplicativos com Expo Router, notificações e sincronização em tempo real para alunos e equipes.'
        }
      ],
      skillsTitle: 'Minhas Skills',
      skillCategories: {
        backend: 'Back-End',
        frontend: 'Front-End',
        mobile: 'Mobile',
        database: 'Banco de Dados',
        tools: 'Ferramentas'
      },
      aboutTitle: 'Sobre Mim',
      aboutText:
        'Sou Desenvolvedor de Software Full Stack com foco em sistemas escaláveis e de alta performance utilizando o ecossistema Java (Spring Boot) no back-end e Next.js (TypeScript) no front-end. Minha abordagem combina código limpo, SSR/SSG e integrações seguras para entregar valor real aos usuários.',
      aboutCta: 'Minha trajetória completa',
      ctaTitle: 'Vamos conversar?',
      ctaText:
        'Aberto a oportunidades, projetos freelance ou parcerias onde Java/Spring Boot e Next.js façam a diferença.',
      ctaButton: 'Entrar em Contato',
      heroViewProjects: 'Ver Projetos',
      heroContact: 'Contato Direto'
    },

    // About
    about: {
      title: 'Minha',
      titleHighlight: 'Jornada',
      subtitle:
        'Da formação técnica aos sistemas que atendem mais de 15 mil usuários, cada entrega reflete meu foco em qualidade, performance e impacto real.',
      whoTitle: 'Quem sou eu',
      bio1: 'Sou',
      bio1Name: 'Gabriel Martins Moraes Porto',
      bio1Rest:
        ', Desenvolvedor Full Stack especializado em unir back-ends seguros com Java e Spring Boot a front-ends rápidos com Next.js e TypeScript.',
      bio2: 'Hoje integro o ecossistema digital do IFNMG, onde contribuo para o Pharus (gestão de eventos em larga escala) e para o Cajuí Mobile (experiência acadêmica moderna em dispositivos móveis).',
      bio3: 'Minha abordagem combina Clean Code, SSR/SSG, autenticação segura e integrações bem tipadas. Trabalho com Scrum, documentação clara e versionamento disciplinado.',
      bio4: 'Busco criar soluções que permaneçam robustas em produção e ofereçam experiências fluidas para quem usa.',
      educationTitle: 'Formação Acadêmica',
      education: [
        {
          date: '2021 - 2023',
          title: 'Técnico em Informática',
          subtitle: 'EE Tancredo Neves - Ensino Médio Integrado',
          description: 'Formação técnica com foco em fundamentos da computação, redes, e desenvolvimento de software.',
          side: 'right' as const
        },
        {
          date: '2024 - 2026 (previsto)',
          title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          subtitle: 'IFNMG - Superior Tecnológico',
          description:
            'Aprofundamento em engenharia de software, arquitetura de sistemas e desenvolvimento web/mobile.',
          side: 'left' as const
        }
      ],
      certsTitle: 'Certificações',
      certs: [
        {
          name: 'Aprenda Golang do Zero!',
          description: 'Fundamentos, sintaxe, funções, testes, HTTP e APIs REST.'
        },
        {
          name: 'Javascript e TypeScript — Full Stack',
          description:
            'JavaScript, TypeScript, Next, Node, React, React Hooks, Express, noSQL, Context API, Design Patterns'
        }
      ],
      ctaTitle: 'Vamos construir algo incrível?',
      ctaText:
        'Se você busca um desenvolvedor Full Stack que una Java/Spring Boot e Next.js para entregar valor rápido e sustentável, vamos conversar.',
      ctaContact: 'Contato Profissional',
      ctaProjects: 'Ver Meus Projetos'
    },

    // Experiences
    experiences: {
      badge: 'Trajetória Profissional',
      title: 'Minhas',
      titleHighlight: 'Experiências',
      subtitle:
        'Mais de um ano e meio construindo sistemas reais para o ecossistema digital do IFNMG, atendendo milhares de usuários com qualidade e performance.',
      current: 'Atual',
      contributions: 'Contribuições',
      technologies: 'Tecnologias',
      ctaTitle: 'Pronto para o próximo desafio',
      ctaText: 'Aberto a oportunidades onde Java/Spring Boot, Next.js ou React Native possam gerar impacto real.',
      ctaContact: 'Entrar em Contato',
      ctaProjects: 'Ver Projetos',
      items: [
        {
          role: 'Desenvolvedor de Software Mobile',
          company: 'IFNMG',
          period: 'Agosto 2025 – Presente',
          location: 'Almenara, MG',
          current: true,
          description:
            'Integro a equipe do Cajuí Mobile, aplicativo oficial do IFNMG para modernização do acesso acadêmico. O sistema centraliza carteira estudantil, requerimentos, histórico, horários e integração com sistemas internos, priorizando acessibilidade e desempenho para milhares de usuários.',
          achievements: [
            'Arquitetura de estado global com Context API para autenticação e sessões',
            'Fluxos de formulário com React Hook Form + Zod para validação em runtime',
            'Navegação com Expo Router e Auth Guards para proteção de rotas sensíveis',
            'UI acessível com React Native Paper, responsiva em iOS e Android',
            'Consumo de APIs complexas com sincronização de dados em tempo real',
            'Atuação sob metodologia Scrum com ciclos de entrega de alto valor'
          ],
          technologies: [
            'React Native',
            'Expo Router',
            'TypeScript',
            'Context API',
            'React Hook Form',
            'Zod',
            'React Native Paper',
            'Git/GitHub'
          ],
          color: 'from-violet-500/10 to-purple-500/5'
        },
        {
          role: 'Desenvolvedor Front-End',
          company: 'IFNMG',
          period: 'Agosto 2024 – Julho 2025',
          location: 'Almenara, MG',
          current: false,
          description:
            'Atuei no desenvolvimento da plataforma Pharus – Gestão de Eventos, sistema oficial do IFNMG utilizado em todos os campi para centralizar a organização de eventos institucionais. Como Desenvolvedor Web, fui responsável pela evolução da interface, garantindo uma experiência intuitiva e escalável para uma base crítica de mais de 15 mil alunos e servidores.',
          achievements: [
            'Interfaces de alta performance com Next.js utilizando SSR e SSG',
            'TypeScript em toda a aplicação garantindo type-safety e redução de erros em runtime',
            'Design system com Material UI criando componentes altamente reutilizáveis',
            'Formulários complexos e dinâmicos com validação rigorosa integrados às APIs RESTful',
            'Evolução da plataforma garantindo acessibilidade para mais de 15 mil alunos e servidores',
            'Controle de versão e Code Reviews com Git/GitHub sob metodologia Scrum'
          ],
          technologies: [
            'Next.js',
            'React.js',
            'TypeScript',
            'Material UI',
            'SSR/SSG',
            'APIs RESTful',
            'Git/GitHub',
            'Scrum'
          ],
          color: 'from-blue-500/10 to-cyan-500/5'
        }
      ]
    },

    // Projects
    projects: {
      title: 'Meus',
      titleHighlight1: 'Projetos',
      and: 'e',
      titleHighlight2: 'Serviços',
      subtitle: 'Soluções reais desenvolvidas com tecnologias modernas e boas práticas de código.',
      ctaConversation: 'Vamos conversar',
      featuredTitle: 'Destaque',
      highlightsTitle: 'Projetos de Destaque',
      servicesTitle: 'Serviços',
      ctaTitle: 'Interessado em algum projeto ou serviço?',
      ctaText:
        'Posso desenvolver uma solução personalizada com a combinação certa de Java/Spring Boot, Next.js e React Native.',
      ctaContact: 'Fale Comigo',
      featured: {
        title: 'Pharus - Gestão de Eventos',
        description:
          'Plataforma oficial do IFNMG para gestão de eventos, com SSR/SSG, formulários tipados e integrações seguras que atendem mais de 15 mil usuários.'
      },
      items: [
        {
          title: 'Cajuí Mobile',
          description:
            'App oficial para modernizar o acesso acadêmico de alunos e servidores, com notificações em tempo real e consumo de APIs complexas.'
        },
        {
          title: 'Vitrine de Projetos (IFNMG)',
          description:
            'Plataforma institucional robusta para centralizar, organizar e divulgar a produção acadêmica (Ensino, Pesquisa, Extensão e TCCs) do campus.'
        },
        {
          title: 'RB SOFT Soluções',
          description: 'Landing page institucional otimizada para performance, responsividade e SEO.'
        },
        {
          title: 'Sistema de Gerenciamento de Eventos Acadêmicos',
          description:
            'Aplicação de linha de comando em Java com POO, SQLite e tratamento de exceções para cadastro e controle de eventos, participantes e pagamentos.'
        }
      ],
      services: [
        {
          title: 'APIs e Back-end Java',
          description: 'Spring Boot, segurança, validação, JPA e documentação clara para integrações confiáveis.'
        },
        {
          title: 'Front-end Next.js & TypeScript',
          description: 'Interfaces performáticas com SSR/SSG, acessibilidade e componentização escalável.'
        },
        {
          title: 'Aplicativos Mobile',
          description: 'Apps React Native com Expo Router, notificações e experiência fluida em múltiplos dispositivos.'
        }
      ]
    },

    // Contact
    contact: {
      title: 'Vamos',
      titleHighlight: 'Conversar',
      subtitle: 'Estou disponível para oportunidades, projetos ou simplesmente para trocar ideias sobre tecnologia.',
      infoTitle: 'Informações de Contato',
      infoSubtitle: 'Preencha o formulário ou utilize um dos meios abaixo:',
      phone: 'Telefone',
      location: 'Localização',
      locationValue: 'Almenara, Minas Gerais',
      social: 'Redes Sociais',
      formTitle: 'Envie uma Mensagem',
      successMsg: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      errorMsg:
        'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou me contate diretamente por email.',
      labelName: 'Nome',
      placeholderName: 'Seu nome completo',
      labelEmail: 'Email',
      placeholderEmail: 'seu@email.com',
      labelSubject: 'Assunto',
      placeholderSubject: 'Ex: Desenvolvimento de landing page',
      labelMessage: 'Mensagem',
      placeholderMessage: 'Descreva seu projeto ou dúvida',
      sending: 'Enviando...',
      send: 'Enviar Mensagem',
      toastSuccess: 'Mensagem enviada com sucesso!',
      toastError: 'Falha ao enviar a mensagem. Tente novamente mais tarde.',
      errorName: 'Nome é obrigatório',
      errorNameMin: 'Nome deve ter pelo menos 3 caracteres',
      errorEmail: 'Email é obrigatório',
      errorEmailInvalid: 'Digite um email válido',
      errorSubject: 'Assunto é obrigatório',
      errorSubjectMin: 'Assunto deve ter pelo menos 5 caracteres',
      errorMessage: 'Mensagem é obrigatória',
      errorMessageMin: 'Mensagem deve ter pelo menos 10 caracteres'
    },

    // Footer
    footer: {
      description: 'Desenvolvedor Full Stack especializado em criar soluções digitais performáticas e acessíveis.',
      navigation: 'Navegação',
      about: 'Sobre Mim',
      contact: 'Contato',
      experiences: 'Experiências',
      projects: 'Projetos',
      rights: 'Todos os direitos reservados.'
    },

    // Command Palette
    palette: {
      placeholder: 'Digite um comando ou busque...',
      noResults: 'Nenhum resultado encontrado.',
      navigation: 'Navegação',
      actions: 'Ações',
      goHome: 'Ir para Home',
      goAbout: 'Ir para Sobre',
      goExperiences: 'Ir para Experiências',
      goProjects: 'Ir para Projetos',
      goContact: 'Ir para Contato',
      toggleTheme: 'Alternar tema (claro/escuro)',
      switchLang: 'Mudar para Inglês',
      downloadCV: 'Baixar Currículo'
    },

    // 404 / Not Found
    notFound: {
      title: '404',
      heading: 'Página não encontrada',
      description: 'A página que você está procurando não existe, foi movida ou está temporariamente indisponível.',
      suggestion: 'Verifique o endereço digitado ou navegue para uma das seções abaixo:',
      goHome: 'Voltar ao Início',
      goBack: 'Voltar para Página Anterior',
      projects: 'Ver Projetos',
      contact: 'Falar Comigo'
    }
  },

  en: {
    // Sidebar
    sidebar: {
      role: 'Full Stack Developer',
      nav: {
        home: 'Home',
        about: 'About',
        experiences: 'Experiences',
        projects: 'Projects',
        contact: 'Contact'
      },
      resume: 'Resume',
      resumeTooltip: 'Download Resume',
      collapse: 'Collapse',
      expandLabel: 'Expand menu',
      collapseLabel: 'Collapse menu',
      dark: 'Dark',
      light: 'Light',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      toggleTheme: 'Toggle theme',
      openMenu: 'Open menu',
      nav_menu: 'Navigation Menu',
      switchLang: 'Mudar para Português'
    },

    // Home
    home: {
      greeting: "Hi, I'm",
      badge: 'Full Stack Developer | Java & Spring Boot | Next.js & TypeScript',
      heroP1:
        'Developer focused on robust architectures and high-performance interfaces, with experience in systems serving over 15,000 users.',
      heroP2:
        "Currently part of IFNMG's digital ecosystem, contributing to Pharus (event management) and the Cajuí Mobile app, combining a secure Java/Spring Boot back-end with fast Next.js and React Native front-ends.",
      specialtiesTitle: 'My Specialties',
      specialties: [
        {
          title: 'Java & Spring Boot Back-end',
          description: 'RESTful APIs with security, validation, JPA, and production-ready integrations.'
        },
        {
          title: 'Next.js & TypeScript Front-end',
          description: 'Fast experiences with App Router, SSR/SSG, accessibility, and reusable components.'
        },
        {
          title: 'Mobile with React Native',
          description: 'Apps with Expo Router, real-time notifications and synchronization for students and teams.'
        }
      ],
      skillsTitle: 'My Skills',
      skillCategories: {
        backend: 'Back-End',
        frontend: 'Front-End',
        mobile: 'Mobile',
        database: 'Database',
        tools: 'Tools'
      },
      aboutTitle: 'About Me',
      aboutText:
        'I am a Full Stack Software Developer focused on scalable, high-performance systems using the Java (Spring Boot) ecosystem on the back-end and Next.js (TypeScript) on the front-end. My approach combines clean code, SSR/SSG, and secure integrations to deliver real value to users.',
      aboutCta: 'My full journey',
      ctaTitle: "Let's talk?",
      ctaText:
        'Open to opportunities, freelance projects, or partnerships where Java/Spring Boot and Next.js make a difference.',
      ctaButton: 'Get in Touch',
      heroViewProjects: 'View Projects',
      heroContact: 'Contact Me'
    },

    // About
    about: {
      title: 'My',
      titleHighlight: 'Journey',
      subtitle:
        'From technical training to systems serving over 15,000 users, every delivery reflects my focus on quality, performance, and real impact.',
      whoTitle: 'Who I am',
      bio1: "I'm",
      bio1Name: 'Gabriel Martins Moraes Porto',
      bio1Rest:
        ', a Full Stack Developer specialized in combining secure back-ends with Java and Spring Boot with fast front-ends using Next.js and TypeScript.',
      bio2: "I'm currently part of IFNMG's digital ecosystem, contributing to Pharus (large-scale event management) and Cajuí Mobile (modern academic experience on mobile devices).",
      bio3: 'My approach combines Clean Code, SSR/SSG, secure authentication, and well-typed integrations. I work with Scrum, clear documentation, and disciplined versioning.',
      bio4: 'I aim to create solutions that remain robust in production and deliver smooth experiences for users.',
      educationTitle: 'Academic Background',
      education: [
        {
          date: '2021 - 2023',
          title: 'Technical Degree in Computer Science',
          subtitle: 'EE Tancredo Neves - Integrated High School',
          description: 'Technical training focused on computing fundamentals, networking, and software development.',
          side: 'right' as const
        },
        {
          date: '2024 - 2026 (expected)',
          title: 'Technology Degree in Systems Analysis and Development',
          subtitle: 'IFNMG - Higher Technology',
          description: 'In-depth study of software engineering, systems architecture, and web/mobile development.',
          side: 'left' as const
        }
      ],
      certsTitle: 'Certifications',
      certs: [
        {
          name: 'Learn Golang from Scratch!',
          description: 'Fundamentals, syntax, functions, testing, HTTP and REST APIs.'
        },
        {
          name: 'Javascript and TypeScript — Full Stack',
          description:
            'JavaScript, TypeScript, Next, Node, React, React Hooks, Express, noSQL, Context API, Design Patterns'
        }
      ],
      ctaTitle: "Let's build something amazing?",
      ctaText:
        "If you need a Full Stack Developer who can combine Java/Spring Boot and Next.js to deliver fast, sustainable value, let's talk.",
      ctaContact: 'Professional Contact',
      ctaProjects: 'View My Projects'
    },

    // Experiences
    experiences: {
      badge: 'Professional Journey',
      title: 'My',
      titleHighlight: 'Experiences',
      subtitle:
        "Over a year and a half building real systems for IFNMG's digital ecosystem, serving thousands of users with quality and performance.",
      current: 'Current',
      contributions: 'Contributions',
      technologies: 'Technologies',
      ctaTitle: 'Ready for the next challenge',
      ctaText: 'Open to opportunities where Java/Spring Boot, Next.js, or React Native can make a real impact.',
      ctaContact: 'Get in Touch',
      ctaProjects: 'View Projects',
      items: [
        {
          role: 'Mobile Software Developer',
          company: 'IFNMG',
          period: 'August 2025 – Present',
          location: 'Almenara, MG',
          current: true,
          description:
            "I'm part of the Cajuí Mobile team, IFNMG's official app for modernizing academic access. The system centralizes student ID, requests, history, schedules, and integration with internal systems, prioritizing accessibility and performance for thousands of users.",
          achievements: [
            'Global state architecture with Context API for authentication and sessions',
            'Form flows with React Hook Form + Zod for runtime validation',
            'Navigation with Expo Router and Auth Guards for sensitive route protection',
            'Accessible UI with React Native Paper, responsive on iOS and Android',
            'Complex API consumption with real-time data synchronization',
            'Working under Scrum methodology with high-value delivery cycles'
          ],
          technologies: [
            'React Native',
            'Expo Router',
            'TypeScript',
            'Context API',
            'React Hook Form',
            'Zod',
            'React Native Paper',
            'Git/GitHub'
          ],
          color: 'from-violet-500/10 to-purple-500/5'
        },
        {
          role: 'Front-End Developer',
          company: 'IFNMG',
          period: 'August 2024 – July 2025',
          location: 'Almenara, MG',
          current: false,
          description:
            'I worked on the development of the Pharus platform – Event Management, the official IFNMG system used across all campuses to centralize institutional event organization. As a Web Developer, I was responsible for interface evolution, ensuring an intuitive and scalable experience for a critical base of over 15,000 students and staff.',
          achievements: [
            'High-performance interfaces with Next.js using SSR and SSG',
            'TypeScript throughout the application ensuring type-safety and runtime error reduction',
            'Design system with Material UI creating highly reusable components',
            'Complex, dynamic forms with rigorous validation integrated into RESTful APIs',
            'Platform evolution ensuring accessibility for over 15,000 students and staff',
            'Version control and Code Reviews with Git/GitHub under Scrum methodology'
          ],
          technologies: [
            'Next.js',
            'React.js',
            'TypeScript',
            'Material UI',
            'SSR/SSG',
            'RESTful APIs',
            'Git/GitHub',
            'Scrum'
          ],
          color: 'from-blue-500/10 to-cyan-500/5'
        }
      ]
    },

    // Projects
    projects: {
      title: 'My',
      titleHighlight1: 'Projects',
      and: '&',
      titleHighlight2: 'Services',
      subtitle: 'Real-world solutions built with modern technologies and best coding practices.',
      ctaConversation: "Let's talk",
      featuredTitle: 'Featured',
      highlightsTitle: 'Highlighted Projects',
      servicesTitle: 'Services',
      ctaTitle: 'Interested in a project or service?',
      ctaText:
        'I can develop a custom solution with the right combination of Java/Spring Boot, Next.js, and React Native.',
      ctaContact: 'Talk to Me',
      featured: {
        title: 'Pharus - Event Management',
        description:
          'Official IFNMG platform for event management, with SSR/SSG, typed forms and secure integrations serving over 15,000 users.'
      },
      items: [
        {
          title: 'Cajuí Mobile',
          description:
            'Official app to modernize academic access for students and staff, with real-time notifications and complex API consumption.'
        },
        {
          title: 'Project Showcase (IFNMG)',
          description:
            'Robust institutional platform to centralize, organize, and showcase academic production (Teaching, Research, Extension, and Theses) at the campus.'
        },
        {
          title: 'RB SOFT Solutions',
          description: 'Institutional landing page optimized for performance, responsiveness, and SEO.'
        },
        {
          title: 'Academic Event Management System',
          description:
            'Command-line Java application with OOP, SQLite, and exception handling for registration and control of events, participants, and payments.'
        }
      ],
      services: [
        {
          title: 'Java APIs & Back-end',
          description: 'Spring Boot, security, validation, JPA, and clear documentation for reliable integrations.'
        },
        {
          title: 'Next.js & TypeScript Front-end',
          description: 'High-performance interfaces with SSR/SSG, accessibility, and scalable componentization.'
        },
        {
          title: 'Mobile Applications',
          description:
            'React Native apps with Expo Router, notifications, and a smooth experience across multiple devices.'
        }
      ]
    },

    // Contact
    contact: {
      title: "Let's",
      titleHighlight: 'Talk',
      subtitle: "I'm available for opportunities, projects, or simply to exchange ideas about technology.",
      infoTitle: 'Contact Information',
      infoSubtitle: 'Fill out the form or use one of the channels below:',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Almenara, Minas Gerais, Brazil',
      social: 'Social Media',
      formTitle: 'Send a Message',
      successMsg: "Message sent successfully! I'll get back to you soon.",
      errorMsg: 'An error occurred while sending your message. Please try again or contact me directly by email.',
      labelName: 'Name',
      placeholderName: 'Your full name',
      labelEmail: 'Email',
      placeholderEmail: 'your@email.com',
      labelSubject: 'Subject',
      placeholderSubject: 'Ex: Landing page development',
      labelMessage: 'Message',
      placeholderMessage: 'Describe your project or question',
      sending: 'Sending...',
      send: 'Send Message',
      toastSuccess: 'Message sent successfully!',
      toastError: 'Failed to send message. Please try again later.',
      errorName: 'Name is required',
      errorNameMin: 'Name must be at least 3 characters',
      errorEmail: 'Email is required',
      errorEmailInvalid: 'Enter a valid email',
      errorSubject: 'Subject is required',
      errorSubjectMin: 'Subject must be at least 5 characters',
      errorMessage: 'Message is required',
      errorMessageMin: 'Message must be at least 10 characters'
    },

    // Footer
    footer: {
      description: 'Full Stack Developer specialized in building high-performance and accessible digital solutions.',
      navigation: 'Navigation',
      about: 'About Me',
      contact: 'Contact',
      experiences: 'Experiences',
      projects: 'Projects',
      rights: 'All rights reserved.'
    },

    // Command Palette
    palette: {
      placeholder: 'Type a command or search...',
      noResults: 'No results found.',
      navigation: 'Navigation',
      actions: 'Actions',
      goHome: 'Go to Home',
      goAbout: 'Go to About',
      goExperiences: 'Go to Experiences',
      goProjects: 'Go to Projects',
      goContact: 'Go to Contact',
      toggleTheme: 'Toggle theme (light/dark)',
      switchLang: 'Switch to Portuguese',
      downloadCV: 'Download Resume'
    },

    // 404 / Not Found
    notFound: {
      title: '404',
      heading: 'Page not found',
      description: 'The page you are looking for does not exist, has been moved, or is temporarily unavailable.',
      suggestion: 'Check the URL or navigate to one of the sections below:',
      goHome: 'Back to Home',
      goBack: 'Go to Previous Page',
      projects: 'View Projects',
      contact: 'Contact Me'
    }
  }
} as const

export type Translations = (typeof translations)['pt']
