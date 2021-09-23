<template>
  <div class="bg-gradient-to-tr from-primary-950 to-gray-800 text-gray-200 min-h-screen w-full flex justify-center">
    <div class="max-w-6xl w-full min-h-full">
      <!-- <nav class="p-2 sm:p-8 lg:p-10 mb-2">
        <nuxt-link to="/">
          <ui-logo></ui-logo>
        </nuxt-link>
      </nav> -->
      <div class="px-8 lg:px-12">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page'
}
</script>