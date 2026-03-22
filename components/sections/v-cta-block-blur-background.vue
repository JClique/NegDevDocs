<template>
	<div class="bg-[var(--vp-c-bg-soft)]">
		<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
			<div
				class="relative isolate overflow-hidden bg-[var(--vp-c-bg-elv)] px-6 py-24 text-center shadow-2xl dark:bg-[var(--vp-c-bg-soft)] sm:rounded-3xl sm:px-16"
			>
				<h2 class="text-balance text-4xl font-semibold tracking-tight text-[var(--vp-c-text-1)] sm:text-5xl">
					{{ title }}
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-[var(--vp-c-text-2)]">
					{{ description }}
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						v-if="buttonMode"
						:href="linkUrl"
						class="rounded-md bg-[var(--vp-c-brand-1)] px-3.5 py-2.5 text-sm font-semibold text-[var(--vp-c-bg)] shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vp-c-brand-1)]"
					>
						{{ linkTitle }}
					</a>
					<a
						v-else
						:href="linkUrl"
						class="text-sm/6 font-semibold text-[var(--vp-c-brand-1)]"
					>
						{{ linkTitle }}
						<span aria-hidden="true">→</span>
					</a>
				</div>
				<svg
					viewBox="0 0 1024 1024"
					aria-hidden="true"
					class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
				>
					<circle
						r="512"
						cx="512"
						cy="512"
						fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
						fill-opacity="0.7"
					/>
					<defs>
						<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
							<stop stop-color="#7775D6" />
							<stop
								offset="1"
								stop-color="#E935C1"
							/>
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-cta-block-blur-background",
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
				required: true,
			},
			linkTitle: {
				type: String,
				required: true,
			},
			buttonMode: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>
