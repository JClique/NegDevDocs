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

features:
  - title: "📸&nbsp;&nbsp;Analogue Photography"
    details: "Learn the fundamentals of shooting on film, from choosing and loading your first roll to mastering exposure and focus."
    link: /analogue-photography/getting-started
    linkText: Start reading
  - title: "🎞&nbsp;&nbsp;Film Developing"
    details: "Understand the steps to develop your own film and consistently achieve well-balanced negatives, ready for printing or scanning."
    link: /film-developing/getting-started
    linkText: Start reading
  - title: "🚨&nbsp;&nbsp;Darkroom Printing"
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    linkText: Coming soon
---

<script setup>
import VCtaBlock from '../components/sections/v-cta-block.vue';
</script>

<v-cta-block
    title="Black & white film developing calculator"
    sub-title="Film developing times made easy"
    description="Find the perfect development time for any film and developer combination with our film developing calculator. Adjust for dilution, optimise for time or grain, and fine-tune settings for rotary processors—all in one easy-to-use tool."
    link-title="View calculator"
    link-url="/appendix/black-and-white-film-developing-time-calculator"
    image-url="/images/film-developing-calculator.webp"
/>
