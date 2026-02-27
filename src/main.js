// ==========================================
// 1. Translations (i18n)
// ==========================================
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_services: "Services",
        nav_about: "À propos",
        nav_contact: "Contact",
        service_video: "Vidéographie",
        service_photo: "Photographie",
        service_reels: "Montage & Reels",
        service_web: "Création Web",
        hero_title: `Production Vidéo &<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">Création Digitale</span><br>à Casablanca`,
        hero_btn_portfolio: "Voir nos réalisations",
        hero_btn_contact: "Nous contacter",
        services_subtitle: "Nos Expertises",
        services_title: "Solutions Digitales 360°",
        service_video_desc: "Production cinématographique, corporate et évènementielle.",
        service_photo_desc: "Portraits, produits, architecture et couverture d\'événements.",
        service_reels_desc: "Formats courts percutants pour les réseaux sociaux (TikTok, IG).",
        service_web_desc: "Design UI/UX premium et développement sur-mesure ultra rapide.",
        view_portfolio: "Voir le portfolio",
        why_title: "Pourquoi Revo Production ?",
        why_quality: "Qualité Cinématique",
        why_quality_desc: "Un rendu visuel premium pour toutes vos productions, utilisant des équipements professionnels.",
        why_speed: "Rapidité d'Exécution",
        why_speed_desc: "Des délais respectés et une communication fluide pour vos projets urgents.",
        why_team: "Équipe Experte",
        why_team_desc: "Des créatifs passionnés et spécialisés dans leur domaine d'expertise.",
        footer_desc: "Votre partenaire de confiance pour la création digitale premium à Casablanca et au Maroc.",
        footer_nav: "Navigation",
        footer_services: "Services",
        about_title: "Notre Agence",
        about_subtitle: "L'excellence visuelle au service de votre marque",
        about_text1: "Revo Production est née d'une passion commune pour l'image et l'innovation digitale. Basée à Casablanca, notre agence accompagne les entreprises, marques et créateurs dans la réalisation de leurs projets audiovisuels les plus ambitieux.",
        about_text2: "Nous ne créons pas de simples vidéos ou sites web ; nous concevons des expériences visuelles premium qui captivent votre audience et renforcent votre image de marque.",
        team_title: "L'Équipe Fondatrice",
        contact_title: "Discutons de votre projet",
        contact_subtitle: "Nous sommes prêts à donner vie à vos idées.",
        contact_name: "Nom complet",
        contact_email: "Email",
        contact_msg: "Votre message",
        contact_send: "Envoyer le message"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_contact: "Contact",
        service_video: "Videography",
        service_photo: "Photography",
        service_reels: "Editing & Reels",
        service_web: "Web Design",
        hero_title: `Video Production &<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">Digital Creation</span><br>in Casablanca`,
        hero_btn_portfolio: "View Our Work",
        hero_btn_contact: "Contact Us",
        services_subtitle: "Our Expertise",
        services_title: "360° Digital Solutions",
        service_video_desc: "Cinematic, corporate, and event video production.",
        service_photo_desc: "Portraits, products, architecture, and event coverage.",
        service_reels_desc: "High-impact short formats for social media (TikTok, IG).",
        service_web_desc: "Premium UI/UX design and ultra-fast custom development.",
        view_portfolio: "View Portfolio",
        why_title: "Why Choose Revo Production?",
        why_quality: "Cinematic Quality",
        why_quality_desc: "A premium visual output for all your productions, using professional equipment.",
        why_speed: "Fast Execution",
        why_speed_desc: "Respected deadlines and smooth communication for your urgent projects.",
        why_team: "Expert Team",
        why_team_desc: "Passionate creatives specialized in their respective fields.",
        footer_desc: "Your trusted partner for premium digital creation in Casablanca and Morocco.",
        footer_nav: "Navigation",
        footer_services: "Services",
        about_title: "Our Agency",
        about_subtitle: "Visual excellence serving your brand",
        about_text1: "Revo Production was born from a shared passion for imagery and digital innovation. Based in Casablanca, our agency supports companies, brands, and creators in realizing their most ambitious audiovisual projects.",
        about_text2: "We don't just create videos or websites; we design premium visual experiences that captivate your audience and strengthen your brand image.",
        team_title: "The Founding Team",
        contact_title: "Let's discuss your project",
        contact_subtitle: "We are ready to bring your ideas to life.",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_msg: "Your Message",
        contact_send: "Send Message"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        service_video: "تصوير الفيديو",
        service_photo: "التصوير الفوتوغرافي",
        service_reels: "المونتاج و الريلز",
        service_web: "تصميم المواقع",
        hero_title: `الإنتاج السينمائي و<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">الإبداع الرقمي</span><br>في الدار البيضاء`,
        hero_btn_portfolio: "شاهد أعمالنا",
        hero_btn_contact: "تواصل معنا",
        services_subtitle: "خبراتنا",
        services_title: "حلول رقمية شاملة",
        service_video_desc: "إنتاج سينمائي، للشركات، وتغطية الفعاليات.",
        service_photo_desc: "صور شخصية، منتجات، هندسة معمارية، وتغطية الأحداث.",
        service_reels_desc: "مقاطع قصيرة مؤثرة لوسائل التواصل الاجتماعي.",
        service_web_desc: "تصميم واجهة المستخدم وتطوير مواقع احترافية وسريعة.",
        view_portfolio: "عرض الملف",
        why_title: "لماذا تختار ريفو برودكشن؟",
        why_quality: "جودة سينمائية",
        why_quality_desc: "إنتاج بصري احترافي باستخدام أحدث المعدات.",
        why_speed: "سرعة التنفيذ",
        why_speed_desc: "احترام المواعيد وتواصل سلس لضمان نجاح مشاريعك.",
        why_team: "فريق خبير",
        why_team_desc: "مبدعون شغوفون ومتخصصون في مجالاتهم.",
        footer_desc: "شريكك الموثوق للإبداع الرقمي الاحترافي في الدار البيضاء والمغرب.",
        footer_nav: "روابط سريعة",
        footer_services: "الخدمات",
        about_title: "وكالتنا",
        about_subtitle: "التميز البصري في خدمة علامتك التجارية",
        about_text1: "ولدت ريفو برودكشن من شغف مشترك بالصورة والابتكار الرقمي. انطلاقاً من الدار البيضاء، ترافق وكالتنا الشركات والعلامات التجارية والمبدعين في تحقيق مشاريعهم السمعية والبصرية الأكثر طموحاً.",
        about_text2: "نحن لا نكتفي بإنتاج فيديوهات أو مواقع إلكترونية عادية؛ بل نصمم تجارب بصرية احترافية تأسر جمهورك وتعزز صورتك.",
        team_title: "الفريق المؤسس",
        contact_title: "لنتحدث عن مشروعك",
        contact_subtitle: "نحن مستعدون لتحويل أفكارك إلى واقع.",
        contact_name: "الاسم الكامل",
        contact_email: "البريد الإلكتروني",
        contact_msg: "رسالتك",
        contact_send: "إرسال الرسالة"
    }
};

