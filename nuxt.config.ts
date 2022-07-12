import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@nuxt/content', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  colorMode: {
    preference: 'system',
    classPrefix: '',
    classSuffix: '',
    dataValue: 'theme'
  }
});
