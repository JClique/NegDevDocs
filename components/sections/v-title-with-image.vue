<template>
	<div class="overflow-hidden bg-[var(--vp-c-bg-soft)] py-32">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div
				class="max-w-2xl mx-auto grid grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
			>
				<div class="flex flex-col justify-center lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
					<span class="text-4xl font-semibold tracking-tight text-[var(--vp-c-text-1)] sm:text-5xl">
						{{ title }}
					</span>
					<p
						v-if="description"
						class="mt-6 text-base/7"
						v-html="description"
					/>
					<div
						v-if="linkTitle"
						class="mt-10 flex"
					>
						<a
							:href="linkUrl"
							class="rounded-md bg-[var(--vp-c-brand-1)] px-3.5 py-2.5 text-sm font-semibold text-[var(--vp-c-bg)] shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vp-c-brand-1)]"
						>
							{{ linkTitle }}
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>

				<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
					<img
						:src="imageUrl"
						:alt="imageAlt"
						class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-[var(--vp-c-bg-soft)] object-cover max-sm:w-[30rem]"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-title-with-image",
		props: {
			title: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			linkUrl: {
				type: String,
				default: undefined,
			},
			linkTitle: {
				type: String,
				default: undefined,
			},
			imageUrl: {
				type: String,
				required: true,
			},
			imageAlt: {
				type: String,
				required: true,
			},
		},
	};
</script>
