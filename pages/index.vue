<template>
  <div>
    <ui-hero>
      <ui-h1 class="spacer">
        I like to write <ui-fancy overlay icon="⚡" icon-size="text-9xl">#fancy</ui-fancy> code
      </ui-h1>
      <div>
        <nuxt-link to="/projects">
          <ui-button>Projects</ui-button>
        </nuxt-link>
      </div>
    </ui-hero>
    <ui-section id="skills">
      <ui-h2 class="spacer">Skills</ui-h2>
      <ui-skills />
    </ui-section>
    <ui-section id="about" class="flex flex-wrap justify-center">
      <ui-h2 class="spacer text-center w-full"><ui-fancy overlay icon="🙋‍♂️" icon-size="text-7xl">Hi, I'm Ramon</ui-fancy></ui-h2>
      <div class="w-full md:w-2/3 bg-gray-800 rounded-3xl border-primary-300 p-8 font-mono text-left">
        <ui-p class="spacer">I work as an Full Stack Web Developer. I develop front- and backend stuff for the web.</ui-p>
        <ui-p>I'm passionate about tackling something which excites and challenges me. This can be coding a project, restaurating a classic Mini or doing Muay Thai.</ui-p>
      </div>
    </ui-section>

    <ui-section id="contact" class="flex flex-wrap justify-center">
        <ui-h3><ui-fancy overlay><a href="mailto:ramon@ramonegger.ch">Mail</a></ui-fancy></ui-h3>
        <ui-h3><ui-fancy overlay><a target="_blank" href="https://github.com/ramoneg">Github</a></ui-fancy></ui-h3>
        <ui-h3><ui-fancy overlay><a target="_blank" href="https://www.linkedin.com/in/ramon-egger-7509a4123">LinkedIn</a></ui-fancy></ui-h3>
    </ui-section>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Ramon Egger | Home',
        }
    },
}
</script>