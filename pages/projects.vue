<template>
    <div>
        <UiHero small>
            <h1>Projects</h1>
        </UiHero>
        <UiSection id="projects">
            <ui-projects :elementClasses="['border border-primary-300']" :projects="projects.filter(p => p.fields.level && p.fields.level >= 8)" />
            <hr class="border-gray-700 my-8 md:my-12 lg:my-16">
            <ui-projects :elementClasses="['border border-gray-600']" :projects="projects.filter(p => !p.fields.level || p.fields.level < 8)" />
        </UiSection>
    </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
    head() {
        return {
            title: 'Projects and Portfolio',
        }
    },
    async asyncData() {
        let projects = await client.getEntries({
            content_type: 'project',
            order: 'fields.order',
        })

        projects = projects.items

        return {
            projects,
        }
    },
}
</script>
<style lang="scss">
#projects {
    h2 {
        @apply mb-8 md:mb-10;
    }

    h2:not(:first-child) {
        @apply mt-12 md:mt-24 lg:mt-36;
    }
}
</style>