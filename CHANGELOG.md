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

## [0.3.0] - 2026-10-07

### Added
- Bounded Context `profiles`: Integración de la gestión de perfiles de usuario.
- Entidad `Profile` y Value Object `ProfileId`.
- Capa de infraestructura con `profile-api.js` y `profile.assembler.js` para persistencia e instanciación de datos.
- `profileStore.js` para manejar el estado del perfil en la aplicación.
- Componentes visuales `ProfileCard.vue` y `ProfileForm.vue` construidos con PrimeVue.

## [0.4.0] - 2026-10-07

### Added
- Bounded Context `shared`: Implementación del núcleo compartido (Shared Kernel) para código transversal a toda la aplicación.
- Objetos de valor `DateTime` y validadores estáticos en `StringValidator` dentro de la capa de dominio.
- Configuración centralizada de Axios en `http-common.js` con un `errorInterceptor` para normalizar respuestas fallidas en la capa de infraestructura.

## [0.5.0] - 2026-10-07

### Added
- Bounded Context `task-management`: Funcionalidad principal (Core Domain) para la gestión de tareas de la aplicación.
- Entidad `Task` y Value Object `TaskId` para la integridad de los datos en memoria.
- `task-api.js` conectado al interceptor global y `task.assembler.js` para mapear los recursos HTTP a entidades de dominio.
- `taskStore.js` para orquestar la reactividad y las mutaciones de estado de las tareas.
- Componentes de presentación `TaskForm.vue` para la creación y `TaskList.vue` basado en DataTable para la visualización y actualización de tareas.

## [0.5.1] - 2026-10-07

### Fixed
- Corrección de codificación de caracteres en `index.html` agregando `<meta charset="utf-8">`.
- Solución de renderizado de la interfaz mediante la importación global de PrimeVue, PrimeFlex y PrimeIcons en `main.js`.

## [0.5.2] - 2026-10-07

### Fixed
- Migración del maquetado HTML desde `index.html` hacia el componente principal `src/LandingView.vue` para solucionar el error de sobrescritura de renderizado (pantalla en blanco) provocado por el montaje del framework.

## [0.6.0] - 2026-10-07

### Added
- Integración de `vue-router` para la navegación entre el Landing Page y el Bounded Context de IAM (Login/Registro).
- Configuración de `vue-i18n` soportando los idiomas `en_US` y `es_419` cumpliendo con los criterios de internacionalización.

## [0.7.0] - 2026-10-07

### Added
- Integración de diccionarios JSON de traducción (`en.json` y `es.json`) centralizando el contenido estático.
- Componente `LanguageSwitcher` implementado con `<pv-select-button>` para cambiar el idioma globalmente.

## [1.0.0] - 2026-10-07

### Added
- Versión de producción estable (`v1.0.0`) de la plataforma **Al ToDu**.
- Integración completa del módulo de autenticación (IAM) conectado al servidor local con persistencia en `db.json`.
- Selector dinámico de idiomas con soporte para `en_US` y `es_419`.
- Arquitectura basada estrictamente en Clean Architecture y Domain-Driven Design (DDD).

## [1.0.1] - 2026-10-08

### Added
- Estructura de contextos delimitados para `sales` y `store` siguiendo DDD.

### Fixed
- Alineación y contraste de colores en `LandingView`, `SignInView` y `SignUpView`.