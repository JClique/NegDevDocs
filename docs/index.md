---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Negative Development Docs
  text: "Modern documentation for analogue photography, \nfilm developing and \ndarkroom printing processes."
  tagline: Open sourced. Community supported. 
  actions:
    - theme: brand
      text: Get started
      link: /introduction
    - theme: alt
      text: Contributing
      link: /contributing

---

<script setup>
import VCtaBlock from '../components/sections/v-cta-block.vue';
import VCta2x2Block from '../components/sections/v-cta-2x2-block.vue';
import VSpacer from '../components/sections/v-spacer.vue';
import VFeaturedPost from '../components/sections/v-featured-post.vue';
import VOneColumnText from '../components/sections/v-one-column-text.vue';
import VFooter from '../components/sections/v-footer.vue';

import { useData } from 'vitepress';

const { theme } = useData();
const footerGroups = theme.value.sidebar;

</script>

<v-featured-post
    title="Clear, practical guidance for independent learning"
    description="While our <a href='https://negativedevelopment.co.uk/' target='_blank'>physical darkroom</a> offers hands-on workshops, these docs are designed to stand on their own—giving you everything you need to start experimenting with film at home or in your own workspace."
    :articles="[
        {
            title: 'Getting started with analogue photography',
            description: 'Analogue photography involves using light-sensitive film to capture images—a method that predates digital technology but remains deeply valued for its hands-on approach and distinctive results. This guide covers the essential principles of working with film, explains how different types of cameras function, and offers guidance on selecting and preparing a vintage camera for use. It\'s designed to help you build a strong foundation in the medium, with practical advice to support your first steps into film photography.',
            url: '/analogue-photography/getting-started',
        },
        {
            title: 'Understanding film developing',
            description: 'Film developing is an essential step in the analogue photography process. Whether you\'re processing film at home or using a lab, our guide to understanding the basics will help you achieve the best results.',
            url:  '/film-developing/getting-started',
        },
        {
            title: 'A beginner’s guide to darkroom printing',
            description: 'Darkroom printing is the process of turning your developed film into a final photographic print. This guide explains the basic steps involved, from setting up your workspace to making your first print, and offers tips to help you improve with practice.',
            url:  '/darkroom-printing/getting-started',
        },
    ]"
/>

<v-cta-2x2-block
    :blocks="[
        {
            title: 'Visual guides & images',
            description: 'Revisit key diagrams and images in our list of illustrations.',
            url: '/list-of-illustrations',
        },
        {
            title: 'Searching',
            description: 'Easily search through all articles to find specific information. Use key phrases or terms to quickly locate relevant content.',
        },
        {
            title: 'Glossary',
            description: 'Our glossary explains key terms and phrases to help you understand the language of analogue photography.',
            url: '/glossary',
        },
        {
            title: 'Further reading',
            description: 'The appendix offers in-depth coverage of related topics.',
            url: '/appendix',
        },
    ]"
/>

<v-one-column-text
    title="Why this resource exists"
    description="This documentation is made possible by the support for our <a href='https://www.negativedevelopment.co.uk/' target='_blank'>physical darkroom</a>, a community space hosted in Pollard Yard, Manchester.
        The workshop sales and direct support from our community fund not only the physical space but also the hosting and ongoing development of this resource. 
        Our goal is to ensure that the knowledge and techniques of analogue photography remain accessible to everyone, regardless of location.
    "
/>

<v-spacer/>

<v-one-column-text
    title="Get involved"
    description="We believe knowledge should be open and community-driven. 
        If you find areas that could be improved, expanded, or clarified, we welcome contributions!
        You can find more details on how to contribute in the <a href='/contributing'>contribution guide</a> section of this documentation.
    "
/>


<v-cta-block
    title="Black & white film developing times made easy"
    description="Find the perfect development time for any film and developer combination with our film developing calculator."
    link-title="View calculator"
    link-url="/appendix/black-and-white-film-developing-time-calculator"
    image-url="/images/film-developing-calculator.webp"
/>

<v-footer
    :footer="footerGroups"
/>