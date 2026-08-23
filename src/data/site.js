// Verified SweetsByLea content and local media.

export const site = {
  name: 'SweetsByLea',
  shortName: 'SweetsByLea',
  tagline: 'Sweets with a touch of faith',
  taglineEs: 'Dulces con un toque de fe',
  metaTitle: 'SweetsByLea | Sweets with a touch of faith',
  metaDescription:
    'Handcrafted cakes, cupcakes, strawberries, and desserts made with love and faith for your sweetest celebrations.',
  email: 'Leannacorporan@icloud.com',
  phone: '+1 908-943-1344',
  phoneDisplay: '908-943-1344',
  whatsapp: 'https://wa.me/19089431344',
  instagram: 'https://instagram.com/sweets_bylea',
  instagramHandle: '@sweets_bylea',
  logo: '/media/profile-lea.jpg',
  siteUrl: 'https://sweets-bylea.pages.dev',
};

export const locales = {
  en: { label: 'English', short: 'EN' },
  es: { label: 'Español', short: 'ES' },
};

export const localize = (locale, path = '/') => {
  if (locale === 'es') return path === '/' ? '/es/' : `/es${path}`;
  return path;
};

export const nav = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'About', href: '/about/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Contact', href: '/contact/' },
  ],
  es: [
    { label: 'Inicio', href: '/es/' },
    { label: 'Servicios', href: '/es/services/' },
    { label: 'Sobre Mí', href: '/es/about/' },
    { label: 'Galería', href: '/es/gallery/' },
    { label: 'Contacto', href: '/es/contact/' },
  ],
};

export const media = {
  hero: '/media/07a-coquet-1.jpg',
  heroAlt: 'Custom celebration cake decorated with pink ribbons and hearts',
  story: '/media/11-baking-vlog-poster.jpg',
  storyAlt: 'A glimpse into Lea’s baking vlog',
  logo: site.logo,
};

export const copy = {
  en: {
    heroEyebrow: 'Handcrafted with love and faith',
    heroTitle: ['Sweets with a touch of', 'faith.'],
    heroBody:
      'Thoughtful cakes, cupcakes, strawberries, and special-event desserts made to bring joy to your sweetest moments.',
    order: 'Start an order',
    explore: 'Explore services',
    marquee: ['Custom cakes', 'Cupcakes', 'Event desserts', 'Strawberries', 'Faith & joy'],
    aboutEyebrow: 'Meet Lea',
    aboutTitle: 'Every sweet is made with love.',
    aboutBody: [
      'Hi, I’m Lea, the heart behind SweetsByLea. I pour my passion for baking into every creation so it can taste wonderful and bring joy to your special occasion.',
      'As a Christian baker, my faith inspires the way I serve: with care, encouragement, and a touch of sweetness in every detail.',
    ],
    aboutLink: 'Read Lea’s story',
    servicesEyebrow: 'Made for your moment',
    servicesTitle: 'Sweet ways to celebrate',
    servicesBody: 'Choose a service and let’s create something meaningful together.',
    mediaEyebrow: 'From Lea’s kitchen',
    mediaTitle: 'Real bakes. Real joy.',
    mediaBody: 'Follow along for behind-the-scenes baking, seasonal drops, and recent creations.',
    galleryLink: 'See the gallery',
    ctaEyebrow: 'Your celebration next',
    ctaTitle: 'Let’s create something sweet.',
    ctaBody: 'Share your vision and Lea will help bring it to life.',
    contactLink: 'Tell me about your order',
    footerLine: 'Handcrafted desserts made with love, faith, and care.',
  },
  es: {
    heroEyebrow: 'Hecho a mano con amor y fe',
    heroTitle: ['Dulces con un toque de', 'fe.'],
    heroBody:
      'Pasteles, cupcakes, fresas cubiertas de chocolate y postres para eventos preparados para llenar de alegría tus momentos más dulces.',
    order: 'Comenzar un pedido',
    explore: 'Ver servicios',
    marquee: ['Pasteles personalizados', 'Cupcakes', 'Postres para eventos', 'Fresas', 'Fe y alegría'],
    aboutEyebrow: 'Conoce a Lea',
    aboutTitle: 'Cada dulce está hecho con amor.',
    aboutBody: [
      'Hola, soy Lea, el corazón detrás de SweetsByLea. Pongo mi pasión por la repostería en cada creación para que sepa deliciosa y lleve alegría a tus ocasiones especiales.',
      'Como repostera cristiana, mi fe inspira la forma en que sirvo: con cuidado, ánimo y un toque de dulzura en cada detalle.',
    ],
    aboutLink: 'Conoce la historia de Lea',
    servicesEyebrow: 'Hecho para tu momento',
    servicesTitle: 'Formas dulces de celebrar',
    servicesBody: 'Elige un servicio y creemos algo especial juntos.',
    mediaEyebrow: 'Desde la cocina de Lea',
    mediaTitle: 'Dulces reales. Alegría real.',
    mediaBody: 'Acompáñanos para ver el proceso, los lanzamientos de temporada y las creaciones recientes.',
    galleryLink: 'Ver la galería',
    ctaEyebrow: 'Tu celebración sigue',
    ctaTitle: 'Creemos algo dulce.',
    ctaBody: 'Comparte tu idea y Lea te ayudará a hacerla realidad.',
    contactLink: 'Cuéntame sobre tu pedido',
    footerLine: 'Postres hechos a mano con amor, fe y cuidado.',
  },
};

