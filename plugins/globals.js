import Vue from 'vue'

export default () => {
    Vue.mixin({
        methods: {
            $formatDate(value) {
                let date = new Date(value)
                return date.toLocaleDateString()
            }
        }
    })
}