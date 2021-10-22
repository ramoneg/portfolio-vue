<template>
      <img draggable="false" :src="image.fields.file.url" :alt="image.fields.description">
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    }
}
</script>