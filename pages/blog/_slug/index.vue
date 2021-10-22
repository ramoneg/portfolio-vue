<template>
    <div>
        <UiHero small :image="post.fields.heroImage">
            <ui-h1>{{ post.fields.title }}</ui-h1>
        </UiHero>
        <UiMarkdown :text="post.fields.body" />
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