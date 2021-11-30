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
        @apply mb-8 md:mb-10;
    }

    h2 {

        @apply relative;

        &:after {
            content: "";
            @apply hidden md:block absolute w-10 h-1 bg-gradient-to-tr from-primary-200 to-primary-400 rounded -bottom-1 left-0;
        }

        &:not(:first-child) {
            @apply mt-12 md:mt-24 lg:mt-36;
        }
    }

    p {
        @apply mb-4 md:mb-8;
    }

    a {
        @apply relative font-medium px-1;

        &:after {
            @apply absolute w-full h-1/2 bottom-0 left-0 -translate-y-1/2 bg-primary-200 opacity-20;
            content: '';
        }
    }

    ol {
        @apply ml-5 mb-4 md:mb-8;

        li {
            @apply pl-4 list-decimal;
        }
    }

    blockquote p {
        @apply mb-0;
    }

    img {
        @apply object-contain w-2/5 md:w-auto max-h-96 inline-block rounded;
    }
}
</style>