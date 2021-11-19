<template>
  <div class="bg-gradient-to-tr from-primary-950 to-gray-800 text-gray-200 w-full flex justify-center relative" :class="{'overflow-hidden': $store.state.menu.isOpen}">
    <div class="fixed h-1 z-30 left-0 top-0 bg-gradient-to-r from-yellow-300 to-primary-300 transition-all duration-75" :style="{ width: `${$store.state.scroll.percent}%` }" />
    <nav class="z-20 w-full fixed left-0 top-0 flex justify-center transition-colors" :class="{'backdrop-filter backdrop-blur shadow-lg bg-opacity-30 bg-gray-700': !top}">
      <div class="max-w-6xl w-full">
        <div class="px-8 lg:px-12 py-4 flex items-center justify-end">
          <!-- <nuxt-link :to="$store.state.menu.links.find(v => v.name == 'Home').url">
            <ui-logo />
          </nuxt-link> -->
          <ui-mobile-menu class="lg:hidden" />
          <div class="justify-between hidden lg:flex text-gray-400">
              <nuxt-link class="ml-8 font-heading text-xl font-bold uppercase transition-colors" exact-active-class="text-white" v-for="link in $store.state.menu.links" :key="link.url" :to="link.url">{{ link.name }}</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="max-w-6xl w-full min-h-full">
      <div class="px-8 lg:px-12">
        <nuxt-child class="mb-16 md:mb-32 lg:mb-48" />
        <UiSection id="about" class="flex flex-wrap justify-center">
          <h2 class="spacer text-center w-full"><ui-fancy overlay icon="🙋‍♂️" icon-size="text-7xl">Hi!</ui-fancy></h2>
          <ui-panel>
            <p class="spacer">I work as an Full Stack Web Developer. Meaning I develop front- and backend stuff for the web.</p>
            <p>I'm passionate about tackling something which excites and challenges me. This can be coding a project, restaurating a classic Mini or doing Muay Thai.</p>
          </ui-panel>
        </UiSection>

        <UiSection id="contact" class="flex flex-wrap justify-center">
            <h3><ui-fancy overlay><a href="mailto:ramon@ramonegger.ch">Mail</a></ui-fancy></h3>
            <h3 class="mx-4"><ui-fancy overlay><a target="_blank" href="https://github.com/ramoneg">Github</a></ui-fancy></h3>
            <h3><ui-fancy overlay><a target="_blank" href="https://www.linkedin.com/in/ramon-egger-7509a4123">LinkedIn</a></ui-fancy></h3>
        </UiSection>
        <div class="w-full text-center">
          <small>© Ramon Egger Software</small>
          <br>
          <a href="https://github.com/ramoneg/portfolio-vue" target="_blank"><small>This portfolio is on Github</small></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    transition: 'page',
    head() {
        return {
            title: 'Ramon Egger | Full Stack Web Developer',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Full Stack Web Developer from Switzerland.',
                },
            ],
            bodyAttrs: {
                class: this.$store.state.menu.isOpen ? 'overflow-hidden' : '',
            },
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },

    computed: {
        top() {
            return this.$store.state.scroll.percent == 0
        },
    },

    methods: {
        handleScroll(event) {
            window.requestAnimationFrame(() => {
                this.$store.dispatch('scroll/calculatePercent')
            })
        },
    },
}
</script>