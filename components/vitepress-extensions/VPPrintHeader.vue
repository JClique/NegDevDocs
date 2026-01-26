<template>
	<div class="VPPrintHeader pt-12 pb-6 flex justify-between items-center w-full border-b border-gray-200 mb-4">
		<img
			class="h-[3.5rem]"
			src="/logo.png"
			alt="Negative Development"
		/>

		<div class="flex items-center">
			<div class="flex flex-col text-right font-regular">
				<span class="text-lg font-bold">Negative Development Documentation</span>
				<span class="text-sm">Read latest version:</span>
				<span class="text-xs">{{ fullUrl }}</span>
			</div>

			<img
				class="pl-4"
				:src="`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(fullUrl)}`"
				alt="QR code for this page"
			/>
		</div>
	</div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { site, page } = useData()

const fullUrl = computed(() => {
	const base = site.value.base || '/'
	const origin = site.value.origin || 'https://docs.negativedevelopment.co.uk'

	const path = page.value.relativePath
		.replace(/\.md$/, '')
		.replace(/index$/, '')

	try {
		return new URL(path, origin + base).toString();
	}
	catch (e) {
		console.error(base);
		console.error(origin);
		console.error(path);

		console.error(e);
	}
})
</script>