const serviceMedia = {
  cakes: { image: '/media/07a-coquet-1.jpg', alt: 'Custom cake with pink ribbon details' },
  cupcakes: { image: '/media/06-valentines-cupcakes.jpg', alt: 'Decorated cupcakes with pink and red buttercream' },
  events: { image: '/media/05a-strawberries-1.jpg', alt: 'Chocolate-covered strawberries arranged in a gift box' },
  consultations: { image: '/media/11-baking-vlog-poster.jpg', alt: 'Behind-the-scenes baking moment' },
};

export const services = {
  en: [
    {
      slug: 'custom-cakes', title: 'Custom Cake Orders', cardTitle: 'Custom cakes',
      summary: 'Delight in a cake that tells your story with every bite.',
      body: ['Every custom cake is a canvas for your special moments, crafted thoughtfully to reflect your vision and tastes.', 'This service is for celebrations that deserve meaningful details—whether a wedding, birthday, religious celebration, or unique themed event.'],
      idealFor: ['Weddings and anniversaries', 'Birthdays and milestones', 'Religious celebrations', 'Unique themed events'],
      steps: ['Share your vision and preferences', 'Collaborate on design and flavors', 'Receive your handcrafted cake with care'], ...serviceMedia.cakes,
    },
    {
      slug: 'cupcakes', title: 'Cupcake Creations', cardTitle: 'Cupcake creations',
      summary: 'Savor individually crafted cupcakes that bring joy to every occasion.',
      body: ['Each cupcake is baked with intention and decorated to reflect your event’s essence, turning simple treats into memorable delights.', 'Choose this service for charming, personalized sweets for gatherings, gifts, or simply sharing joy.'],
      idealFor: ['Baby showers and baptisms', 'Office celebrations', 'Gift boxes', 'Casual get-togethers'],
      steps: ['Discuss your event and flavor preferences', 'Choose your custom decorations', 'Enjoy freshly made cupcakes with care'], ...serviceMedia.cupcakes,
    },
    {
      slug: 'event-desserts', title: 'Special Event Desserts', cardTitle: 'Event desserts',
      summary: 'Elevate your gathering with desserts tailored to your occasion.',
      body: ['From intimate dinners to larger celebrations, desserts are designed to complement your event’s tone and theme.', 'Each creation is inspired by your story and made with care to add sweetness and warmth.'],
      idealFor: ['Holiday celebrations', 'Religious gatherings', 'Corporate events', 'Family reunions'],
      steps: ['Share your event details and preferences', 'Collaborate on dessert selections', 'Receive desserts ready to delight guests'], ...serviceMedia.events,
    },
    {
      slug: 'baking-consultations', title: 'Personalized Baking Consultations', cardTitle: 'Baking consultations',
      summary: 'Gain confidence and inspiration with one-on-one baking guidance.',
      body: ['These consultations support your baking journey and adapt to your goals and questions.', 'Lea offers encouragement rooted in experience and faith, creating a nurturing space for learning.'],
      idealFor: ['Aspiring home bakers', 'Custom recipe advice', 'Baking enthusiasts', 'Faith-inspired encouragement'],
      steps: ['Identify your goals and challenges', 'Schedule a personalized session', 'Receive tailored advice and encouragement'], ...serviceMedia.consultations,
    },
  ],
  es: [
    {
      slug: 'custom-cakes', title: 'Pedidos de Pasteles Personalizados', cardTitle: 'Pasteles personalizados',
      summary: 'Disfruta de un pastel que cuenta tu historia en cada bocado.',
      body: ['Cada pastel personalizado es un lienzo para tus momentos especiales, elaborado cuidadosamente para reflejar tu visión y tus gustos.', 'Este servicio es ideal para celebraciones con detalles significativos: bodas, cumpleaños, celebraciones religiosas o eventos temáticos.'],
      idealFor: ['Bodas y aniversarios', 'Cumpleaños y logros personales', 'Celebraciones religiosas', 'Eventos temáticos'],
      steps: ['Comparte tu visión y preferencias', 'Colabora en el diseño y los sabores', 'Recibe tu pastel artesanal con cuidado'], ...serviceMedia.cakes,
    },
    {
      slug: 'cupcakes', title: 'Creaciones de Cupcakes', cardTitle: 'Creaciones de cupcakes',
      summary: 'Disfruta cupcakes elaborados individualmente para cada ocasión.',
      body: ['Cada cupcake se hornea con intención y se decora para reflejar la esencia de tu evento, convirtiendo simples dulces en recuerdos memorables.', 'Es una opción perfecta para reuniones, regalos o simplemente para compartir alegría.'],
      idealFor: ['Baby showers y bautizos', 'Celebraciones de oficina', 'Cajas de regalo', 'Reuniones informales'],
      steps: ['Habla sobre tu evento y los sabores', 'Elige tus decoraciones personalizadas', 'Disfruta cupcakes recién hechos con cuidado'], ...serviceMedia.cupcakes,
    },
    {
      slug: 'event-desserts', title: 'Postres para Eventos Especiales', cardTitle: 'Postres para eventos',
      summary: 'Eleva tus reuniones con postres adaptados a tu ocasión.',
      body: ['Desde cenas íntimas hasta celebraciones grandes, los postres se diseñan para complementar el tono y el tema de tu evento.', 'Cada creación se inspira en tu historia y se prepara con cuidado para añadir dulzura y calidez.'],
      idealFor: ['Celebraciones festivas', 'Reuniones religiosas', 'Eventos corporativos', 'Reuniones familiares'],
      steps: ['Comparte los detalles de tu evento', 'Colabora en la selección de postres', 'Recibe tus postres listos para deleitar'], ...serviceMedia.events,
    },
    {
      slug: 'baking-consultations', title: 'Consultas Personalizadas de Repostería', cardTitle: 'Consultas de repostería',
      summary: 'Gana confianza e inspiración con orientación personalizada.',
      body: ['Estas consultas apoyan tu camino en la repostería y se adaptan a tus metas y preguntas.', 'Lea ofrece motivación basada en experiencia y fe, creando un espacio acogedor para aprender.'],
      idealFor: ['Reposteros caseros aspirantes', 'Consejos personalizados de recetas', 'Entusiastas de la repostería', 'Motivación inspirada en la fe'],
      steps: ['Identifica tus metas y desafíos', 'Programa una sesión personalizada', 'Recibe consejos y motivación adaptados'], ...serviceMedia.consultations,
    },
  ],
};

