<template>
	<div class="px-24 sm:px-32 bg-[var(--vp-c-bg-soft)] pt-10 sm:pt-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<span class="block mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					{{ title }}
				</span>
				<div
					class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
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
	name: 'VTwoColumnText',
	props: {
		title: {
			type: String,
			required: true,
		},
		paragraphs: {
			type: Array,
			default: () => [],
		}
	}
}
</script>