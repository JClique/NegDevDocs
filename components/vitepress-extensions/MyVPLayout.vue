<script setup>
	import DefaultTheme from "vitepress/theme";
	import { VPBadge } from "vitepress/theme";
	import VPPrintHeader from "./VPPrintHeader.vue";
	import GlossaryModal from "../GlossaryModal.vue";
	import { ref, onMounted } from "vue";
	import { useRouter } from "vitepress";
	import mediumZoom from "medium-zoom";
	import glossaryData from "../../docs/.vitepress/glossary-data.json";

	const { Layout } = DefaultTheme;
	const router = useRouter();

	const versionNumber = import.meta.env.VITE_DOCS_VERSION_NUMBER;

	const isModalOpen = ref(false);
	const currentTerm = ref(null);

	const setupMediumZoom = () => {
		mediumZoom("[data-zoomable]", {
			background: "transparent",
		});
	};

	const handleGlossaryClick = (e) => {
		const link = e.target.closest("a");
		if (!link) return;

		const href = link.getAttribute("href");
		if (!href || !href.startsWith("/glossary#")) return;

		const termId = href.split("#")[1];

		if (glossaryData[termId]) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();

			currentTerm.value = { ...glossaryData[termId], id: termId };
			isModalOpen.value = true;
		}
	};

	onMounted(() => {
		setupMediumZoom();
		document.addEventListener("mousedown", handleGlossaryClick, true);
		document.addEventListener("touchstart", handleGlossaryClick, true);
	});

	router.onAfterRouteChanged = setupMediumZoom;
</script>

<template>
	<Layout>
		<template #sidebar-nav-after>
			<VPBadge
				v-if="versionNumber"
				style="margin-left: -0.75rem"
				:text="`Version ${versionNumber}`"
			/>
		</template>

		<template #doc-before>
			<VPPrintHeader />
		</template>
	</Layout>

	<GlossaryModal
		:is-open="isModalOpen"
		:term="currentTerm"
		@close="isModalOpen = false"
	/>
</template>

<style>
	.medium-zoom-overlay {
		backdrop-filter: blur(5rem);
	}

	.medium-zoom-overlay,
	.medium-zoom-image--opened {
		z-index: 999;
	}
</style>
