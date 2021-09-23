<template>
  <section class="block-spacer text-center md:text-left">
    <ui-h2 class="mb-2" v-if="title">{{ title }}</ui-h2>
    <slot />
  </section>
</template>

<script>
export default {
    props: ['title']
}
</script>