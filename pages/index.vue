<template>
  <div>
    <UiHero>
      <h1 class="spacer">
        I like to write <ui-fancy overlay icon="⚡" icon-size="text-9xl">#fancy</ui-fancy> code
      </h1>
      <div>
        <nuxt-link to="/projects">
          <UiButton>Projects</UiButton>
        </nuxt-link>
      </div>
    </UiHero>
    <UiSection id="skills">
      <h2 class="spacer">Skills</h2>
      <ui-skills />
    </UiSection>
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