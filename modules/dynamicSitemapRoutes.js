export default function () {
    this.nuxt.hook('generate:done', (context) => {
      this.nuxt.options.sitemap.routes = [...Array.from(context.generatedRoutes)]
    })
  }