// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['github:kevinndlc/nuxt-layer/base', {install: true}]],
  modules: ['@nuxtjs/tailwindcss'],
});
