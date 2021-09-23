<template>
    <div class="flex items-center" :class="!small ? 'h-screen' : 'h-40'">
        <div>
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