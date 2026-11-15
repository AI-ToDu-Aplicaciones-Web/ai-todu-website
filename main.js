/**
 * @summary Main script for AI-ToDu Landing Page (Vite + Static compatible).
 * Connects all CTAs to the Azure Web App deployment and implements US01-US26 interactive explorer.
 */
import './style.css';

const WEB_APP_BASE_URL = 'https://ai-todu-frfmege2a3ephedb.westus-01.azurewebsites.net';

const i18nDictionary = {
    en_US: {
        'nav.purpose': 'Platform',
        'nav.modules': 'Modules (US01-US26)',
        'nav.segments': 'Solutions',
        'nav.pricing': 'Pricing',
        'nav.videos': 'Videos',
        'nav.contact': 'Contact',
        'nav.login': 'Log In',
        'nav.trial': 'Start Free Trial',
        'hero.badge': 'B2B SaaS Logistics & ERP',
        'hero.title': 'The Central Nervous System for your MSE Supply Chain',
        'hero.pitch': 'Stop losing money to unaccounted shrinkage, stockouts, and disconnected spreadsheets. AI-ToDu unifies your warehouse inventory, procurement, and commercial sales in one intuitive cloud platform deployed on Microsoft Azure.',
        'hero.ctaPrimary': 'Explore Subscription Plans',
        'hero.ctaSecondary': 'Launch Azure Web App',
        'hero.metric1': 'Weekly inventory check time',
        'hero.metric2': 'Stock traceability by SKU & Lot',
        'hero.metric3': 'To record inbound/outbound stock',
        'mockup.kpi1': 'Net Profitability',
        'mockup.kpi2': 'Active SKUs',
        'mockup.kpi3': 'Low Stock Alerts',
        'mockup.colItem': 'Inventory Item',
        'mockup.colStatus': 'Status',
        'purpose.title': 'Designed for Operational Excellence',
        'purpose.subtitle': 'Built on a modular Domain-Driven Architecture that connects every area of your business in real time.',
        'purpose.f1Title': 'Identity, Roles & Auditing (US05-US10)',
        'purpose.f1Desc': 'Secure authentication, role-based module permissions, password recovery, and complete action auditing per user.',
        'purpose.f2Title': 'Warehouse & Stock Control (US02, US11-US19)',
        'purpose.f2Desc': 'Track Inventory Items by SKU, shelf location, lots, expiration dates, physical counts, barcode scan, and Quarantine states.',
        'purpose.f3Title': 'Procurement & Suppliers (US20-US24)',
        'purpose.f3Desc': 'Register suppliers, generate Purchase Orders, manage owner approvals, and inspect incoming merchandise before stock entry.',
        'purpose.f4Title': 'Sales Cart & Transactions (US03, US25-US26)',
        'purpose.f4Desc': 'Manage customers, build commercial sales carts with real-time stock validation, and prevent overselling out-of-stock items.',
        'modules.title': 'Interactive Module Explorer (US01 – US26)',
        'modules.subtitle': 'Explore how AI-ToDu fulfills every business requirement across our core Bounded Contexts.',
        'modules.tabIam': '1. IAM & Security (US05–US10)',
        'modules.tabWarehouse': '2. Warehouse & Stock (US02, US11–US19)',
        'modules.tabProcurement': '3. Procurement (US20–US24)',
        'modules.tabSales': '4. Sales & Cart (US03, US25–US26)',
        'segments.title': 'Tailored Experiences for Every Role',
        'segments.subtitle': 'Consistent navigation from our Landing Page directly to the specialized view your role requires in our Azure Web App.',
        'segments.s1Tag': 'Segment 1 • Decision Makers',
        'segments.s1Title': 'For Business Owners & Managers',
        'segments.s1Desc': 'Eliminate end-of-month anxiety and blind spots. Approve Purchase Orders (US22), configure roles and permissions (US05, US09), audit user operations (US10), and oversee commercial sales (US03).',
        'segments.s1Item1': '✔ Role-based access control & action auditing (US05, US09, US10)',
        'segments.s1Item2': '✔ Purchase Order approval workflow (US21, US22)',
        'segments.s1Item3': '✔ Real-time stock & sales synchronization (US03, US26)',
        'segments.s1Cta': 'Go to Manager Dashboard in Azure →',
        'segments.s2Tag': 'Segment 2 • Operational Staff',
        'segments.s2Title': 'For Warehouse Managers & Operators',
        'segments.s2Desc': 'Say goodbye to paper notebooks and unpaid overtime counting boxes. Register merchandise entries (US02), update stock (US11), scan barcodes (US19), and inspect incoming orders (US23, US24) in seconds.',
        'segments.s2Item1': '✔ Fast SKU & barcode inbound/outbound registration (US02, US11, US19)',
        'segments.s2Item2': '✔ Shelf location, Lot/Expiry & Quarantine control (US13, US14, US15, US16)',
        'segments.s2Item3': '✔ Physical inventory counts & Goods Receipt inspection (US17, US18, US23, US24)',
        'segments.s2Cta': 'Go to Warehouse Module in Azure →',
        'pricing.title': 'Transparent SaaS Subscription Plans (US01)',
        'pricing.subtitle': 'Choose the plan that fits your MSE operational volume. Inspect features or start your registration immediately.',
        'pricing.p1Name': 'MYPE Starter',
        'pricing.p1Desc': 'Ideal for single-location restaurants and small retail stores.',
        'pricing.p1F1': '✔ Up to 500 SKUs & 1 Warehouse (US02, US11, US12)',
        'pricing.p1F2': '✔ 3 User Accounts with Secure Login (US06, US07)',
        'pricing.p1F3': '✔ Customers & Sales Cart Module (US03, US25, US26)',
        'pricing.popular': 'Most Popular',
        'pricing.p2Name': 'Business Growth',
        'pricing.p2Desc': 'For growing food distributors and textile workshops.',
        'pricing.p2F1': '✔ Unlimited SKUs, Lots, Expiry & Quarantine (US13-US19)',
        'pricing.p2F2': '✔ 10 Users with Custom Roles & Audit Log (US05, US09, US10)',
        'pricing.p2F3': '✔ Suppliers, Purchase Orders & Goods Receipt (US20-US24)',
        'pricing.p3Name': 'Enterprise AI & IoT',
        'pricing.p3Desc': 'Full supply chain automation, REST API access, and multi-warehouse scale.',
        'pricing.p3F1': '✔ Unlimited Warehouses, Users & Priority Support',
        'pricing.p3F2': '✔ Direct RESTful API Stock Query Access (US04)',
        'pricing.p3F3': '✔ Advanced Multi-Branch Inventory Adjustments (US17, US18)',
        'pricing.viewDetails': 'View Included Features',
        'pricing.selectPlan': 'Select Plan & Register',
        'videos.title': 'Discover Our Product & Engineering Team',
        'videos.subtitle': 'Watch how AI-ToDu transforms daily operations and meet the IA-INNOVATION team behind the architecture.',
        'videos.productTitle': 'About the Product',
        'videos.productDesc': 'Promotional tour of AI-ToDu features, user flows, and validation testimonials.',
        'videos.teamTitle': 'About the Team (IA-INNOVATION)',
        'videos.teamDesc': 'Our collaborative software engineering process, ABET Student Outcome 5 reflections, and team members.',
        'contact.title': 'Ready to Modernize Your MSE?',
        'contact.subtitle': 'Request a personalized B2B consultation or reach out to our engineering support team in Lima, Peru.',
        'contact.labelCompany': 'Company / MSE Name',
        'contact.labelEmail': 'Business Email',
        'contact.labelRole': 'Your Role',
        'contact.roleOwner': 'Business Owner / Manager',
        'contact.roleOperator': 'Warehouse / Logistics Operator',
        'contact.submit': 'Request Live Demo',
        'footer.mission': 'Developed by IA-INNOVATION. Democratizing B2B supply chain technology for Latin American Micro and Small Enterprises.',
        'footer.navTitle': 'Platform',
        'footer.socialTitle': 'Social Media',
        'footer.legalTitle': 'Ethics & Legal',
        'footer.terms': 'Terms & Conditions of Service (ACM/IEEE & CIP)',
        'terms.title': 'Terms & Conditions of Service & Software Engineering Ethics',
        'terms.p1': '1. Public Interest & MSE Protection (ACM/IEEE Principle 1): IA-INNOVATION guarantees the integrity, confidentiality, and availability of commercial, inventory, and financial records entrusted to AI-ToDu by Micro and Small Enterprises.',
        'terms.p2': '2. Quality & Professional Responsibility (CIP Code of Ethics): All domain rules, stock calculations, and electronic billing integrations follow rigorous software engineering standards, Domain-Driven Design invariants, and Peruvian regulatory compliance (SUNAT & Ley N° 29733).',
        'terms.p3': '3. Transparency & Auditability: Every inventory adjustment, quarantine action, and commercial transaction is logged with full user traceability to prevent fraud and ensure fair operations.',
        'terms.close': 'Understood'
    },
    es_419: {
        'nav.purpose': 'Plataforma',
        'nav.modules': 'Módulos (US01-US26)',
        'nav.segments': 'Soluciones',
        'nav.pricing': 'Planes',
        'nav.videos': 'Videos',
        'nav.contact': 'Contacto',
        'nav.login': 'Iniciar Sesión',
        'nav.trial': 'Prueba Gratis',
        'hero.badge': 'SaaS B2B de Logística y ERP',
        'hero.title': 'El Sistema Nervioso Central para la Cadena de Suministro de tu MYPE',
        'hero.pitch': 'Deja de perder dinero por mermas no registradas, quiebres de stock y hojas de Excel desconectadas. AI-ToDu unifica tu almacén, abastecimiento y ventas comerciales en una plataforma intuitiva desplegada en Microsoft Azure.',
        'hero.ctaPrimary': 'Ver Planes de Suscripción',
        'hero.ctaSecondary': 'Abrir Web App en Azure',
        'hero.metric1': 'Tiempo semanal de cuadre de inventario',
        'hero.metric2': 'Trazabilidad por SKU y Lote',
        'hero.metric3': 'Para registrar entradas y salidas',
        'mockup.kpi1': 'Rentabilidad Neta',
        'mockup.kpi2': 'SKUs Activos',
        'mockup.kpi3': 'Alertas de Stock Mínimo',
        'mockup.colItem': 'Artículo de Inventario',
        'mockup.colStatus': 'Estado',
        'purpose.title': 'Diseñado para la Excelencia Operativa',
        'purpose.subtitle': 'Construido sobre una arquitectura modular Domain-Driven Design que conecta cada área de tu negocio en tiempo real.',
        'purpose.f1Title': 'Identidad, Roles y Auditoría (US05-US10)',
        'purpose.f1Desc': 'Autenticación segura, permisos por módulo según rol, recuperación de acceso y auditoría completa de acciones.',
        'purpose.f2Title': 'Control de Almacén y Stock (US02, US11-US19)',
        'purpose.f2Desc': 'Rastrea artículos por SKU, ubicación física, lotes, vencimientos, conteo físico, lector de barras y Cuarentena.',
        'purpose.f3Title': 'Compras y Proveedores (US20-US24)',
        'purpose.f3Desc': 'Registra proveedores, genera Órdenes de Compra, gestiona aprobaciones e inspecciona mercadería recibida.',
        'purpose.f4Title': 'Carrito de Ventas y Clientes (US03, US25-US26)',
        'purpose.f4Desc': 'Gestiona clientes, prepara el carrito de ventas con validación de stock en tiempo real e impide ventas sin stock.',
        'modules.title': 'Explorador Interactivo de Módulos (US01 – US26)',
        'modules.subtitle': 'Explora cómo AI-ToDu cumple cada historia de usuario en nuestros Bounded Contexts principales.',
        'modules.tabIam': '1. Identidad y Seguridad (US05–US10)',
        'modules.tabWarehouse': '2. Almacén e Inventario (US02, US11–US19)',
        'modules.tabProcurement': '3. Abastecimiento y Compras (US20–US24)',
        'modules.tabSales': '4. Ventas y Carrito (US03, US25–US26)',
        'segments.title': 'Experiencias Diseñadas para cada Rol',
        'segments.subtitle': 'Navegación consistente desde nuestra Landing Page directamente hacia la vista especializada en Azure.',
        'segments.s1Tag': 'Segmento 1 • Tomadores de Decisión',
        'segments.s1Title': 'Para Dueños y Administradores de MYPE',
        'segments.s1Desc': 'Elimina el estrés de fin de mes. Aprueba Órdenes de Compra (US22), configura roles y permisos (US05, US09), audita acciones (US10) y supervisa las transacciones comerciales (US03).',
        'segments.s1Item1': '✔ Control de acceso por roles y auditoría (US05, US09, US10)',
        'segments.s1Item2': '✔ Flujo de aprobación de Órdenes de Compra (US21, US22)',
        'segments.s1Item3': '✔ Sincronización de stock y ventas en tiempo real (US03, US26)',
        'segments.s1Cta': 'Ir al Dashboard Gerencial en Azure →',
        'segments.s2Tag': 'Segmento 2 • Personal Operativo',
        'segments.s2Title': 'Para Jefes de Logística y Almaceneros',
        'segments.s2Desc': 'Despídete de los cuadernos de papel y las horas extra contando cajas. Registra mercadería (US02), actualiza stock (US11), escanea códigos de barras (US19) e inspecciona recepciones (US23, US24).',
        'segments.s2Item1': '✔ Registro ágil de entradas/salidas por SKU y código de barras (US02, US11, US19)',
        'segments.s2Item2': '✔ Ubicación en estantes, Lotes/Vencimiento y Cuarentena (US13, US14, US15, US16)',
        'segments.s2Item3': '✔ Conteo físico e inspección de recepción de mercadería (US17, US18, US23, US24)',
        'segments.s2Cta': 'Ir al Módulo de Almacén en Azure →',
        'pricing.title': 'Planes de Suscripción SaaS Transparentes (US01)',
        'pricing.subtitle': 'Elige el plan que mejor se adapte al volumen operativo de tu MYPE. Consulta el detalle o inicia tu registro.',
        'pricing.p1Name': 'MYPE Inicial',
        'pricing.p1Desc': 'Ideal para restaurantes de un local y comercios minoristas.',
        'pricing.p1F1': '✔ Hasta 500 SKUs y 1 Almacén (US02, US11, US12)',
        'pricing.p1F2': '✔ 3 Usuarios con Inicio de Sesión Seguro (US06, US07)',
        'pricing.p1F3': '✔ Módulo de Clientes y Carrito de Ventas (US03, US25, US26)',
        'pricing.popular': 'Más Popular',
        'pricing.p2Name': 'Crecimiento MYPE',
        'pricing.p2Desc': 'Para distribuidoras de alimentos y talleres textiles en expansión.',
        'pricing.p2F1': '✔ SKUs Ilimitados, Lotes, Perecibles y Cuarentena (US13-US19)',
        'pricing.p2F2': '✔ 10 Usuarios con Roles y Auditoría de Acciones (US05, US09, US10)',
        'pricing.p2F3': '✔ Proveedores, Órdenes de Compra y Recepción (US20-US24)',
        'pricing.p3Name': 'Corporativo IA & IoT',
        'pricing.p3Desc': 'Automatización total, acceso a API REST de stock y escala multisede.',
        'pricing.p3F1': '✔ Almacenes y Usuarios Ilimitados + Soporte Prioritario',
        'pricing.p3F2': '✔ Consulta directa de Stock mediante API RESTful (US04)',
        'pricing.p3F3': '✔ Ajustes e Inventario Físico Multisede (US17, US18)',
        'pricing.viewDetails': 'Ver Funcionalidades Incluidas',
        'pricing.selectPlan': 'Seleccionar Plan y Registrarse',
        'videos.title': 'Conoce Nuestro Producto y Equipo de Ingeniería',
        'videos.subtitle': 'Mira cómo AI-ToDu transforma las operaciones diarias y conoce al equipo IA-INNOVATION.',
        'videos.productTitle': 'Video About-the-Product',
        'videos.productDesc': 'Recorrido promocional por las funcionalidades de AI-ToDu y testimonios de validación.',
        'videos.teamTitle': 'Video About-the-Team (IA-INNOVATION)',
        'videos.teamDesc': 'Nuestro proceso colaborativo de ingeniería de software, logro del ABET Outcome 5 e integrantes.',
        'contact.title': '¿Listo para Digitalizar tu MYPE?',
        'contact.subtitle': 'Solicita una asesoría B2B personalizada o comunícate con nuestro equipo de soporte en Lima, Perú.',
        'contact.labelCompany': 'Nombre de la Empresa / MYPE',
        'contact.labelEmail': 'Correo Corporativo',
        'contact.labelRole': 'Tu Rol en el Negocio',
        'contact.roleOwner': 'Dueño / Administrador de Negocio',
        'contact.roleOperator': 'Jefe de Logística / Operario de Almacén',
        'contact.submit': 'Solicitar Demostración en Vivo',
        'footer.mission': 'Desarrollado por IA-INNOVATION. Democratizando la tecnología logística B2B para las MYPES latinoamericanas.',
        'footer.navTitle': 'Plataforma',
        'footer.socialTitle': 'Redes Sociales',
        'footer.legalTitle': 'Ética y Legal',
        'footer.terms': 'Términos y Condiciones de Servicio (ACM/IEEE y CIP)',
        'terms.title': 'Términos y Condiciones de Servicio y Ética de Ingeniería de Software',
        'terms.p1': '1. Interés Público y Protección a la MYPE (Principio 1 ACM/IEEE): IA-INNOVATION garantiza la integridad, confidencialidad y disponibilidad de los registros comerciales, logísticos y financieros confiados a AI-ToDu.',
        'terms.p2': '2. Calidad y Responsabilidad Profesional (Código de Ética CIP): Todas las reglas de dominio, cálculos de inventario y facturación electrónica cumplen con estándares rigurosos de ingeniería de software, Domain-Driven Design y normativa peruana (SUNAT y Ley N° 29733).',
        'terms.p3': '3. Transparencia y Auditoría: Cada ajuste de inventario, pase a cuarentena y transacción comercial se registra con trazabilidad completa del usuario responsable.',
        'terms.close': 'Entendido'
    }
};

