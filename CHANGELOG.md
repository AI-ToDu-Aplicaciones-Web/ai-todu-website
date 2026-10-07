# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-10-06

### Added
- Estructura base del proyecto Landing Page utilizando Vue y Vite.
- Configuración inicial de variables de entorno y exclusiones de entorno local en `.gitignore`.
- Implementación de la barra de navegación y el `Hero Section` aplicando el patrón de lectura en forma de Z.
- Integración de estilos globales y variables CSS básicas.

## [Unreleased]

### Added
- **Bounded Context `ai-assistance`**:
    - Implementación del modelo de dominio: Entidad `AiPromptSession` y Value Object `SuggestedTask` con inmutabilidad estricta.
    - Implementación del `AiAssistantAssembler` para transformar datos crudos en entidades del dominio.
    - Creación del *Application Service* simulado `aiAssistantStore` para la orquestación de la IA.
    - Componente de presentación `AiTaskGenerator.vue` para interactuar con la generación de tareas (US00X).

## [0.0.5] - 2026-10-07

### Added
- Arquitectura general de la SPA en Angular aplicando los principios de Domain-Driven Design (DDD).
- Creación de Bounded Contexts: `iam`, `warehouse-management`, `reporting`, `security-alerts`, `sensor-integration`, `subscription-management` y `company-registration`.
- Directorio de `server/` con la configuración de `db.json` y `routes.json` para proveer un backend simulado mediante `json-server`.
- Configuración de los esquemas de entidades, DTOs y *Assemblers* para aislar la capa de UI de la infraestructura de red.
- Archivos de internacionalización para inglés y español en `public/i18n/`.
- Flujos de trabajo de GitHub Actions (`azure-static-web-apps.yml`) preparados para el despliegue de IC/DC.
- Implementación de la sección "Beneficios" en el Landing Page para comunicar el valor del producto usando componentes de PrimeVue.


## [0.1.0] - 2026-10-07

### Added
- Sección de Beneficios resaltando las características principales.
- Sección de Planes de Suscripción (Pricing) con 3 niveles: Básico, Pro y Equipos.
- Consolidación del Landing Page público de Al ToDu.

## [0.2.0] - 2026-10-07

### Added
- Bounded Context `iam`: Implementación de la gestión de identidad y accesos.
- Entidad de dominio `User` y Value Object `UserId`.
- Capa de infraestructura con `iam-api.js` y `user.assembler.js` para comunicación con el backend.
- Store de aplicación (`iam_store.js`) para el manejo reactivo del estado de autenticación.
- Componentes de presentación de Vue (`LoginForm.vue`, `RegisterForm.vue`) y vistas (`SignInView.vue`, `SignUpView.vue`).


