<script setup lang="ts">
type Props = {
  percentage: number
}

defineProps<Props>();
</script>

<template>
  <div class="border border-primary rounded-full p-px">
    <div class="h-1 bg-primary rounded-full" :style="`width: ${percentage}%;`"></div>
  </div>
</template>
