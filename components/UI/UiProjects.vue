<template>
    <div>
        <div class="w-full grid-cols-1 md:grid-cols-2 grid gap-4">
            <a
            v-for="project in projects"
            :key="project"
            target="_blank"
            :href="project.url"
            :class="{'cursor-not-allowed': !project.url, 'hover:bg-gray-700': project.url}"
            class="col-span-1 p-5 flex rounded-3xl bg-gray-800 transform transition-colors relative">
                <ui-h3>{{ project.name }}</ui-h3><ui-badge class="ml-2" v-if="!project.url">Private</ui-badge>
                <p class="absolute top-0 left-0" v-if="project.level >= 8">⭐</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            projects: [
                {
                    name: 'Mini Restauration',
                    url: 'https://instagram.com/jarvisthemini',
                    level: 10
                },
                {
                    name: 'Evolve (cms)',
                    url: 'https://racerfish.com/de/web-development',
                    level: 0
                },
                {
                    name: 'LBC Composites',
                    url: 'https://lbc-composites.com',
                    level: 0
                },
                {
                    name: 'StrawBlond',
                    url: 'https://strawblond.com',
                    level: 0
                },
                {
                    name: 'Roughneck Marine',
                    url: 'https://roughneck-marine.com',
                    level: 0
                },
                {
                    name: 'Ladyplanet',
                    url: 'https://ladyplanet.ch',
                    level: 0
                },
                {
                    name: 'SocialGate (app)',
                    url: null,
                    level: 0

                },
                {
                    name: 'Apropos.jobs (app)',
                    url: null,
                    level: 0

                },
                {
                    name: 'Nitrous (cms)',
                    url: 'https://racerfish.com/de/web-development',
                    level: 0
                },
                // 'LBC Composites',
                // 'Roughneck Marine',
                // 'Ladyplanet',
                // 'SocialGate',
                // 'Apropos.jobs',
                // 'Arfina Capital',
                // 'Bixe.ch',
                // 'Harley Davidson',
            ]
        }
    }
}
</script>