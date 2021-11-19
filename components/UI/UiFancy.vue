<template>
    <span class="fancy-wrapper">
        <span v-if="$slots.default" class="text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-yellow-200">
            <slot />
        </span>
        <div v-if="icon" :class="[iconSize, iconCenter && 'left-1/2 -translate-x-1/2']" class="font-emoji icon p-4 absolute top-1/2 transform -translate-y-1/2 text-transparent bg-clip-text bg-primary-200 opacity-10">
            {{ icon }}
        </div>
        <div v-if="overlay" class="overlay absolute top-0 left-0 h-full w-full bg-primary-500 opacity-10 filter blur-lg pointer-events-none" />
    </span>
</template>

<script>
export default {
    props: {
        overlay: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: null
        },
        iconSize: {
            type: String,
            default: "text-7xl"
        },
        iconCenter: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style scoped>
    .fancy-wrapper {
        position: relative;
        z-index: 1;
    }

    .fancy-wrapper .icon {
        z-index: -1;
    }

    .fancy-wrapper .overlay {
        z-index: -2;
    }
</style>