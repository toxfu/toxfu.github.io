// Datos de proyectos. Agregar uno nuevo = sumar un objeto a este arreglo.
const toHandle = (url) => {
    try {
        const parsed = new URL(url);
        return `${parsed.host}${parsed.pathname}`.replace(/\/$/, '');
    } catch {
        return url;
    }
};

const toHost = (url) => {
    try {
        return new URL(url).host;
    } catch {
        return url;
    }
};

const profile = {
    email: 'contacto.toxfu@gmail.com',
    githubUrl: 'https://github.com/toxfu',
    linkedinUrl: 'https://www.linkedin.com/in/toxfu',
    X: 'https://x.com/T0xFV',
    emailMailto: 'mailto:contacto.toxfu@gmail.com',
    xHandle: toHandle('https://x.com/T0xFV'),
    githubHandle: toHandle('https://github.com/toxfu'),
    linkedinHandle: toHandle('https://www.linkedin.com/in/toxfu'),
    webHost: toHost('https://toxfu.dev'),
    whatsappUrl: 'https://wa.me/51967883090',
    whatsappHandle: '+51 967 883 090',
    telegramUrl: 'https://t.me/toxfu',
    telegramHandle: '@toxfu',
    calendlyUrl: 'https://calendly.com/toxfu/30min',
    calendlyHandle: toHandle('https://calendly.com/toxfu/30min')
};

const siteNavLinks = [
    { label: 'About', href: 'index.html' },
    { label: 'Repositorios', href: 'proyectos.html' },
    { label: 'Trabajos', href: 'trabajos.html' },
    { label: 'Contact', href: 'contacto.html' },
    { label: 'GitHub', href: '#', profileHref: 'githubUrl', external: true }
];

const contactChannels = [
    {
        key: 'email',
        label: 'EMAIL',
        hrefKey: 'emailMailto',
        textKey: 'email',
        external: false,
        homeIcon: 'https://cdn.simpleicons.org/gmail/e2e8e3',
        contactIcon: 'https://cdn.simpleicons.org/gmail/e2e8e3',
        contact: true
    },
    {
        key: 'x',
        label: 'X',
        hrefKey: 'X',
        textKey: 'xHandle',
        external: true,
        homeIcon: 'https://cdn.simpleicons.org/x/e2e8e3',
        contact: false
    },
    {
        key: 'github',
        label: 'GITHUB',
        hrefKey: 'githubUrl',
        textKey: 'githubHandle',
        external: true,
        homeIcon: 'https://cdn.simpleicons.org/github/e2e8e3',
        contact: false

    },
    {
        key: 'linkedin',
        label: 'LINKEDIN',
        hrefKey: 'linkedinUrl',
        textKey: 'linkedinHandle',
        external: true,
        homeIcon: 'icons/linkedin.svg',
        contactIcon: 'icons/linkedin.svg',
        contact: true
    },
    {
        key: 'whatsapp',
        label: 'WHATSAPP',
        hrefKey: 'whatsappUrl',
        textKey: 'whatsappHandle',
        external: true,
        homeIcon: 'https://cdn.simpleicons.org/whatsapp/e2e8e3',
        contactIcon: 'https://cdn.simpleicons.org/whatsapp/e2e8e3',
        contact: true
    },
    // {
    //     key: 'telegram',
    //     label: 'TELEGRAM',
    //     hrefKey: 'telegramUrl',
    //     textKey: 'telegramHandle',
    //     external: true,
    //     homeIcon: 'https://cdn.simpleicons.org/telegram/e2e8e3',
    //     contactIcon: 'https://cdn.simpleicons.org/telegram/e2e8e3',
    //     contact: true
    // },
];

const sharedCtaVariants = {
    default: {
        title: '¿Necesitas algo similar?',
        description: 'Cuéntame qué quieres construir y te propongo un plan claro.'
    },
    works: {
        title: '¿Quieres resolver un problema similar?',
        description: 'Te ayudo a definir alcance, solución y siguientes pasos.'
    }
};

