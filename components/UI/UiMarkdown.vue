<template>
    <div class="markdown" v-html="parsedText"></div>
</template>

<script>
import marked from 'marked'

export default {
    props: {
        text: {
            required: true,
            type: String,
        },
    },

    data() {
        return {
            tags: {
                ageInYears: () => {
                    return '*about* ' + ((new Date()).getFullYear() - 1999)
                },
            },
        }
    },
    methods: {
        replaceTagWithValue(tag, text, value) {
            return text.replaceAll(`{${tag}}`, value)
        },
    },
    computed: {
        parsedText() {
            let text = this.text

            Object.keys(this.tags).forEach(key => {
                text = this.replaceTagWithValue(key, text, this.tags[key])
            })

            return marked(text)
        },
    },
}
</script>
<style lang="scss">
.markdown {
    h2,
    h3,
    h4 {
        @apply my-4 md:my-8;
    }

    h2:not(:first-child) {
        @apply mt-12 md:mt-24 lg:mt-36 mb-4 md:mb-8;
    }

    p {
        @apply mb-2 md:mb-4;
    }

    a {
        @apply relative font-medium px-1;

        &:after {
            @apply absolute w-full h-1/2 bottom-0 left-0 -translate-y-1/2 bg-primary-200 opacity-20;
            content: '';
        }
    }
}
</style>