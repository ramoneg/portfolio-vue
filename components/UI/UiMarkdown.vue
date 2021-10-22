<template>
    <div v-html="parsedText"></div>
</template>

<script>
import marked from 'marked';

export default {
    props: {
        text: {
            required: true,
            type: String
        }
    },
    computed: {
        parsedText () {
            return marked(this.text)
        },
    }
}
</script>