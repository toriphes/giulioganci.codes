<script setup lang="ts">
type Props = {
  percentage: number,
  label: string
}

defineProps<Props>();
</script>

<template>
  <div>
    <div class="flex justify-between mb-1">
      <h3>{{ label }}</h3>
      <span class="text-gray font-medium text-sm">{{ percentage }}%</span>
    </div>
    <base-progress-bar :percentage="percentage" />
  </div>
</template>

<style scoped>
</style>