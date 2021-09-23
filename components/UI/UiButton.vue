<template>
  <button class="relative z-10 active:scale-95 transform transition-transform">
      <div class="bg-transparent px-5 py-3 shadow cursor-pointer uppercase font-bold z-10 rounded" :class="style" v-if="$slots.default">
        <slot />
      </div>
      <div class="absolute top-0 left-0 filter blur-xl opacity-60 w-full h-full" :class="overlay" style="z-index: -1;" />
  </button>
</template>

<script>
export default {
  props: {
    buttonStyle: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      buttonStyles: {
        primary: 'text-gray-900 bg-gradient-to-r from-primary-400 to-yellow-300',
        'secondary': 'text-white bg-gradient-to-r from-gray-700 to-gray-800'
      },
      overlayStyles: {
        primary: 'bg-gradient-to-r from-primary-300 to-yellow-200',
        'secondary': 'text-white'
      }
    }
  },
  computed: {
    style () {
      return this.buttonStyles[this.buttonStyle]
    },
    overlay () {
      return this.overlayStyles[this.buttonStyle]
    }
  }
}
</script>