const sharedCtaActions = {
    primaryLabel: 'Escríbeme',
    primaryHrefKey: 'whatsappUrl',
    primaryExternal: true,
    secondaryLabel: 'Contacto',
    secondaryHrefKey: 'emailMailto',
    secondaryExternal: false
};

const pageHeroVariants = {
    default: {
        title: 'Hablemos',
        subtitles: [
            'Respondo en menos de 24h. Cuéntame el contexto, el objetivo y la fecha ideal para tu siguiente release.',
            'Horarios de atención, Lunes a Viernes de 9:00 a 16:00. Hora Peruana, UTC -5 horas'
        ]
    },
    projects: {
        title: 'Repositorios abiertos',
        subtitles: ['Código público del portafolio: proyectos que puedes revisar directamente en GitHub.']
    },
    works: {
        title: 'Trabajos realizados',
        subtitles: ['Casos profesionales más representativos, donde el foco estuvo en resolver problemas de operación, automatización y decisiones con datos.']
    },
    contact: {
        title: 'Hablemos',
        subtitles: [
            'Respondo en menos de 24h. Cuéntame el contexto, el objetivo y la fecha ideal para tu siguiente release.',
            'Horarios de atención, Lunes a Viernes de 9:00 a 16:00. Hora Peruana, UTC -5 horas'
        ]
    }
};

const techIconMap = {
    Python: 'icons/python.svg',
    Streamlit: 'https://cdn.simpleicons.org/streamlit',
    Polars: 'icons/polars.svg',
    PostgreSQL: 'https://cdn.simpleicons.org/postgresql',
    SQLite: 'https://cdn.simpleicons.org/sqlite',
    PyTorch: 'https://cdn.simpleicons.org/pytorch',
    Torchaudio: 'icons/torchaudio.svg',
    Transformers: 'icons/hugging_face.svg',
    Whisper: 'icons/openai.svg',
    FFmpeg: 'https://cdn.simpleicons.org/ffmpeg',
    Jupyter: 'https://cdn.simpleicons.org/jupyter',
    Kokoro: 'icons/kokoro.svg',
    Plotly: 'https://cdn.simpleicons.org/plotly',
    Automatización: 'https://cdn.simpleicons.org/n8n',
    Notificaciones: 'https://cdn.simpleicons.org/slack',
    ScikitLearn: 'https://cdn.simpleicons.org/scikitlearn',
    LangGraph: 'https://cdn.simpleicons.org/langgraph',
    Vllm: 'icons/vllm.svg',
    GLM_OCR: 'icons/GLM-OCR.svg',
    FastApi: 'https://cdn.simpleicons.org/fastapi',
};

const projects = [
    {
        title: 'AI, the way',
        year: 2026,
        description: 'Repositorio para recopilar papers de IA clave, tutoriales y demás recursos útiles relacionados a la inteligencia artificial.',
        tech: ['Jupyter', 'Markdown'],
        image: 'images/project-ai-the-way.png',
        link: 'https://toxfu.github.io/AI-papers/'
    },
    {
        title: 'olympic dashboard',
        year: 2026,
        description: 'Dashboard para explorar datos olímpicos con filtros rápidos y visualizaciones claras.',
        tech: ['Python', 'Streamlit', 'Polars', 'Plotly'],
        image: 'images/project-olympic%20dashboard.png',
        link: 'https://github.com/toxfu/olympic-dashboard'
    },
    {
        title: 'local video dubbing',
        year: 2026,
        description: 'Pipeline local para doblaje de video con manejo de audio y sincronización automática.',
        tech: ['Python', 'PyTorch', 'Torchaudio', 'Transformers', 'Whisper', 'Streamlit', 'FFmpeg', 'Kokoro', 'SQLite'],
        image: 'images/project-local%20video%20dubbing.png',
        link: 'https://github.com/toxfu/local-video-dubbing'
    },
    {
        title: 'English tool Study',
        year: 2026,
        description: 'Aprende inglés, según tus frases y/o palabras aplicadas a distintos contextos. No se memoriza, se aprende.',
        tech: ['Python', 'PyTorch', 'Transformers', 'Streamlit', 'Kokoro', 'SQLite'],
        image: 'images/project-English-tool-Study.png',
        link: 'https://github.com/toxfu/English-tool-Study'
    },
    {
        title: 'AI projects collection',
        year: 2026,
        description: 'Juego de tablero tipo ajedrez por consola, centrado en lógica y jugabilidad simple.',
        tech: ['Jupyter', 'Python', 'Transformers', 'PyTorch', 'ScikitLearn'],
        image: 'images/project-AI%20projects%20collection.png',
        link: 'https://github.com/toxfu/AI-projects-collection'
    }
];

