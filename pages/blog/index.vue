<template>
    <div>
        <UiHero small>
            <ui-h1>Blog</ui-h1>
        </UiHero>
        <UiSection>
            <UiBlogPosts :posts="blogPosts" />
        </UiSection>
    </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();

export default {
    async asyncData() {
        let blogPosts = await client.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt',
        })

        blogPosts = blogPosts.items

        return {
            blogPosts
        }
    }
}
</script>