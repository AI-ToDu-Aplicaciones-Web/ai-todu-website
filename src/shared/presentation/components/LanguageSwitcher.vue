<template>
  <div class="language-switcher flex gap-1 bg-gray-100 p-1 border-round-lg">
    <button
        v-for="locale in availableLocales"
        :key="locale"
        @click="changeLanguage(locale)"
        :class="['px-3 py-1 border-none cursor-pointer font-medium border-round-md transition-colors',
                 currentLocale === locale ? 'bg-primary text-white shadow-1' : 'bg-transparent text-gray-700 hover:bg-gray-200']"
    >
      {{ locale.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

const currentLocale = computed(() => locale.value);

const changeLanguage = (newLocale) => {
  locale.value = newLocale;
};
</script>