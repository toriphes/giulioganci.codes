<script setup lang="ts">
const { data } = await useAsyncData('skills', () => queryContent('/skills').findOne())

const tabs = ['Frontend', 'Backend', 'Technical']
const selectedTab = ref(tabs[0]);

</script>

<template>
  <base-section title="Coding Skills" kicker="What I can do"
    subtitle="Being a fullstack developer is hard work. Here is a list of my main skills">

    <div class="flex gap-4 mb-8 justify-center">
      <div v-for="tab of tabs" :key="tab" class="select-none cursor-pointer px-4 py-2 font-medium"
        :class="{ 'border-b-2 border-primary text-primary': selectedTab === tab, 'text-black dark:text-white/80': selectedTab !== tab }"
        @click="selectedTab = tab">
        {{ tab }}
      </div>
    </div>

    <div v-for="tab of tabs" :key="tab" :class="{ 'block': selectedTab === tab, 'hidden': selectedTab !== tab }">
      <div class="grid sm:grid-rows-5 md:grid-flow-col gap-x-12 gap-y-4">
        <skill-item v-for="item of data.body.filter(el => el.type === tab)" :key="item.name" :label="item.name"
          :percentage="item.value" />
      </div>
    </div>
  </base-section>
</template>