const works = [
    {
        title: 'Agente de Extracción de Documentos',
        context: 'Automatización · 2025',
        problem: 'Facturas, contratos y PDFs llegaban por correo y se procesaban a mano: copiar campos, pegar en planillas, verificar datos. 3-4 horas diarias en trabajo repetitivo con errores frecuentes.',
        solution: 'Agente que recibe documentos (PDF, imagen), extrae campos clave con IA , monto, fecha, vencimiento, ítems— valida el resultado contra reglas de negocio y lo inserta directamente en la base de datos. Todo de manera local.',
        result: 'Procesamiento por documento reducido de ~8 minutos a menos de 20 segundos. Tasa de error bajó de ~12% a menos de 2%. El equipo eliminó el ingreso manual por completo.',
        stack: ['Python', 'GLM_OCR', 'PostgreSQL', 'Vllm', 'Transformers', 'PyTorch', 'LangGraph', 'FastApi']
    },
    {
        title: 'Automatización de Reportes Ejecutivos',
        context: 'Data · 2025',
        problem: 'Reportes mensuales armados a mano: 2-3 días de trabajo por ciclo, con errores de consistencia frecuentes.',
        solution: 'Pipeline ETL completo con extracción automática, transformación y generación de reportes visuales programados.',
        result: 'Ciclo de reporte reducido de 3 días a 20 minutos. Frecuencia aumentada de mensual a semanal sin costo adicional.',
        stack: ['Python', 'ETL', 'PostgreSQL', 'Plotly']
    },
    {
        title: 'Agente de Monitoreo y Acción sobre Datos',
        context: 'Automatización · 2025',
        problem: 'Indicadores críticos revisados manualmente cada mañana; anomalías detectadas horas después de ocurrir.',
        solution: 'Agente autónomo que consulta fuentes de datos en intervalos definidos, detecta anomalías con reglas configurables y ejecuta acciones correctivas o notificaciones sin intervención humana.',
        result: 'Tiempo de detección de anomalías reducido de ~8h a menos de 10 minutos. Eliminó revisión manual diaria para el equipo.',
        stack: ['Python', 'LangGraph', 'PostgreSQL']
    },
    {
        title: 'Migración Excel → Base de Datos Relacional',
        context: 'Data Engineering · 2026',
        problem: '14 archivos Excel interconectados con fórmulas cruzadas, datos duplicados y sin fuente única de verdad. Cualquier cambio rompía referencias en cascada. Problemas de rendimiento y errores frecuentes en consultas manuales para reportes y análisis.',
        solution: 'Auditoría completa del modelo de datos, diseño del esquema relacional normalizado y migración con scripts de validación para garantizar integridad referencial. Los archivos originales quedaron como lectura de respaldo.',
        result: 'Tiempo de consulta reducido de minutos (búsqueda manual) a menos de 1 segundo. Eliminados ~3.200 registros duplicados. El equipo dejó de usar Excel para operaciones en 2 semanas.',
        stack: ['Python', 'PostgreSQL', 'Polars']
    }
];

