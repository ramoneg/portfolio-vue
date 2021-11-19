<template>
    <div>
        <UiHero small :image="post.fields.heroImage">
            <h1>{{ post.fields.title }}</h1>
        </UiHero>
        <UiMarkdown class="lg:w-4/5" :text="post.fields.body" />
    </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();

export default {
    async asyncData({ params }) {
        let post = await client.getEntries({
            content_type: 'blogPost',
            'fields.slug[in]': params.slug,
        })

        post = post.items[0]

        return {
            post
        }
    }
}
</script>