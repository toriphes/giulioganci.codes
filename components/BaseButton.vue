<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

type Props = {
  color?: string,
  tag?: string,
  full?: boolean,
  to?: RouteLocationRaw
  size?: 'base' | 'small'
}

const props = withDefaults(defineProps<Props>(), { color: 'primary', tag: 'a', full: false, size: 'base' })

const cssClasses = computed(() => {
  const classes = [`bg-${props.color}`, 'text-white', 'font-semibold', 'rounded-full'];
  classes.push(props.full ? 'block' : 'inline-block');

  switch (props.size) {
    case 'small': classes.push('px-4 py-2'); break;
    default: classes.push('px-8 py-3')
  }

  return classes.join(' ')
})

</script>

<template>

  <nuxt-link v-if="props.to" :to="props.to" :class="cssClasses">
    <slot />
  </nuxt-link>

  <component v-else :is="props.tag" :class="cssClasses">
    <slot />
  </component>

</template>