export const galleryItems = [
  { kind: 'image', category: 'cakes', image: '/media/07a-coquet-1.jpg', alt: 'Custom cake with pink ribbons and hearts' },
  { kind: 'image', category: 'cakes', image: '/media/07b-coquet-2.jpg', alt: 'Close view of a custom cake with pink ribbons' },
  { kind: 'image', category: 'cupcakes', image: '/media/04a-cake-1.jpg', alt: 'Blue buttercream cupcakes in a gift box' },
  { kind: 'image', category: 'cupcakes', image: '/media/04b-cake-2.jpg', alt: 'Blue rosette cupcakes in a gift box' },
  { kind: 'image', category: 'cupcakes', image: '/media/04c-cake-3.jpg', alt: 'Blue and white decorated cupcakes' },
  { kind: 'image', category: 'cupcakes', image: '/media/06-valentines-cupcakes.jpg', alt: 'Pink and red flower cupcakes' },
  { kind: 'image', category: 'strawberries', image: '/media/05a-strawberries-1.jpg', alt: 'Pink chocolate-covered strawberries in a gift box' },
  { kind: 'image', category: 'strawberries', image: '/media/05b-strawberries-2.jpg', alt: 'Pink and white chocolate-covered strawberries' },
  { kind: 'image', category: 'strawberries', image: '/media/05c-strawberries-3.jpg', alt: 'Chocolate-covered strawberries with sprinkles' },
  { kind: 'image', category: 'strawberries', image: '/media/05d-strawberries-4.jpg', alt: 'Blue and white chocolate-covered strawberries' },
  { kind: 'image', category: 'strawberries', image: '/media/08a-hearts-1.jpg', alt: 'Gift box of decorated strawberries tied with ribbon' },
  { kind: 'image', category: 'strawberries', image: '/media/08b-hearts-2.jpg', alt: 'White and pink chocolate-covered strawberries' },
  { kind: 'video', category: 'videos', image: '/media/11-baking-vlog.mp4', poster: '/media/11-baking-vlog-poster.jpg', alt: 'Baking vlog from Lea’s kitchen' },
  { kind: 'video', category: 'videos', image: '/media/12-christmas-bake-sale.mp4', poster: '/media/12-christmas-bake-sale-poster.jpg', alt: 'Christmas bake sale video' },
];

