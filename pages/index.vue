<template>
  <div>
    <ui-hero>
      <ui-h1 class="spacer">
        I like to write <ui-fancy overlay icon="⚡">#fancy</ui-fancy> code
      </ui-h1>
      <div>
        <nuxt-link to="/projects">
          <ui-button>Projects</ui-button>
        </nuxt-link>
      </div>
    </ui-hero>
    <ui-section>
      <ui-h2 class="spacer">Skills</ui-h2>
      <ui-skills />
    </ui-section>
  </div>
</template>

<script>
export default {

}
</script>