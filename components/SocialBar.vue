<script setup lang="ts">
import IconTwitter from '~icons/carbon/logo-twitter'
import IconGithub from '~icons/carbon/logo-github'
import IconInstagram from '~icons/carbon/logo-instagram'
import IconLinkedin from '~icons/carbon/logo-linkedin'

type Props = {
  vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), { vertical: true })

</script>

<template>
  <ul class="flex" :class="{ 'flex-col': props.vertical }">
    <li>
      <a href="https://twitter.com/toriphes" title="twitter" target="_blank" rel="noopener nofollow noreferrer"
        class="text-xl text-gray hover:text-primary p-2.5 block">
        <icon-twitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/toriphes" title="github" target="_blank" rel="noopener nofollow noreferrer"
        class="text-xl text-gray hover:text-primary p-2.5 block">
        <icon-github />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/toriphes" title="instagram" target="_blank" rel="noopener nofollow noreferrer"
        class="text-xl text-gray hover:text-primary p-2.5 block">
        <icon-instagram />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/giulioganci" title="linkedin" target="_blank" rel="noopener nofollow noreferrer"
        class="text-xl text-gray hover:text-primary p-2.5 block">
        <icon-linkedin />
      </a>
    </li>
  </ul>
</template>