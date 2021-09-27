<template>
    <div>
        <div class="spacer flex overflow-x-scroll md:overflow-x-visible">
            <ui-button
                :showOverlay="false"
                v-for="category in categories"
                :key="category"
                @click.native="setFilter(category)"
                :button-style="category == filter ?  'primary' : 'secondary'"
                class="mr-4"
                >
                {{ category }}
            </ui-button>
        </div>
        <div class="flex flex-wrap items-center">
            <div v-for="skill in skills"
                :key="skill.name"
                class="flex relative rounded-2xl shadow mr-2 mb-2 md:mr-8 md:mb-8 px-4 py-2 border bg-gray-900 border-gray-700 transition-opacity"
                :class="{
                    'opacity-25': (filter != 'all' && skill.category != filter),
                    'border-primary-300': skill.level >= 8
                }">
                <ui-h3>{{ skill.name }}</ui-h3><small class="absolute top-0 right-0 font-emoji" v-if="skill.level >= 8">⭐</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter: 'all',
            skills: [
                {
                    name: 'Laravel',
                    category: 'backend',
                    level: 10
                },
                {
                    name: 'PHP',
                    category: 'backend',
                    level: 9
                },
                {
                    name: 'SOLID Code',
                    category: 'backend',
                    level: 6
                },
                {
                    name: 'Linux/Unix',
                    category: 'Engineering',
                    level: 7
                },
                {
                    name: 'Networks',
                    category: 'Engineering',
                    level: 7
                },
                {
                    name: 'Vue',
                    category: 'Frontend',
                    level: 8
                },
                {
                    name: 'Javascript',
                    category: 'Frontend',
                    level: 8
                },
                {
                    name: 'AWS',
                    category: 'Engineering',
                    level: 5
                },
                {
                    name: 'Git',
                    category: 'Other',
                    level: 7
                },
                {
                    name: 'Welding',
                    category: 'Fancy',
                    level: 7
                },
                {
                    name: 'Audio Production',
                    category: 'Fancy',
                    level: 8
                },
                {
                    name: 'Thaiboxing',
                    category: 'Fancy',
                    level: 7
                },
                {
                    name: 'Video Editing',
                    category: 'Fancy',
                    level: 7
                },
                {
                    name: 'Project Management',
                    category: 'Other',
                    level: 5
                },
            ],
        }
    },
    methods: {
        setFilter(filter) {
            this.filter == filter
                ? this.filter = 'all'
                : this.filter = filter
        }
    },
    computed: {
        categories () {
            const categories = ['all']

            this.skills.map(v => {
                if (!categories.some(c => c == v.category)) {
                    categories.push(v.category)
                }
            })

            return categories
        }
    }
}
</script>