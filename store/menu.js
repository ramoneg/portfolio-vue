export const state = () => ({
    links: [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Blog',
            url: '/blog',
        },
        {
            name: 'Projects',
            url: '/projects',
        },
    ],
    isOpen: false
})

export const actions = {
    toggleMenu ({ commit }) {
        commit('toggle')
    }
}

export const mutations = {
    toggle: (state) => state.isOpen = !state.isOpen
}