<template>
	<v-cta-block
		title="Black & white film developing times made easy"
		description="Find the perfect development time for any film and developer combination with our film developing calculator."
		link-title="View calculator"
		link-url="/appendix/black-and-white-film-developing-time-calculator"
		image-url="/images/film-developing-calculator.webp"
	/>

	<v-faq-block
		title="Where to start"
		description="Three interconnected skills form the foundation of analogue photography. Each builds on the last - start with shooting, move to developing, then printing."
		:sections="[
			{
				title: 'Getting started with analogue photography',
				description:
					'Learn what film is and how it captures images. Covers film formats from 35mm to large format, the three main film types, common camera designs, and how to check vintage equipment before your first shoot.',
				url: '/analogue-photography/getting-started',
			},
			{
				title: 'Understanding film developing',
				description:
					'The chemical process that makes your exposed film usable. Learn about black & white and C41 development workflows, and the equipment necessary to develop your own film.',
				url: '/film-developing/getting-started',
			},
			{
				title: 'A beginner\'s guide to darkroom printing',
				description:
					'Learn to create prints using an enlarger, light-sensitive paper, and chemical baths. Covers black & white and RA4 colour print processes, .',
				url: '/darkroom-printing/getting-started',
			},
		]"
	/>

	<v-title-with-image
		title="Clear, practical guidance for independent learning"
		description="While our <a href='https://negativedevelopment.co.uk/' target='_blank'>physical darkroom</a> offers hands-on workshops, these docs are designed to stand on their own—giving you everything you need to start experimenting with film at home or in your own workspace."
		image-url="/images/hands-on-negative-carrier.jpg"
		image-alt="Hands loading a negative carrier"
	/>

	<v-cta-4-block
		:blocks="[
			{
				title: 'Visual guides & images',
				description: 'Explore diagrams, schematics, and reference images for darkroom setup and processes.',
				url: '/illustrations',
			},
			{
				title: 'Searching',
				description:
					'Easily search through all articles to find specific information. Use key phrases or terms to quickly locate relevant content.',
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

	<v-footer :footer="footerGroups" />
</template>

<script setup>
	import { useData } from "vitepress";

	const { theme } = useData();
	const footerGroups = theme.value.sidebar;
	import VCtaBlock from "../components/sections/v-cta-block.vue";
	import VCta4Block from "../components/sections/v-cta-4-block.vue";
	import VSpacer from "../components/sections/v-spacer.vue";
	import VTitleWithImage from "./sections/v-title-with-image.vue";
	import VOneColumnText from "../components/sections/v-one-column-text.vue";
	import VFooter from "./sections/v-footer.vue";
	import VFaqBlock from "./sections/v-faq-block.vue";
</script>
