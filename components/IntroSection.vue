<template>
  <base-section class="relative pb-0 text-center sm:text-left">
    <div class="absolute hidden sm:block sm:w-[52%] sm:left-[48%] top-0 bottom-0 bg-gray/10"
      style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);"></div>

    <particles-background />

    <div class="relative grid gap-10 grid-cols-1 z-10 sm:grid-cols-2 items-center">

      <div class="relative">
        <social-bar class="absolute top-4 -left-16 border-gray/20 border rounded-full hidden md:block" />
        <h1 class="text-base font-semibold text-primary mb-3">
          Hey there 👋 I am
          <span class="block text-5xl font-bold text-black dark:text-white mt-1">Giulio Ganci</span>
        </h1>
        <h2 class="text-gray text-xl font-medium mb-5">
          Fullstack <span class="text-black dark:text-white">Web Developer</span>
        </h2>

        <p class="text-gray leading-6 font-medium mb-11">
          I'm a passionate and experienced full stack developer with a huge passion for javascript and
          mobile
          development.<br />
          I love coding and building things!
        </p>

        <base-button href="/downloads/CV%20-%20Giulio%20Ganci%20-%202022%20EN.pdf" download>
          Resume
        </base-button>
      </div>

      <nuxt-picture class="flex justify-center" src="/images/me.png" alt="Giulio Ganci Picture" />

    </div>
  </base-section>
</template>