const modulesCatalog = {
    iam: [
        { code: 'US05 & US09', title: 'Role & Module Permission Configuration', desc: 'Assign custom roles (Owner, Warehouse Operator, Sales Clerk) and grant/revoke access per module.' },
        { code: 'US06 & US07', title: 'User Registration & Secure Sign-In', desc: 'Register organization personnel with duplicate-email validation and JWT session protection.' },
        { code: 'US08', title: 'Account Access Recovery', desc: 'Secure credential reset workflow for registered corporate emails.' },
        { code: 'US10', title: 'User Action Auditing', desc: 'Full historical log recording who executed each operation and when, filterable by date and user.' }
    ],
    warehouse: [
        { code: 'US02, US04 & US11', title: 'Inventory Item Registration & Stock API', desc: 'Create items with unique SKU validation, inbound/outbound stock updates, and RESTful GET stock queries.' },
        { code: 'US12, US13 & US19', title: 'Fast Search, Shelf Location & Barcode Scan', desc: 'Instant search by SKU/name, physical shelf mapping, and barcode reader identification.' },
        { code: 'US14, US15 & US16', title: 'Lot Tracking, Perishable Expiry & Quarantine', desc: 'Track batch lots, alert on upcoming expiration dates, and lock damaged stock in Quarantine.' },
        { code: 'US17 & US18', title: 'Physical Inventory Count & Adjustments', desc: 'Execute physical stock counts, detect variances, and record justified positive/negative adjustments.' }
    ],
    procurement: [
        { code: 'US20', title: 'Supplier Directory Management', desc: 'Register, update, and search B2B suppliers for streamlined restocking.' },
        { code: 'US21 & US22', title: 'Purchase Orders & Owner Approval', desc: 'Create Purchase Orders with valid quantities and require Business Owner approval before execution.' },
        { code: 'US23 & US24', title: 'Merchandise Reception & Quality Inspection', desc: 'Record complete or partial Goods Receipts, inspect condition, and route damaged items to Quarantine.' }
    ],
    sales: [
        { code: 'US03', title: 'Commercial Transaction Creation', desc: 'Generate sales transactions that automatically reserve and deduct available warehouse stock.' },
        { code: 'US25', title: 'Customer Management', desc: 'Register and search clients with unique tax/identity validation for commercial transactions.' },
        { code: 'US26', title: 'Interactive Sales Cart', desc: 'Add available items to the cart, dynamically recalculate subtotals, and block Stock-Out or Quarantine items.' }
    ]
};