const toDataUriSvg = (svg) => {
    const encoded = encodeURIComponent(svg)
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29');
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
};

const makeProjectPlaceholder = (title) => {
    const safeTitle = String(title || 'project').slice(0, 40);
    const initial = safeTitle.trim().slice(0, 1).toUpperCase() || 'P';

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#6fa89a" stop-opacity="0.95"/>
            <stop offset="1" stop-color="#c9a45c" stop-opacity="0.95"/>
        </linearGradient>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity="0.55"/>
        </filter>
    </defs>
    <rect width="1200" height="675" rx="44" fill="#0f1a17"/>
    <rect x="48" y="48" width="1104" height="579" rx="38" fill="url(#g)" opacity="0.25"/>
    <rect x="80" y="84" width="1040" height="507" rx="32" fill="#0f1a17" opacity="0.72"/>
    <g filter="url(#s)">
        <circle cx="160" cy="160" r="64" fill="url(#g)"/>
        <text x="160" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="56" font-weight="800" fill="#0a0f0d">${initial}</text>
    </g>
    <text x="80" y="300" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="56" font-weight="800" fill="#e2e8e3">${safeTitle}</text>
    <text x="80" y="360" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="28" font-weight="600" fill="#9aa6a0">Project preview</text>
</svg>`;

    return toDataUriSvg(svg);
};

const makeTechFallbackIcon = (label) => {
    const safeLabel = String(label || 'tech').slice(0, 16);
    const initial = safeLabel.trim().slice(0, 1).toUpperCase() || 'T';

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    <rect width="36" height="36" rx="9" fill="#0f1a17"/>
    <rect x="1.25" y="1.25" width="33.5" height="33.5" rx="8" fill="none" stroke="#6fa89a" stroke-opacity="0.65"/>
    <text x="18" y="23" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="15" font-weight="800" fill="#e2e8e3">${initial}</text>
</svg>`;

    return toDataUriSvg(svg);
};

const getTechIcon = (techName) => techIconMap[techName] || makeTechFallbackIcon(techName);

const isProfileKey = (value) => Object.prototype.hasOwnProperty.call(profile, value);

const getAnchorAttrs = (channel) => (channel.external ? ' target="_blank" rel="noreferrer"' : '');

const CAROUSEL_PREV_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
const CAROUSEL_NEXT_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';

const buildTechTags = (items) => items.map((tag) => {
    const iconSrc = getTechIcon(tag);
    return `
        <span class="tag tag--icon" aria-label="${tag}" title="${tag}">
            <img src="${iconSrc}" alt="${tag}" loading="lazy" decoding="async" />
        </span>
    `;
}).join('');

const getCurrentPage = () => {
    const path = window.location.pathname;
    const fileName = path.split('/').pop();
    return fileName || 'index.html';
};

const renderSiteNav = () => {
    const navs = document.querySelectorAll('[data-site-nav]');
    if (!navs.length) return;

    const currentPage = getCurrentPage();

    navs.forEach((nav) => {
        nav.innerHTML = siteNavLinks.map((link) => {
            const isCurrent = link.href === currentPage;
            const activeClass = isCurrent ? ' is-active' : '';
            const profileAttr = link.profileHref ? ` data-profile-href="${link.profileHref}"` : '';
            const externalAttrs = link.external ? ' target="_blank" rel="noreferrer"' : '';

            return `<a class="quick-link${activeClass}" href="${link.href}"${profileAttr}${externalAttrs}>${link.label}</a>`;
        }).join('');
    });
};

const getPageHeroVariant = (section) => {
    const explicitVariant = section.dataset.pageHeroVariant;
    if (explicitVariant && pageHeroVariants[explicitVariant]) {
        return pageHeroVariants[explicitVariant];
    }

    if (document.body.classList.contains('projects-page')) return pageHeroVariants.projects;
    if (document.body.classList.contains('works-page')) return pageHeroVariants.works;
    if (document.body.classList.contains('contact-page')) return pageHeroVariants.contact;
    return pageHeroVariants.default;
};

