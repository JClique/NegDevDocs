<template>
	<component
		:is="linkUrl ? 'a' : 'div'"
		:href="linkUrl"
		class="!no-underline"
	>
		<div
			class="group relative mt-16 cursor-pointer rounded-xl border border-transparent bg-[var(--vp-c-bg-soft)] transition-all duration-300 ease-in-out hover:border-[var(--vp-c-brand-1)]"
		>
			<div
				class="relative h-80 overflow-hidden rounded-bl-none rounded-tl-xl rounded-tr-xl bg-red-800 md:absolute md:left-0 md:h-full md:w-1/3 md:rounded-bl-xl md:rounded-tr-none lg:w-1/2"
			>
				<img
					class="size-full rounded-bl-none rounded-tl-xl rounded-tr-xl object-cover object-top transition-all duration-300 ease-in-out group-hover:opacity-90 md:rounded-bl-xl md:rounded-tr-none"
					:src="imageUrl"
					:alt="title"
				/>
			</div>
			<div class="relative mx-auto max-w-7xl py-12 lg:px-8">
				<div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-12 lg:w-1/2 lg:pl-20 lg:pr-0">
					<span
						v-if="subTitle"
						class="!mt-4 block text-base font-semibold text-red-500"
					>
						{{ subTitle }}
					</span>
					<span class="mt-2 block text-xl font-semibold tracking-tight text-white sm:text-2xl">
						{{ title }}
					</span>
					<span class="mt-6 block text-base/7 text-[var(--vp-c-text-2)]">
						{{ description }}
					</span>
					<div
						v-if="linkUrl && linkTitle"
						class="my-8"
					>
						<a
							:href="linkUrl"
							class="inline-flex items-center space-x-2 text-sm text-[var(--vp-c-brand-1)] !no-underline"
						>
							<span>
								{{ linkTitle }}
							</span>
							<span class="vpi-arrow-right link-text-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</component>
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
	};
</script>
