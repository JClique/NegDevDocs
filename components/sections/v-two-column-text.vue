<template>
	<div class="bg-[var(--vp-c-bg-soft)] px-24 pt-10 sm:px-32 sm:pt-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<span
					class="mt-2 block text-pretty text-3xl font-semibold tracking-tight text-[var(--vp-c-text-1)] sm:text-4xl"
				>
					{{ title }}
				</span>
				<div
					class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-[var(--vp-c-text-2)] lg:max-w-none lg:grid-cols-2"
				>
					<div>
						<span class="block">{{ paragraphs[0] }}</span>
						<span class="mt-8 block">{{ paragraphs[1] }}</span>
					</div>
					<div>
						<span class="block">{{ paragraphs[2] }}</span>
						<span class="mt-8 block">{{ paragraphs[3] }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "VTwoColumnText",
		props: {
			title: {
				type: String,
				required: true,
			},
			paragraphs: {
				type: Array,
				default: () => [],
			},
		},
	};
</script>
