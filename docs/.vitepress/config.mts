import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Negative Development Docs",
  description: "A documentation of analogue photography, film development and darkroom printing processes. ",
  lastUpdated: true,
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    siteTitle: false,
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/get-started',
      },
      {
        text: 'Analogue Photography',
        collapsed: true,
        items: [
          { text: 'Ipsum', link: '/analogue-photography/ipsum' },
          { text: 'Lorem', link: '/analogue-photography/lorem' },
        ]
      },
      {
        text: 'Film Developing',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test', link: '/test' },
        ]
      },
      {
        text: 'Darkroom Printing',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test', link: '/test' },
        ]
      },
      {
        text: 'Appendix',
        link: '/appendix'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
