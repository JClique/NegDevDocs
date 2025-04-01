<template>
	<div class="relative isolate overflow-hidden px-8 sm:px-32 bg-[var(--vp-c-bg-soft)] py-10 sm:py-20">
		<div
			class="mx-auto max-w-7xl lg:px-8">
			<img
				v-if="imageSource"
				class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
				:src="imageSource"
				:alt="imageText"
			/>
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
		imageSource: {
			type: String,
			default: undefined,
		},
		imageText: {
			type: String,
			default: undefined,
		},
		imageRight: {
			type: Boolean,
			default: false,
		}
	},
}
</script>