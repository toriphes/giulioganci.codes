<script setup lang="ts">
interface Props {
  kicker?: string;
  title?: string;
  subtitle?: string;
}

defineProps<Props>()
</script>

<template>
  <section class="py-16 target:before:content-[''] target:before:block target:before:h-16 target:before:-mt-16">
    <base-container>

      <div class="text-center mx-auto md:max-w-2xl mb-12" v-if="title">
        <span v-if="kicker" class="text-primary text-lg font-semibold mb-2 block">{{ kicker }}</span>
        <h2 v-if="title" class="text-5xl font-bold mb-5">{{ title }}</h2>
        <slot name="subtitle">
          <p v-if="subtitle" class="text-gray leading-6 font-medium mb-11">{{ subtitle }}</p>
        </slot>
      </div>

      <slot />
    </base-container>
  </section>
</template>

