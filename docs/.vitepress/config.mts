import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Negative Development Docs",
  description: "A documentation of analogue photography, film development and darkroom printing processes. ",
  lastUpdated: true,
  head: [
    [
      'script',
      {
        defer: '',
        'data-domain': 'negativedevelopment.co.uk',
        src: 'https://plausible.io/js/script.js'
      }
    ]
  ],
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
    editLink: {
      pattern: 'https://github.com/JClique/NegDevDocs/edit/main/docs/:path'
    },
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
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Contribute',
        link: '/contributing'
      },
      {
        text: 'Visit our darkroom',
        link: 'https://www.negativedevelopment.co.uk/'
      },
    ],

    sidebar: [
      {
        text: 'Analogue Photography',
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
        items: [
          { text: 'Getting started', link: '/film-developing/getting-started' },
          { text: 'Equipment & materials', link: '/film-developing/equipment-and-materials' },
          { text: 'Loading a developing tank', link: '/film-developing/loading-a-developing-tank' },
          {
            text: 'Developing film',
            link: '/film-developing/developing-film',
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
        items: [
          { text: 'Getting started', link: '/darkroom-printing/getting-started' },
          { text: 'Equipment & materials', link: '/darkroom-printing/equipment-and-materials' },
          { text: 'Preparing an enlarger', link: '/darkroom-printing/preparing-an-enlarger' },
          {
            text: 'Making prints',
            link: '/darkroom-printing/makings-prints',
            items: [
              { text: 'Black & white process', link: '/darkroom-printing/black-and-white-process' },
              { text: 'RA4 process', link: '/darkroom-printing/ra4-process' },
            ]
          },
          { text: 'Washing & drying prints', link: '/darkroom-printing/washing-and-drying-prints' },
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
