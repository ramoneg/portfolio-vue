<template>
    <div>
        <UiHero small>
            <h1>Blog</h1>
        </UiHero>
        <UiSection>
            <UiBlogPosts :posts="blogPosts" />
        </UiSection>
    </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
    head() {
        return {
            title: 'Blog Posts',
        }
    },
    async asyncData() {
        let blogPosts = await client.getEntries({
            content_type: 'blogPost',
            order: '-fields.publishDate',
        })

        blogPosts = blogPosts.items

        return {
            blogPosts,
        }
    },
}
</script>