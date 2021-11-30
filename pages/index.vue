<template>
  <div>
    <UiHero>
      <h1 class="spacer">
        I like to write <ui-fancy overlay icon="⚡" icon-size="text-9xl">#fancy</ui-fancy> code
      </h1>
      <div>
        <nuxt-link to="/blog">
          <UiButton>Blog</UiButton>
        </nuxt-link>
        <nuxt-link class="ml-4" to="/projects">
          <UiButton button-style="secondary">Projects</UiButton>
        </nuxt-link>
      </div>
    </UiHero>
    <UiSection id="skills">
      <h2 class="spacer">Skills</h2>
      <ui-skills />
    </UiSection>
    <UiSection id="latest-blog-post" class="md:flex items-center relative justify-between">
      <div class="w-full sm:1/2 lg:w-3/5 spacer">
        <h2 class="mb-2">Latest Blog Post</h2>
        <p>Now and then I publish a blog post about topics like code, Laravel, mindset and more!</p>
      </div>
      <UiCard class="w-full sm:1/2 lg:w-2/5" :title="latestBlogPost.fields.title" :image="latestBlogPost.fields.heroImage">
          <p class="mb-4">
              {{ latestBlogPost.fields.description }}
          </p>
          <template #footer>
              <div class="flex items-end justify-between">
                  <nuxt-link :to="`/blog/${latestBlogPost.fields.slug}`">
                      <UiButton buttonStyle="primary" :showOverlay="false">
                          Read
                      </UiButton>
                  </nuxt-link>
                  <span class="font-mono">
                      {{ $formatDate(latestBlogPost.fields.publishDate) }}
                  </span>
              </div>
          </template>
      </UiCard>
    </UiSection>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
    head() {
        return {
            title: 'Ramon Egger | Home',
        }
    },
    async asyncData() {
        let latestBlogPost = await client.getEntries({
            content_type: 'blogPost',
            order: '-fields.publishDate',
            limit: 1,
        })

        latestBlogPost = latestBlogPost.items[0]

        return {
            latestBlogPost,
        }
    },
}
</script>