export const galleryFilters = {
  en: [{ id: 'all', label: 'All' }, { id: 'cakes', label: 'Cakes' }, { id: 'cupcakes', label: 'Cupcakes' }, { id: 'strawberries', label: 'Strawberries' }, { id: 'videos', label: 'Videos' }],
  es: [{ id: 'all', label: 'Todo' }, { id: 'cakes', label: 'Pasteles' }, { id: 'cupcakes', label: 'Cupcakes' }, { id: 'strawberries', label: 'Fresas' }, { id: 'videos', label: 'Videos' }],
};

export const contactCopy = {
  en: {
    eyebrow: 'Order & contact', title: 'Let’s plan your dessert', intro: 'Tell Lea what you are dreaming up and she will help you choose the sweetest next step.',
    name: 'Name', email: 'Email', phone: 'Phone', date: 'Event date', message: 'Tell me about your dessert',
    messagePlaceholder: 'For example: cupcakes for a birthday, or a custom cake for a June celebration.', submit: 'Continue to WhatsApp', helper: 'Optional, for quick order details.', dateHelper: 'Your event or pickup date, if you have one.', required: 'Please complete this field.', emailError: 'Please enter a valid email address.', whatsappNote: 'Your message will open in WhatsApp so Lea can reply directly.', contactTitle: 'Get in touch', emailLabel: 'Email', phoneLabel: 'Phone / WhatsApp', instagramLabel: 'Instagram',
  },
  es: {
    eyebrow: 'Pedido y contacto', title: 'Planifiquemos tu postre', intro: 'Cuéntale a Lea lo que imaginas y ella te ayudará a elegir el siguiente paso más dulce.',
    name: 'Nombre', email: 'Correo electrónico', phone: 'Teléfono', date: 'Fecha del evento', message: 'Cuéntame sobre tu postre',
    messagePlaceholder: 'Por ejemplo: cupcakes para un cumpleaños o un pastel personalizado para una celebración en junio.', submit: 'Continuar a WhatsApp', helper: 'Opcional, para confirmar detalles rápidamente.', dateHelper: 'La fecha de tu evento o recogida, si la tienes.', required: 'Completa este campo.', emailError: 'Escribe un correo electrónico válido.', whatsappNote: 'Tu mensaje se abrirá en WhatsApp para que Lea pueda responderte directamente.', contactTitle: 'Ponte en contacto', emailLabel: 'Correo electrónico', phoneLabel: 'Teléfono / WhatsApp', instagramLabel: 'Instagram',
  },
};
