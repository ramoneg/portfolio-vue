<template>
    <div>
        <transition name="fade">
            <div v-if="!$store.state.menu.isOpen" @click="$store.dispatch('menu/toggleMenu')" class="relative cursor-pointer h-8 w-8">
                <span class="w-full transition h-1 bg-gradient-to-br from-primary-200 to-gray-600 absolute top-1/2 transform -translate-y-2.5 left-0"></span>
                <span class="w-full transition h-1 bg-gradient-to-br from-primary-200 to-gray-600 absolute top-1/2 left-0"></span>
                <span class="w-full transition h-1 bg-gradient-to-br from-primary-200 to-gray-600 absolute top-1/2 transform translate-y-2.5 left-0"></span>
            </div>
        </transition>
        <transition name="mobile-menu">
            <div class="bg-gray-600 px-12 bg-opacity-90 h-screen w-screen top-0 left-0 absolute z-50 transition-all flex flex-row items-center justify-center select-none" v-if="$store.state.menu.isOpen">
                <div class="text-center">
                    <ui-panel class="text-center shadow-xl flex flex-col space-y-8 text-4xl font-heading uppercase">
                        <nuxt-link v-for="link in $store.state.menu.links" :key="link.url" @click.native="$store.dispatch('menu/toggleMenu')" :to="link.url">{{ link.name }}</nuxt-link>
                    </ui-panel>
                    <h2 class="mt-16 spacer cursor-pointer" @click="$store.dispatch('menu/toggleMenu')">
                        <ui-fancy overlay>Close</ui-fancy>
                    </h2>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>