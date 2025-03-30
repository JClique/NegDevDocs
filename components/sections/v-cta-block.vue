<template>
	<div class="w-full bg-[var(--vp-c-bg-soft)] relative isolate px-6 py-32 sm:py-40 lg:px-8">
		<svg
			class="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true">
			<defs>
				<pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0"
				         patternUnits="userSpaceOnUse">
					<path d="M.5 200V.5H200" fill="none"/>
				</pattern>
			</defs>
			<svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
				<path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
				      stroke-width="0"/>
			</svg>
			<rect width="100%" height="100%" stroke-width="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"/>
		</svg>
		<div class="mx-auto max-w-2xl text-center">
			<span class="block text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
				{{ title }}
			</span>
			<span
				class="block mx-auto mt-6 max-w-xl text-lg/8 text-gray-300"
			    v-html="description"
			/>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					:href="linkUrl">
					{{ linkTitle }}
					<span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "VCTABlock",
	props: {
		title: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		subTitle: {
			type: String,
			default: undefined,
		},
		description: {
			type: String,
			required: true,
		},
		linkUrl: {
			type: String,
			required: true,
		},
		linkTitle: {
			type: String,
			required: true,
		},
	},
}
</script>