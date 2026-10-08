<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './shared/presentation/components/LanguageSwitcher.vue';

const { t } = useI18n();
</script>

<template>
  <div>
    <!-- Navegación -->
    <header class="flex justify-content-between align-items-center py-3 px-5 shadow-1 fixed top-0 w-full bg-white z-5" role="banner">
      <div class="text-2xl font-bold text-primary flex align-items-center" aria-label="Logo Al ToDu">
        <i class="pi pi-check-circle mr-2" aria-hidden="true"></i>Al ToDu
      </div>
      <nav class="hidden md:flex gap-4" aria-label="Navegación principal">
        <a href="#hero" class="text-gray-700 no-underline hover:text-primary font-medium">{{ t('nav.home') }}</a>
        <a href="#benefits" class="text-gray-700 no-underline hover:text-primary font-medium">{{ t('nav.benefits') }}</a>
        <a href="#pricing" class="text-gray-700 no-underline hover:text-primary font-medium">{{ t('nav.pricing') }}</a>
      </nav>
      <div class="flex align-items-center gap-3">
        <div class="p-toolbar-group-end">
          <LanguageSwitcher />
        </div>
        <router-link to="/login" class="p-button p-component p-button-primary no-underline font-bold border-round-lg">
          {{ t('nav.login') }}
        </router-link>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="flex flex-column align-items-center text-center px-4 pt-8 pb-6 mt-6 bg-blue-50" aria-labelledby="hero-title">
      <h1 id="hero-title" class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
        {{ t('hero.title') }} <span class="text-primary">{{ t('hero.titleHighlight') }}</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mb-5 line-height-3">
        {{ t('hero.subtitle') }}
      </p>
      <div class="flex gap-3">
        <button class="p-button p-component p-button-lg font-bold border-round-lg" aria-label="Comenzar prueba gratuita">{{ t('hero.startFree') }}</button>
        <button class="p-button p-component p-button-outlined p-button-lg font-bold border-round-lg" aria-label="Aprender más sobre Al ToDu">{{ t('hero.learnMore') }}</button>
      </div>
    </section>

    <!-- Beneficios Section (Corregido alineación y colores de texto) -->
    <section id="benefits" class="py-8 px-4 max-w-7xl mx-auto" aria-labelledby="benefits-title">
      <div class="text-center mb-6">
        <h2 id="benefits-title" class="text-3xl font-bold text-gray-900 mb-2">¿Por qué elegir Al ToDu?</h2>
        <p class="text-gray-600 text-lg">Todo lo que necesitas para recuperar el control de tu tiempo.</p>
      </div>

      <!-- Usamos justify-content-center para que las tarjetas se alineen perfectamente -->
      <div class="grid justify-content-center gap-4 mt-5">
        <div class="col-12 md:col-4 p-4 text-center bg-gray-900 shadow-2 border-round-xl flex flex-column justify-content-between">
          <div>
            <i class="pi pi-bolt text-5xl text-yellow-400 mb-4" aria-hidden="true"></i>
            <h3 class="text-xl font-bold mb-3 text-white">Desglose Automático</h3>
            <p class="text-gray-300 line-height-3">La IA convierte metas ambiguas en pasos accionables al instante, ahorrándote horas de planificación manual.</p>
          </div>
        </div>
        <div class="col-12 md:col-4 p-4 text-center bg-gray-900 shadow-2 border-round-xl flex flex-column justify-content-between">
          <div>
            <i class="pi pi-sitemap text-5xl text-blue-400 mb-4" aria-hidden="true"></i>
            <h3 class="text-xl font-bold mb-3 text-white">Gestión Jerárquica</h3>
            <p class="text-gray-300 line-height-3">Organiza tareas y subtareas con dependencias claras para mantener el orden lógico de tus flujos de trabajo.</p>
          </div>
        </div>
        <div class="col-12 md:col-4 p-4 text-center bg-gray-900 shadow-2 border-round-xl flex flex-column justify-content-between">
          <div>
            <i class="pi pi-chart-line text-5xl text-green-400 mb-4" aria-hidden="true"></i>
            <h3 class="text-xl font-bold mb-3 text-white">Progreso Visual</h3>
            <p class="text-gray-300 line-height-3">Monitorea el avance de tus proyectos con indicadores claros y mantén tu motivación al tope cada día.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planes de Suscripción Section -->
    <section id="pricing" class="py-8 px-4 bg-gray-50" aria-labelledby="pricing-title">
      <div class="text-center mb-6">
        <h2 id="pricing-title" class="text-3xl font-bold text-gray-900 mb-2">Planes a tu medida</h2>
        <p class="text-gray-600 text-lg">Elige la suscripción que mejor se adapte a tus metas.</p>
      </div>

      <div class="grid justify-content-center gap-4 max-w-6xl mx-auto mt-5">
        <div class="col-12 md:col-4">
          <div class="text-center p-5 shadow-1 border-round-xl bg-white h-full flex flex-column justify-content-between">
            <div>
              <h3 class="text-2xl font-bold mb-2 text-gray-900">Básico</h3>
              <p class="text-gray-500 mb-4">Para individuos iniciando</p>
              <div class="text-4xl font-bold text-primary mb-4">Gratis</div>
              <ul class="text-left mb-6 space-y-3 text-gray-600 list-none pl-0">
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Gestión de tareas manuales</li>
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Hasta 3 proyectos activos</li>
                <li class="mb-2"><i class="pi pi-times text-red-500 mr-2" aria-hidden="true"></i> Sin IA de desglose</li>
              </ul>
            </div>
            <button class="p-button p-component p-button-secondary w-full font-bold justify-content-center">Empezar Gratis</button>
          </div>
        </div>

        <div class="col-12 md:col-4 relative">
          <div class="text-center p-5 shadow-4 border-2 border-primary border-round-xl bg-white h-full flex flex-column justify-content-between">
            <span class="bg-primary text-white text-xs font-bold px-3 py-1 border-round-2xl absolute top-0 left-50" style="transform: translate(-50%, -50%);">MÁS POPULAR</span>
            <div>
              <h3 class="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
              <p class="text-gray-500 mb-4">Para profesionales enfocados</p>
              <div class="text-4xl font-bold text-primary mb-4">$9.99<span class="text-lg text-gray-500 font-normal">/mes</span></div>
              <ul class="text-left mb-6 space-y-3 text-gray-600 list-none pl-0">
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Proyectos ilimitados</li>
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Asistente IA ilimitado</li>
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Paneles y estadísticas</li>
              </ul>
            </div>
            <button class="p-button p-component w-full font-bold justify-content-center">Prueba de 14 días</button>
          </div>
        </div>

        <div class="col-12 md:col-4">
          <div class="text-center p-5 shadow-1 border-round-xl bg-white h-full flex flex-column justify-content-between">
            <div>
              <h3 class="text-2xl font-bold mb-2 text-gray-900">Equipos</h3>
              <p class="text-gray-500 mb-4">Para colaboración ágil</p>
              <div class="text-4xl font-bold text-primary mb-4">$24.99<span class="text-lg text-gray-500 font-normal">/mes</span></div>
              <ul class="text-left mb-6 space-y-3 text-gray-600 list-none pl-0">
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Todo el Plan Pro</li>
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Espacios compartidos</li>
                <li class="mb-2"><i class="pi pi-check text-green-500 mr-2" aria-hidden="true"></i> Soporte 24/7</li>
              </ul>
            </div>
            <button class="p-button p-component p-button-secondary w-full font-bold justify-content-center">Contactar Ventas</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer con Términos de Servicio -->
    <footer class="bg-gray-900 text-white py-6 text-center" role="contentinfo">
      <div class="mb-3">
        <i class="pi pi-check-circle text-2xl mr-2 text-primary" aria-hidden="true"></i>
        <span class="text-xl font-bold">Al ToDu</span>
      </div>
      <p class="text-gray-400 mb-4">&copy; 2026 Al ToDu. Todos los derechos reservados.</p>
      <div class="flex justify-content-center gap-4">
        <a href="/terms" class="text-gray-400 no-underline hover:text-white">Términos y Condiciones</a>
        <a href="/privacy" class="text-gray-400 no-underline hover:text-white">Política de Privacidad</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
section[id] {
  scroll-margin-top: 80px;
}
</style>