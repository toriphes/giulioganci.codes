<script setup lang="ts">
import IconCalendar from '~icons/carbon/calendar'
import IconHashtag from '~icons/carbon/hashtag'

type Post = {
  id: string,
  title: string,
  url: string,
  cover_image: string,
  published_at: string,
  description: string,
  tags: string
}

const { data: articles } = await useFetch<Post[]>('https://dev.to/api/articles', {
  params: {
    username: 'toriphes',
    per_page: 3
  },
})

</script>

<template>

  <base-section kicker="Recents Posts" title="From The Blog">

    <template #subtitle>
      Sometimes I like to write about my experiences as a developer. Read more on
      <a href="https://dev.to/toriphes" rel="noreferer" target="_blank">dev.to</a>.
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article v-for="article of articles" :key="article.id" class="group">
        <div class="overflow-hidden rounded-xl shadow-xl">
          <a :href="article.url" class="group" :title="article.title">
            <nuxt-img :src="article.cover_image" loading="lazy" :alt="article.title"
              class="aspect-video block h-auto max-w-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform ease-linear" />
          </a>
        </div>
        <div class="mx-3 p-3 bg-white dark:bg-darkSoft shadow-xl rounded-lg rounded-br-3xl -translate-y-10">
          <div class="mb-3">
            <div class="flex gap-4 text-sm">
              <icon-calendar />
              <div>{{ article.published_at }}
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold my-3">
            <a :href="article.url" tabindex="-1"
              class="text-black dark:text-white/80 hover:text-primary dark:hover:text-primary">{{
                  article.title
              }}</a>
          </h3>
          <div class="font-medium text-gray">{{ article.description }}</div>
          <div class="flex gap-4 mt-3 text-sm ">
            <icon-hashtag />
            {{ article.tags }}
          </div>
        </div>
      </article>
    </div>
  </base-section>

</template>
