<template>
  <div>
    <ui-hero>
      <ui-h1>
        I like to write <ui-fancy overlay icon="⚡">#fancy</ui-fancy> code
      </ui-h1>
      <div class="mt-5">
        <nuxt-link to="#projects">
          <ui-button>Projects</ui-button>
        </nuxt-link>
      </div>
    </ui-hero>
    <ui-projects id="projects">
      <ui-h2>Projects</ui-h2>
    </ui-projects>
  </div>
</template>

<script>
export default {

}
</script>