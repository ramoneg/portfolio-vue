<template>
  <div class="rounded bg-gray-800 relative overflow-hidden shadow-xl">
        <div class="absolute w-full h-full pointer-events-none bg-gradient-to-tr via-transparent to-white z-10 opacity-30" />
        <UiImage class="h-48 w-full object-contain" v-if="image" :image="image" />
        <div class="p-4 flex flex-col space-y-4">
            <p class="font-bold">{{ title }}</p>
            <div v-if="$slots.default">
                <slot />
            </div>
            <nuxt-link v-if="!$slots.footer && url" :to="url">
                <UiButton buttonStyle="primary" :showOverlay="false">
                    More
                </UiButton>
            </nuxt-link>
            <slot name="footer" />
        </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'image', 'url']
}
</script>