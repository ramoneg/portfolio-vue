export const state = () => ({
    links: [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Projects',
            url: '/projects',
        },
        // {
        //     name: 'Blog',
        //     url: '/blog',
        // },
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