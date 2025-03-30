<template>
	<div class="px-8 sm:px-32 bg-[var(--vp-c-bg-soft)] py-10 sm:py-20">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<span class="block mx-auto max-w-3xl mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
					{{ title }}
				</span>
				<span
					class="block mx-auto mt-10 text-base/7 max-w-3xl"
					v-html="description"
				/>
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
		description: {
			type: String,
			required: true,
		},
	},
}
</script>