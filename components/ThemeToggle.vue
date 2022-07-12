<script setup lang="ts">
import IconMoon from '~icons/carbon/moon'
import IconSun from '~icons/carbon/sun'

const colorMode = useColorMode()
</script>

<template>
  <ClientOnly>
    <button @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'" class="px-2"
      aria-label="Color Mode">
      <icon-moon v-if="colorMode.value === 'dark'" />
      <icon-sun v-else />
    </button>
  </ClientOnly>
</template>

