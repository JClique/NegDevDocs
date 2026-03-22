---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: Negative Development Docs
    text: "Modern documentation for analogue photography, \nfilm developing and \ndarkroom printing processes."
    tagline: Free. Forever. Community-powered.
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
            description: 'Learn how film cameras work, how to choose and prepare a camera, and the essential principles of working with light-sensitive film.',
            url: '/analogue-photography/getting-started',
        },
        {
            title: 'Understanding film developing',
            description: 'Film developing is an essential step in the analogue photography process. Whether you\'re processing film at home or using a lab, our guide to understanding the basics will help you achieve the best results.',
            url:  '/film-developing/getting-started',
        },
        {
            title: 'A beginner’s guide to darkroom printing',
            description: 'Turn your developed negatives into prints. This guide covers workspace setup, basic techniques, and tips to help you improve with practice.',
            url:  '/darkroom-printing/getting-started',
        },
    ]"
/>

<v-cta-2x2-block
    :blocks="[
        {
            title: 'Visual guides & images',
            description: 'Explore diagrams, schematics, and reference images for darkroom setup and processes.',
            url: '/illustrations',
        },
        {
            title: 'Searching',
            description: 'Easily search through all articles to find specific information. Use key phrases or terms to quickly locate relevant content.',
        },
        {
            title: 'Glossary',
            description: 'Confused by a term? Our glossary explains the language of analogue photography.',
            url: '/glossary',
        },
        {
            title: 'Further reading',
            description: 'Deep dives into related topics, techniques, and reference materials.',
            url: '/appendix',
        },
    ]"
/>

<v-one-column-text
    title="Built by the community, for the community"
    description="This documentation is made possible by the support for our <a href='https://www.negativedevelopment.co.uk/' target='_blank'>physical darkroom</a>, a community space hosted at SEESAW, Manchester.
        Workshop sales and direct community support fund both the physical space and this resource. Our goal is to keep analogue photography knowledge accessible to everyone, regardless of location.
    "
/>

<v-spacer/>

<v-one-column-text
    title="Get involved"
    description="Found an error? Know something we don't? Contributions are welcome - see our <a href='/contributing'>contribution guide</a> to learn how you can help."
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
