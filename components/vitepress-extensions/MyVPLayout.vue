<script setup>
import DefaultTheme from 'vitepress/theme';
import {VPBadge} from 'vitepress/theme';
const { Layout } = DefaultTheme
import { onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";

const router = useRouter();

const versionNumber = import.meta.env.VITE_DOCS_VERSION_NUMBER;

const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

onMounted(setupMediumZoom);

router.onAfterRouteChanged = setupMediumZoom;

</script>

<template>
	<Layout>
		<template #sidebar-nav-after>
			<VPBadge
				v-if="versionNumber"
				style="margin-left: -0.75rem;"
				:text="`Version ${versionNumber}`"
			/>
		</template>
	</Layout>
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