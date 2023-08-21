<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import IconDownload from '~icons/carbon/download'
import IconMenu from '~icons/carbon/menu'

interface MenuItem {
  label: string;
  path: string;
}

const isMobile = useMediaQuery('(max-width: 768px)')
const isSticky = ref(false);
const isMobileMenuOpen = ref(false);
const htmlRef = ref();
const menuItems: MenuItem[] = markRaw([
  {
    label: 'Home',
    path: '/#home'
  },
  {
    label: 'Skills',
    path: '/#skills'
  },
  {
    label: 'Experience',
    path: '/#experience'
  },
  {
    label: 'Blog',
    path: '/#blog'
  }
])

onMounted(() => {
  htmlRef.value = document.querySelector('html')
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY > 20
  })
});

watch(isMobile, (v) => {
  if (isMobileMenuOpen.value && !v) {
    isMobileMenuOpen.value = false
  }
}, { immediate: true })

watch(isMobileMenuOpen, (val) => {
  if (htmlRef.value) {
    val ? htmlRef.value.classList.add('overflow-hidden') : htmlRef.value.classList.remove('overflow-hidden')
  }
}, { immediate: true })

</script>

<template>

  <header class="fixed w-full z-20 flex"
    :class="{ 'shadow-[0_0_20px_0_rgb(0,0,0,0.15)] bg-white/80 dark:bg-dark/80 backdrop-blur-md': isSticky || isMobileMenuOpen, 'h-screen': isMobileMenuOpen }">
    <base-container class="flex items-start" :class="{ 'flex-col': isMobileMenuOpen }">
      <div class="transition-[height] duration-300 flex items-center justify-between w-full h-16"
        :class="{ 'h-24': !isSticky }">
        <nuxt-link to="/" class="px-3 py-2" aria-label="home link">
          <main-logo class="text-primary hidden lg:block" />
          <main-logo mini class="text-primary lg:hidden" />
        </nuxt-link>
        <div class="sm:ml-6 hidden md:block">
          <nav>
            <ul class="flex lg:space-x-2">
              <li v-for="item of menuItems" :key="item.label" class="block">
                <a :href="item.path" class="block px-3 py-4 text-black dark:text-white/80 hover:text-primary">{{
                    item.label
                }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex align-center gap-4">
          <theme-toggle />
          <base-button href="/downloads/CV%20-%20Giulio%20Ganci%20-%202023%20EN.pdf" class="font-bold" size="small"
            download>

            <span class="hidden lg:block">
              Download CV
            </span>
            <span class="flex gap-2 lg:hidden">
              <icon-download />
              CV
            </span>
          </base-button>
          <button class="md:hidden text-2xl px-2" aria-label="mobile navigation" :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-nav-screen" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <icon-menu />
          </button>
        </div>
      </div>

      <div class="w-full mobile-nav-screen overflow-y-auto" :class="{ 'hidden': !isMobileMenuOpen }"
        @click="isMobileMenuOpen = false">
        <nav class="mb-6">
          <ul>
            <li v-for="item of menuItems" :key="item.label" class="block border-b border-gray/40">
              <a :href="item.path" class="block px-3 py-4 text-black dark:text-white/80 hover:text-primary">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
        <social-bar :vertical="false" class="justify-center" />
      </div>
    </base-container>
  </header>
</template>
