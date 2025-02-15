<script setup>
import DefaultTheme from 'vitepress/theme';
import {VPBadge} from 'vitepress/theme';
const { Layout } = DefaultTheme

const versionNumber = import.meta.env.VITE_DOCS_VERSION_NUMBER;
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