<template>
    <div>
        <ui-hero small>
            <slot />
        </ui-hero>
        <div class="w-full grid-cols-2 grid gap-4">
            <div
            v-for="project in projects"
            :key="project"
            class="border-b-2 border-primary-200 col-span-1 p-5">
                <ui-h3><ui-fancy overlay icon="🔥" icon-small :icon-center="false">{{ project }}</ui-fancy></ui-h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            projects: [
                'LBC Composites',
                'Roughneck Marine',
                'Ladyplanet',
                'SocialGate',
                'Apropos.jobs',
                'Arfina Capital',
                'Bixe.ch',
                'Harley Davidson',
            ]
        }
    }
}
</script>