const renderPageHero = () => {
    const sections = document.querySelectorAll('[data-page-hero]');
    if (!sections.length) return;

    sections.forEach((section) => {
        const variant = getPageHeroVariant(section);
        const subtitles = (variant.subtitles || []).map((line) => `<p class="page-subtitle">${line}</p>`).join('');

        section.innerHTML = `
            <h1 class="page-title">${variant.title}</h1>
            ${subtitles}
        `;
    });
};

const getSharedCtaVariant = (section) => {
    const explicitVariant = section.dataset.sharedCtaVariant;
    if (explicitVariant && sharedCtaVariants[explicitVariant]) {
        return sharedCtaVariants[explicitVariant];
    }

    if (document.body.classList.contains('works-page')) return sharedCtaVariants.works;
    return sharedCtaVariants.default;
};

const renderSharedCta = () => {
    const ctaSections = document.querySelectorAll('[data-shared-cta]');
    if (!ctaSections.length) return;

    const primaryAttrs = sharedCtaActions.primaryExternal ? ' target="_blank" rel="noreferrer"' : '';
    const secondaryAttrs = sharedCtaActions.secondaryExternal ? ' target="_blank" rel="noreferrer"' : '';

    ctaSections.forEach((section) => {
        const variant = getSharedCtaVariant(section);

        section.innerHTML = `
            <div>
                <h2>${variant.title}</h2>
                <p class="muted">${variant.description}</p>
            </div>
            <div class="actions">
                <a class="btn btn-primary" href="#" data-profile-href="${sharedCtaActions.primaryHrefKey}"${primaryAttrs}>${sharedCtaActions.primaryLabel}</a>
                <a class="btn btn-ghost" href="#" data-profile-href="${sharedCtaActions.secondaryHrefKey}"${secondaryAttrs}>${sharedCtaActions.secondaryLabel}</a>
            </div>
        `;
    });
};

const renderContactChannels = () => {
    const containers = document.querySelectorAll('[data-contact-channels]');
    if (!containers.length) return;

    containers.forEach((container) => {
        const variant = container.dataset.contactVariant === 'home' ? 'home' : 'contact';
        const channelsForVariant = variant === 'contact'
            ? contactChannels.filter((channel) => channel.contact)
            : contactChannels;

        container.innerHTML = channelsForVariant.map((channel) => {
            const label = channel.contactLabel || channel.homeLabel || channel.label || channel.key;

            if (variant === 'home') {
                return `
                    <div class="info-item" data-channel="${channel.key}">
                        <span class="info-icon" aria-hidden="true">
                            <img src="${channel.homeIcon}" alt="" loading="lazy" decoding="async">
                        </span>
                        <div>
                            <span class="info-label">${label}</span>
                            <a class="info-value info-link" href="#" data-profile-href="${channel.hrefKey}" data-profile-text="${channel.textKey}"${getAnchorAttrs(channel)}>—</a>
                        </div>
                    </div>
                `;
            }

            return `
                <a class="contact-item" href="#" data-profile-href="${channel.hrefKey}"${getAnchorAttrs(channel)}>
                    <span class="contact-ico" aria-hidden="true">
                        <img src="${channel.contactIcon}" alt="" loading="lazy" decoding="async">
                    </span>
                    <span>
                        <span class="contact-k">${label}</span>
                        <span class="contact-v" data-profile-text="${channel.textKey}">—</span>
                    </span>
                </a>
            `;
        }).join('');
    });
};

const applyProfileData = () => {
    const hrefNodes = document.querySelectorAll('[data-profile-href]');
    hrefNodes.forEach((node) => {
        const key = node.dataset.profileHref;
        if (!key || !isProfileKey(key)) return;

        const value = profile[key];
        if (value) node.setAttribute('href', value);
    });

    const textNodes = document.querySelectorAll('[data-profile-text]');
    textNodes.forEach((node) => {
        const key = node.dataset.profileText;
        if (!key || !isProfileKey(key)) return;

        const value = profile[key];
        if (value) node.textContent = value;
    });
};