const planSpecifications = {
    starter: {
        en_US: {
            title: 'MYPE Starter Plan ($19/mo) — Detailed Specification (US01)',
            details: 'Includes: Core Inventory Registration & Stock Updates (US02, US11, US12), Physical Shelf Locations (US13), User Registration & Login (US06, US07), Customer Management (US25), and Sales Cart Transactions (US03, US26). Up to 500 SKUs and 3 active users.'
        },
        es_419: {
            title: 'Plan MYPE Inicial ($19/mes) — Especificación Detallada (US01)',
            details: 'Incluye: Registro y Actualización de Inventario (US02, US11, US12), Ubicación Física en Estantes (US13), Registro e Inicio de Sesión (US06, US07), Gestión de Clientes (US25) y Carrito de Ventas (US03, US26). Hasta 500 SKUs y 3 usuarios activos.'
        }
    },
    growth: {
        en_US: {
            title: 'Business Growth Plan ($49/mo) — Detailed Specification (US01)',
            details: 'Includes everything in Starter plus: Role & Permission Management (US05, US09), Action Auditing (US10), Lot & Perishable Expiration Control (US14, US15), Quarantine Management (US16), Physical Counts & Adjustments (US17, US18), Barcode Scanning (US19), and Full Procurement Workflow (US20-US24).'
        },
        es_419: {
            title: 'Plan Crecimiento MYPE ($49/mes) — Especificación Detallada (US01)',
            details: 'Incluye todo lo del Plan Inicial más: Roles y Permisos (US05, US09), Auditoría de Acciones (US10), Control de Lotes y Perecibles (US14, US15), Cuarentena (US16), Conteo Físico y Ajustes (US17, US18), Código de Barras (US19) y Flujo Completo de Compras (US20-US24).'
        }
    },
    enterprise: {
        en_US: {
            title: 'Enterprise AI & IoT Plan ($99/mo) — Detailed Specification (US01)',
            details: 'Includes everything in Business Growth plus: Direct RESTful API Stock Endpoint Access (US04), Unlimited Multi-Warehouse Management, Priority 24/7 Engineering Support, and Azure Cloud High-Availability.'
        },
        es_419: {
            title: 'Plan Corporativo IA & IoT ($99/mes) — Especificación Detallada (US01)',
            details: 'Incluye todo lo del Plan Crecimiento más: Acceso directo al Endpoint RESTful de Consulta de Stock (US04), Almacenes y Usuarios Ilimitados, Soporte de Ingeniería 24/7 y Alta Disponibilidad en Microsoft Azure.'
        }
    }
};

