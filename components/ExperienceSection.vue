<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const { data } = await useAsyncData('experience', () => queryContent('/experience').findOne())
</script>

<template>

  <base-section kicker="My Dev Growth" title="Experience"
    subtitle="Over 10 years of experience in web and mobile development">
    <div class="relative">
      <span class="hidden sm:block absolute h-full w-px bg-gray/60 top-0 left-1/2"></span>
      <div v-for="item, i of data.body" :key="item.name"
        class="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:items-center py-6 group"
        :class="{ 'sm:flex-row-reverse': i % 2 }">
        <div class="text-center sm:basis-5/12" :class="{ 'sm:text-right': i % 2 === 0, 'sm:text-left': i % 2 !== 0 }">
          <h3 class="text-xl font-semibold mb-2">{{ item.position }}</h3>
          <a :href="item.url" rel="nofollow" target="_blank" class="text-gray font-medium mb-4 block">
            {{ item.name }} | {{ item.location }}
          </a>
          <span class="bg-primary text-xs text-white px-4 py-2 inline-block rounded-full">
            {{ format(parseISO(item.startDate), 'LLL yyyy') }}
            -
            {{ item.endDate === '' ? 'Current' : format(parseISO(item.endDate), 'LLL yyyy') }}
          </span>
        </div>
        <div class="hidden basis-2/12 sm:flex justify-center relative">
          <span class="inline-block w-8 h-8 border-2 bg-white dark:bg-dark border-primary rounded-full"></span>
        </div>
        <div
          class="sm:basis-5/12 shadow-2xl p-6 rounded-xl text-base bg-white dark:bg-darkSoft text-gray transition-colors ease-in-out duration-300 group-hover:bg-primary/80 group-hover:text-white">
          <p v-html="item.summary"></p>
          <div class="mt-4 flex gap-2 flex-wrap">
            <nuxt-img v-for="tech of item.stack" :key="tech" class="h-6" loading="lazy" :src="`/images/${tech}.svg`"
              :title="`${tech} logo`" />
          </div>
        </div>
      </div>

    </div>

  </base-section>

</template>
