import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@nuxt/content', '@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxt/image-edge'],
  colorMode: {
    preference: 'system',
    classPrefix: '',
    classSuffix: '',
    dataValue: 'theme'
  },
  app: {
    head: {
      script: [
        {
          hid: 'matomo',
          children: `
  <!-- Matomo -->
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.giulioganci.codes/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
  <!-- End Matomo Code -->
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
});
