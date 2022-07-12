
<script setup lang="ts">

</script>

<template>
  <footer class="text-center sm:text-left">
    <base-section>
      <div class="flex flex-col gap-4 items-center sm:flex-row sm:justify-between sm:items-start">
        <div class="flex flex-col gap-4 sm:py-2.5">
          <main-logo class="text-primary" />
          <span class="text-gray">&copy; Giulio Ganci, Messina, Italy</span>
        </div>
        <social-bar :vertical="false" />
      </div>
    </base-section>
  </footer>
</template>