let currentLang = 'en_US';
let currentTab = 'iam';

function renderModuleTab(tabKey) {
    currentTab = tabKey;
    const container = document.getElementById('tab-content');
    if (!container) return;

    const items = modulesCatalog[tabKey] || [];
    container.innerHTML = `
    <div class="us-grid">
      ${items.map(item => `
        <div class="us-item">
          <strong>${item.code} — ${item.title}</strong>
          <p>${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'en_US' ? 'en' : 'es';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (i18nDictionary[lang] && i18nDictionary[lang][key]) {
            el.textContent = i18nDictionary[lang][key];
        }
    });

    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if (btnEn && btnEs) {
        btnEn.classList.toggle('active', lang === 'en_US');
        btnEs.classList.toggle('active', lang === 'es_419');
        btnEn.setAttribute('aria-pressed', String(lang === 'en_US'));
        btnEs.setAttribute('aria-pressed', String(lang === 'es_419'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en_US');
    renderModuleTab('iam');

    document.getElementById('btn-en')?.addEventListener('click', () => setLanguage('en_US'));
    document.getElementById('btn-es')?.addEventListener('click', () => setLanguage('es_419'));

    // Tabs interactivos (US01-US26)
    document.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            renderModuleTab(btn.getAttribute('data-tab'));
        });
    });

    // Vincular todos los enlaces CTA a la URL desplegada en Azure
    document.querySelectorAll('.cta-link').forEach((link) => {
        const route = link.getAttribute('data-route');
        link.href = route ? `${WEB_APP_BASE_URL}/${route}` : WEB_APP_BASE_URL;
    });

    // Menú móvil responsivo
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    mobileToggle?.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Modal de Detalles de Plan (US01 Escenarios 2 y 3)
    const planModal = document.getElementById('plan-modal');
    const planModalTitle = document.getElementById('plan-modal-title');
    const planModalBody = document.getElementById('plan-modal-body');
    const planModalCta = document.getElementById('plan-modal-cta');

    document.querySelectorAll('.plan-detail-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const planKey = btn.getAttribute('data-plan');
            const spec = planSpecifications[planKey][currentLang];
            planModalTitle.textContent = spec.title;
            planModalBody.innerHTML = `<p>${spec.details}</p>`;
            planModalCta.href = `${WEB_APP_BASE_URL}/sign-up?plan=${planKey}`;
            planModal.hidden = false;
        });
    });

    document.getElementById('close-plan-modal')?.addEventListener('click', () => {
        planModal.hidden = true;
    });

    // Modal de Términos y Condiciones (Ética ACM/IEEE y CIP)
    const termsModal = document.getElementById('terms-modal');
    document.getElementById('open-terms-btn')?.addEventListener('click', () => {
        termsModal.hidden = false;
    });
    document.getElementById('close-terms-modal')?.addEventListener('click', () => {
        termsModal.hidden = true;
    });
    document.getElementById('accept-terms-btn')?.addEventListener('click', () => {
        termsModal.hidden = true;
    });

    // Formulario de Contacto interactivo
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('contact-feedback');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        feedback.hidden = false;
        feedback.textContent = currentLang === 'en_US'
            ? '✔ Thank you! Redirecting you to the AI-ToDu Azure Platform...'
            : '✔ ¡Gracias! Redirigiéndote a la plataforma AI-ToDu en Azure...';
        contactForm.reset();
    });
});
