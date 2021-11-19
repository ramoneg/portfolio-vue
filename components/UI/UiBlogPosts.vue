<template>
    <div>
        <div class="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">
            <UiCard v-for="post in posts" :key="post.id" :title="post.fields.title" :image="post.fields.heroImage">
                <p class="mb-4">
                    {{ post.fields.description }}
                </p>
                <template #footer>
                    <div class="flex items-end justify-between">
                        <nuxt-link :to="`/blog/${post.fields.slug}`">
                            <UiButton buttonStyle="primary" :showOverlay="false">
                                Read
                            </UiButton>
                        </nuxt-link>
                        <span class="font-mono">
                            {{ formatDate(post.sys.createdAt) }}
                        </span>
                    </div>
                </template>
            </UiCard>
        </div>
    </div>
</template>

<script>
export default {
    props: ['posts'],
    methods: {
        formatDate(value) {
            let date = new Date(value)
            return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
        }
    }
}
</script>