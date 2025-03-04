import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Negative Development Docs",
  description: "A documentation of analogue photography, film development and darkroom printing processes. ",
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(lightbox, {});
    },
  },
  cleanUrls: true,
  appearance: {
    initialValue: 'dark',
  },
  themeConfig: {
    externalLinkIcon: true,
    outline: {
      level: [2,3],
    },
    search: {
      provider: 'local',
    },
    siteTitle: false,
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Contributing',
        link: '/contributing'
      }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction',
      },
      {
        text: 'Analogue Photography',
        collapsed: true,
        items: [
          { text: 'Getting started', link: '/analogue-photography/getting-started' },
          { text: 'Choosing and loading film', link: '/analogue-photography/choosing-and-loading-film' },
          { text: 'Exposing a scene', link: '/analogue-photography/exposing-a-scene' },
          { text: 'Focusing on subjects', link: '/analogue-photography/focusing-on-subjects' },
          { text: 'Completing your first roll', link: '/analogue-photography/completing-your-first-roll' },
        ]
      },
      {
        text: 'Film Developing',
        collapsed: true,
        items: [
          { text: 'Getting started', link: '/film-developing/getting-started' },
          { text: 'Equipment & materials', link: '/film-developing/equipment-and-materials' },
          { text: 'Loading a developing tank', link: '/film-developing/loading-a-developing-tank' },
          {
            text: 'Developing film',
            collapsed: true,
            items: [
              { text: 'Black & white process', link: '/film-developing/black-and-white-process' },
              { text: 'C41 process', link: '/film-developing/c41-process' },
            ]
          },
          { text: 'Washing & drying film', link: '/film-developing/washing-and-drying-film' },
          { text: 'Scanning film', link: '/film-developing/scanning-film' },
        ]
      },
      {
        text: 'Darkroom Printing',
        collapsed: true,
        items: [
          { text: 'Coming soon'}
        ]
      },
      {
        text: 'List of illustrations',
        link: '/list-of-illustrations'
      },
      {
        text: 'Appendix',
        link: '/appendix'
      },
      {
        text: 'Glossary',
        link: '/glossary'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JClique/NegDevDocs' }
    ]
  }
})
