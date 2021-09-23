<template>
  <button class="relative z-10 active:scale-95 transform transition-transform">
      <div class="bg-transparent text-gray-900 px-5 py-3 bg-gradient-to-r from-primary-400 to-yellow-300 shadow cursor-pointer uppercase font-bold z-10" v-if="$slots.default">
        <slot />
      </div>
      <div class="absolute top-0 left-0 filter blur-xl opacity-60 bg-gradient-to-r from-primary-300 to-yellow-200 w-full h-full" style="z-index: -1;" />
  </button>
</template>

<script>
export default {}
</script>