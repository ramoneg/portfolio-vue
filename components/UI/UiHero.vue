<template>
    <div class="flex items-center relative" :class="!small ? 'h-screen-4/5' : 'h-screen-2/3'">
        <div class="text-center md:text-left z-10 w-3/4">
            <slot />
        </div>
        <UiImage class="w-1/2 absolute left-1/2 top-50 opacity-40" draggable="false" v-if="image" :image="image" />
    </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false
        },
        image: {
            type: Object,
            required: false
        }
    }
}
</script>