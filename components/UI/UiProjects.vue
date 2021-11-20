<template>
    <div>
        <div class="w-full grid-cols-1 md:grid-cols-2 grid gap-4">
            <a
            v-for="(project, index) in projects"
            :key="index"
            target="_blank"
            :href="project.fields.url"
            class="col-span-1 rounded-xl bg-gray-800 transform transition-colors duration-75 relative p-5 flex items-center"
            :class="[elementClasses, {
                'cursor-not-allowed': !project.fields.url, 
                'hover:bg-gray-700': project.fields.url
            }]">
                <ui-badge class="absolute top-5 right-5" v-if="!project.fields.url">Private</ui-badge>
                <div class="text-left">
                    <span class="text-gray-400 font-mono" v-if="project.fields.type">{{ project.fields.type }}</span>
                    <h3>{{ project.fields.title }}</h3>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projects', 'elementClasses']
}
</script>