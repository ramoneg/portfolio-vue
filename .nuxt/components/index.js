export const UiBadge = () => import('../../components/UI/UiBadge.vue' /* webpackChunkName: "components/ui-badge" */).then(c => wrapFunctional(c.default || c))
export const UiBlogPosts = () => import('../../components/UI/UiBlogPosts.vue' /* webpackChunkName: "components/ui-blog-posts" */).then(c => wrapFunctional(c.default || c))
export const UiButton = () => import('../../components/UI/UiButton.vue' /* webpackChunkName: "components/ui-button" */).then(c => wrapFunctional(c.default || c))
export const UiCard = () => import('../../components/UI/UiCard.vue' /* webpackChunkName: "components/ui-card" */).then(c => wrapFunctional(c.default || c))
export const UiFancy = () => import('../../components/UI/UiFancy.vue' /* webpackChunkName: "components/ui-fancy" */).then(c => wrapFunctional(c.default || c))
export const UiHero = () => import('../../components/UI/UiHero.vue' /* webpackChunkName: "components/ui-hero" */).then(c => wrapFunctional(c.default || c))
export const UiImage = () => import('../../components/UI/UiImage.vue' /* webpackChunkName: "components/ui-image" */).then(c => wrapFunctional(c.default || c))
export const UiLogo = () => import('../../components/UI/UiLogo.vue' /* webpackChunkName: "components/ui-logo" */).then(c => wrapFunctional(c.default || c))
export const UiMarkdown = () => import('../../components/UI/UiMarkdown.vue' /* webpackChunkName: "components/ui-markdown" */).then(c => wrapFunctional(c.default || c))
export const UiMobileMenu = () => import('../../components/UI/UiMobileMenu.vue' /* webpackChunkName: "components/ui-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const UiP = () => import('../../components/UI/UiP.vue' /* webpackChunkName: "components/ui-p" */).then(c => wrapFunctional(c.default || c))
export const UiPanel = () => import('../../components/UI/UiPanel.vue' /* webpackChunkName: "components/ui-panel" */).then(c => wrapFunctional(c.default || c))
export const UiProjects = () => import('../../components/UI/UiProjects.vue' /* webpackChunkName: "components/ui-projects" */).then(c => wrapFunctional(c.default || c))
export const UiSection = () => import('../../components/UI/UiSection.vue' /* webpackChunkName: "components/ui-section" */).then(c => wrapFunctional(c.default || c))
export const UiSkills = () => import('../../components/UI/UiSkills.vue' /* webpackChunkName: "components/ui-skills" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
