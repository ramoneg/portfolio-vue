<template>
    <div itemscope itemtype="https://schema.org/Blog">
        <section id="information" class="hidden">
            <span itemprop="author">Ramon Egger</span>
            <img itemprop="image" :src="post.fields.heroImage">
            <img itemprop="description" :src="post.fields.description">
            <span itemprop="keywords" v-if="post.fields.tags">
                <span v-for="(tag, index) in post.fields.tags" :key="tag">
                    {{ tag }}<span v-if="post.fields.tags[index + 1]">,</span>
                </span>
            </span>
        </section>
        <UiHero small :image="post.fields.heroImage">
            <h1 itemprop="headline">{{ post.fields.title }}</h1>
        </UiHero>
        <UiMarkdown itemprop="text" class="lg:w-4/5" :text="post.fields.body" />
        <small class="font-mono text-gray-400">Published <span itemprop="datePublished">{{ $formatDate(post.fields.publishDate) }}</span></small>
    </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();

export default {
    head() {
        return {
            title: `Ramon Egger | ${this.post.fields.title}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.fields.description,
                },
            ]
        }
    },
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