<template>
    <div class="flex items-center" :class="!small ? 'h-screen-4/5' : 'h-screen-2/3'">
        <div class="text-center md:text-left">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false
        }
    }
}
</script>