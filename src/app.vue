<script setup>
</script>

<template>
  <div>
    <!-- Navegación -->
    <header class="flex justify-content-between align-items-center py-3 px-5 shadow-1 fixed top-0 w-full bg-white z-5">
      <div class="text-2xl font-bold text-primary">
        <i class="pi pi-check-circle mr-2"></i>Al ToDu
      </div>
      <nav class="hidden md:flex gap-4">
        <a href="#hero" class="text-gray-700 no-underline hover:text-primary font-medium">Inicio</a>
        <a href="#benefits" class="text-gray-700 no-underline hover:text-primary font-medium">Beneficios</a>
        <a href="#pricing" class="text-gray-700 no-underline hover:text-primary font-medium">Planes</a>
      </nav>
      <div>
        <a href="/login" class="p-button p-component p-button-primary no-underline font-bold border-round-lg">Iniciar Sesión</a>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="flex flex-column align-items-center text-center px-4 pt-8 pb-6 mt-6 bg-blue-50">
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
        Haz que tus proyectos <span class="text-primary">complejos sean posibles</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mb-5 line-height-3">
        Nuestra Inteligencia Artificial desglosa tus metas más grandes en tareas accionables y jerárquicas.
      </p>
      <div class="flex gap-3">
        <button class="p-button p-component p-button-lg font-bold border-round-lg">Comienza Gratis</button>
        <button class="p-button p-component p-button-outlined p-button-lg font-bold border-round-lg">Saber más</button>
      </div>
    </section>

    <!-- Beneficios Section -->
    <section id="benefits" class="py-8 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">¿Por qué elegir Al ToDu?</h2>
        <p class="text-gray-600 text-lg">Todo lo que necesitas para recuperar el control de tu tiempo.</p>
      </div>
      <div class="grid gap-4 mt-5">
        <div class="col-12 md:col-4 p-4 text-center surface-card shadow-1 border-round-xl">
          <i class="pi pi-bolt text-5xl text-yellow-500 mb-4"></i>
          <h3 class="text-xl font-bold mb-3">Desglose Automático</h3>
          <p class="text-gray-600 line-height-3">La IA convierte metas ambiguas en pasos accionables al instante.</p>
        </div>
        <div class="col-12 md:col-4 p-4 text-center surface-card shadow-1 border-round-xl">
          <i class="pi pi-sitemap text-5xl text-blue-500 mb-4"></i>
          <h3 class="text-xl font-bold mb-3">Gestión Jerárquica</h3>
          <p class="text-gray-600 line-height-3">Organiza tareas y subtareas con dependencias claras.</p>
        </div>
        <div class="col-12 md:col-4 p-4 text-center surface-card shadow-1 border-round-xl">
          <i class="pi pi-chart-line text-5xl text-green-500 mb-4"></i>
          <h3 class="text-xl font-bold mb-3">Progreso Visual</h3>
          <p class="text-gray-600 line-height-3">Monitorea el avance de tus proyectos con indicadores claros.</p>
        </div>
      </div>
    </section>

    <!-- Planes de Suscripción Section -->
    <section id="pricing" class="py-8 px-4 bg-gray-50">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Planes a tu medida</h2>
        <p class="text-gray-600 text-lg">Elige la suscripción que mejor se adapte a tus metas.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-5">
        <div class="col-12 md:col-4">
          <div class="text-center p-5 shadow-1 border-round-xl bg-white h-full flex flex-column justify-content-between">
            <div>
              <h3 class="text-2xl font-bold mb-2">Básico</h3>
              <div class="text-4xl font-bold text-primary mb-4">Gratis</div>
            </div>
            <button class="p-button p-component p-button-secondary w-full font-bold">Empezar Gratis</button>
          </div>
        </div>
        <div class="col-12 md:col-4 relative">
          <div class="text-center p-5 shadow-4 border-2 border-primary border-round-xl bg-white h-full flex flex-column justify-content-between md:-mt-3">
            <span class="bg-primary text-white text-xs font-bold px-3 py-1 border-round-2xl absolute top-0 left-50" style="transform: translate(-50%, -50%);">MÁS POPULAR</span>
            <div>
              <h3 class="text-2xl font-bold mb-2">Pro</h3>
              <div class="text-4xl font-bold text-primary mb-4">$9.99<span class="text-lg text-gray-500 font-normal">/mes</span></div>
            </div>
            <button class="p-button p-component w-full font-bold">Prueba de 14 días</button>
          </div>
        </div>
        <div class="col-12 md:col-4">
          <div class="text-center p-5 shadow-1 border-round-xl bg-white h-full flex flex-column justify-content-between">
            <div>
              <h3 class="text-2xl font-bold mb-2">Equipos</h3>
              <div class="text-4xl font-bold text-primary mb-4">$24.99<span class="text-lg text-gray-500 font-normal">/mes</span></div>
            </div>
            <button class="p-button p-component p-button-secondary w-full font-bold">Contactar Ventas</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-6 text-center">
      <div class="mb-3">
        <i class="pi pi-check-circle text-2xl mr-2 text-primary"></i>
        <span class="text-xl font-bold">Al ToDu</span>
      </div>
      <p class="text-gray-400 mb-4">&copy; 2026 Al ToDu. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Compensa la altura del header fijo al navegar mediante anclas */
section[id] {
  scroll-margin-top: 80px;
}
</style>