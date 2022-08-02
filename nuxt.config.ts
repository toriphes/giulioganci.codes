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
        },
        {
          hid: 'ld-json',
          children: `{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "publisher": {
        "@type": "Organization",
        "name": "Giulio Ganci",
        "url": "https://giulioganci.codes",
        "logo": {
            "@type": "ImageObject",
            "url": "https://giulioganci.codes/apple-icon-180x180.png",
            "width": 180,
            "height": 180
        }
    },
    "url": "https://giulioganci.codes",
    "image": {
        "@type": "ImageObject",
        "url": "https://giulioganci.codes/share-image.png",
        "width": 1600,
        "height": 880
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://giulioganci.codes"
    },
    "description": "Passionate Fullstack Developer. I love coding and building things!"
}`,
          type: 'application/ld+json'
        }
      ]
    }
  }
});