// ==========================================
// 2. Language Switcher Logic
// ==========================================
let currentLang = localStorage.getItem('revo_lang') || 'fr';

window.changeLanguage = function (lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('revo_lang', lang);

    // Update active state in UI
    ['fr', 'en', 'ar'].forEach(l => {
        const el = document.getElementById(`lang-${l}`);
        if (el) {
            if (l === lang) {
                el.classList.remove('text-white/50');
                el.classList.add('text-gold');
            } else {
                el.classList.add('text-white/50');
                el.classList.remove('text-gold');
            }
        }
    });

    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        // Add font adjustment for Arabic if needed
        document.body.style.fontFamily = "'Amiri', 'Inter', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.body.style.fontFamily = ""; // reset to CSS default
    }

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if it contains HTML (like the hero title)
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
};

// ==========================================
// 3. UI Interactions & Animations
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Language
    changeLanguage(currentLang);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10');
                navbar.classList.remove('bg-transparent', 'py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-black/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10');
                navbar.classList.add('bg-transparent', 'py-4');
                navbar.classList.remove('py-2');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isClosed = mobileMenu.classList.contains('opacity-0');
            if (isClosed) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                // Change icon to X
                mobileBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                // Change icon to hamburger
                mobileBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
            }
        });
    }

    // Intersection Observer for scroll animations (fade-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
});
