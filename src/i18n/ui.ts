export const languages = {
  en: 'EN',
  es: 'ES',
} as const

export type Language = keyof typeof languages
export const defaultLang: Language = 'en'

export const ui = {
  en: {
    // Nav
    'nav.designPatterns': 'Design Patterns',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'lang.switchLabel': 'Cambiar a Español',

    // Home — Card titles
    'home.aboutMe': 'About me',
    'home.experiences': 'Experiences',
    'home.projects': 'Projects',
    'home.blogPosts': 'Blog Posts',
    'home.yourTime': 'Your time',
    'home.myTime': 'My time',
    'home.education': 'Education and Certificates',
    'home.connect': "Let's Connect! 👋",
    'home.connectDesc':
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    'home.connectResponse': 'Typically responds within 24 hours',

    // Intro
    'intro.greeting': "Hi, I'm",
    'intro.description': "Software Engineer specialized in building scalable, high-performing frontend applications with React and modern JavaScript ecosystems, complemented by solid backend and performance testing experience. 🚀",
    'intro.downloadResume': 'Download Resume',

    // About
    'about.intro': 'Turning ideas into products. 💡 ',
    'about.headLine2': 'I enjoy providing software solutions and bring ideas to life.',
    'about.technologies': 'I use the following technologies:',
    'about.exploreMore': 'Explore more about my',
    'about.projects': 'Projects',
    'about.and': 'and my',
    'about.experiences': 'Experiences',

    // Common
    'common.viewMore': 'View More',
    'common.present': 'Present',

    // Blog card
    'blog.noPosts': 'No posts yet',
    'blog.noPostsDesc': 'Check back soon for updates and articles!',

    // Projects card
    'projects.noProjects': 'No projects yet',
    'projects.noProjectsDesc': 'Check back soon for upcoming projects!',

    // Footer
    'footer.builtWith': 'Designed & Built with',
    'footer.launching': 'Launching products from Mexico 🇲🇽',
    'footer.license': 'CC BY 4.0 License',

    // 404
    '404.title': 'Page not found',
    '404.description': "Sorry, we couldn't find the page you're looking for.",
    '404.goHome': 'Go back home',

    // Posts index page
    'posts.pageTitle': 'Blog',
    'posts.description': 'Thoughts, tutorials and insights about software development',
    'posts.subTitle': 'Articles & Insights',

    // Projects index page
    'projects.pageTitle': 'Projects',
    'projects.description': 'Projects I have worked on recently.',
    'projects.subTitle': 'My Projects',

    // Experiences index page
    'experiences.pageTitle': 'Experiences',
    'experiences.description':
      "Here's a glimpse into my professional journey! 🚀 Check out where I've been and what I've learned along the way.",
    'experiences.subTitle': 'Experiences',
  },
  es: {
    // Nav
    'nav.designPatterns': 'Patrones de Diseño',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
    'lang.switchLabel': 'Switch to English',

    // Home — Card titles
    'home.aboutMe': 'Sobre mí',
    'home.experiences': 'Experiencias',
    'home.projects': 'Proyectos',
    'home.blogPosts': 'Blog',
    'home.yourTime': 'Tu hora',
    'home.myTime': 'Mi hora',
    'home.education': 'Educación y Certificados',
    'home.connect': '¡Conectemos! 👋',
    'home.connectDesc':
      'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    'home.connectResponse': 'Usualmente respondo en menos de 24 horas',

    // Intro
    'intro.greeting': 'Hola, soy',
    'intro.description': 'Software Engineer especializado en construir aplicaciones frontend escalables y de alto rendimiento con React y ecosistemas modernos de JavaScript, complementado con sólida experiencia en backend y pruebas de rendimiento. 🚀',
    'intro.downloadResume': 'Descargar CV',

    // About
    'about.intro': 'Convirtiendo ideas en productos. 💡 ',
    'about.headLine2': 'Disfruto proporcionar soluciones de software y dar vida a las ideas.', 
    'about.technologies': 'Utilizo las siguientes tecnologías:',
    'about.exploreMore': 'Explora más sobre mis',
    'about.projects': 'Proyectos',
    'about.and': 'y mis',
    'about.experiences': 'Experiencias',

    // Common
    'common.viewMore': 'Ver más',
    'common.present': 'Presente',

    // Blog card
    'blog.noPosts': 'Sin publicaciones aún',
    'blog.noPostsDesc': '¡Vuelve pronto para ver actualizaciones y artículos!',

    // Projects card
    'projects.noProjects': 'Sin proyectos aún',
    'projects.noProjectsDesc': '¡Vuelve pronto para ver los próximos proyectos!',

    // Footer
    'footer.builtWith': 'Diseñado y construido con',
    'footer.launching': 'Construyendo productos desde México 🇲🇽',
    'footer.license': 'Licencia CC BY 4.0',

    // 404
    '404.title': 'Página no encontrada',
    '404.description': 'Lo sentimos, no pudimos encontrar la página que buscas.',
    '404.goHome': 'Volver al inicio',

    // Posts index page
    'posts.pageTitle': 'Blog',
    'posts.description': 'Pensamientos, tutoriales e ideas sobre desarrollo de software',
    'posts.subTitle': 'Artículos e Ideas',

    // Projects index page
    'projects.pageTitle': 'Proyectos',
    'projects.description': 'Proyectos en los que he trabajado recientemente.',
    'projects.subTitle': 'Mis Proyectos',

    // Experiences index page
    'experiences.pageTitle': 'Experiencias',
    'experiences.description':
      '¡Un vistazo a mi trayectoria profesional! 🚀 Conoce dónde he estado y qué he aprendido en el camino.',
    'experiences.subTitle': 'Experiencias',
  },
} as const