const buildProjectCardContent = (project) => {
    const imageSrc = project.image || makeProjectPlaceholder(project.title);
    const tags = buildTechTags(project.tech);

    return `
                <div class="project-media">
                    <img src="${imageSrc}" alt="Vista previa de ${project.title}" loading="lazy" />
                </div>
                <div class="project-meta">${project.year}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="stack-label">Stack y librerías</div>
                <div class="tag-row">${tags}</div>
                <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">Ver en GitHub →</a>
        `;
};

const buildWorkCardContent = (work) => {
    const tags = buildTechTags(work.stack);

    return `
        <div class="work-meta">${work.context}</div>
        <h3>${work.title}</h3>
        <div class="work-block">
            <div class="work-k">Problema</div>
            <p>${work.problem}</p>
        </div>
        <div class="work-block">
            <div class="work-k">Solución</div>
            <p>${work.solution}</p>
        </div>
        <div class="work-block">
            <div class="work-k">Resultado</div>
            <p>${work.result}</p>
        </div>
        <div class="work-stack">${tags}</div>
    `;
};

const initCoverflowCarousel = (container) => {
    const cards = Array.from(container.querySelectorAll('.cflow-card'));
    const prevBtn = container.querySelector('[data-carousel="prev"]');
    const nextBtn = container.querySelector('[data-carousel="next"]');
    if (!cards.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const total = cards.length;

    const updateCarousel = () => {
        cards.forEach((card, index) => {
            let diff = index - currentIndex;

            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const absDiff = Math.abs(diff);
            const translateX = diff * 70;
            const translateZ = absDiff * -150;
            const rotateY = diff * -35;
            const opacity = Math.max(1 - absDiff * 0.4, 0);
            const zIndex = 10 - absDiff;

            card.style.opacity = String(opacity);
            card.style.zIndex = String(Math.round(zIndex));
            card.style.transform = `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
            card.classList.toggle('is-active', diff === 0);
        });
    };

    const move = (direction) => {
        currentIndex = (currentIndex + direction + total) % total;
        updateCarousel();
    };

    prevBtn.addEventListener('click', () => move(-1));
    nextBtn.addEventListener('click', () => move(1));

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
};

const renderCarousel = ({
    targetId,
    items,
    itemClassName,
    contentBuilder,
    containerClassName
}) => {
    const container = document.getElementById(targetId);
    if (!container) return;

    if (containerClassName) {
        container.classList.add(containerClassName);
    }

    container.innerHTML = `
        <div class="cflow-stage">
            <button class="carousel-btn" type="button" data-carousel="prev">
                ${CAROUSEL_PREV_ICON}
            </button>
            <div class="cflow-track">
                ${items.map((item, index) => `
                    <article class="${itemClassName} cflow-card" data-index="${index}">
                        ${contentBuilder(item)}
                    </article>
                `).join('')}
            </div>
            <button class="carousel-btn" type="button" data-carousel="next">
                ${CAROUSEL_NEXT_ICON}
            </button>
        </div>
    `;

    initCoverflowCarousel(container);
};

const renderWorksCarousel = (targetId) => {
    renderCarousel({
        targetId,
        items: works,
        itemClassName: 'work-card',
        contentBuilder: buildWorkCardContent,
        containerClassName: 'work-carousel'
    });
};

const renderProjectsCarousel = (targetId) => {
    renderCarousel({
        targetId,
        items: projects,
        itemClassName: 'project-card',
        contentBuilder: buildProjectCardContent
    });
};

window.addEventListener('DOMContentLoaded', () => {
    renderSiteNav();
    renderPageHero();
    renderContactChannels();
    renderSharedCta();
    applyProfileData();
    renderProjectsCarousel('project-grid-full');
    renderWorksCarousel('work-grid');
});