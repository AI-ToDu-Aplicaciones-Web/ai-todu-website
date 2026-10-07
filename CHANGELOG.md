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