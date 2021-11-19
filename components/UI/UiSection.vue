<template>
  <section class="block-spacer text-center md:text-left">
    <h2 class="mb-2" v-if="title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
    props: ['title']
}
</script>