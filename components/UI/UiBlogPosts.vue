<template>
    <div>
        <div class="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">
            <UiCard v-for="post in posts" :key="post.id" :title="post.fields.title" :image="post.fields.heroImage" :url="`/blog/${post.fields.slug}`">
                {{ post.fields.description }}
            </UiCard>
        </div>
    </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>