<template>
	<div class="bg-[var(--vp-c-bg-soft)]">
		<div class="mx-auto max-w-5xl">
			<span class="px-8 py-12 text-2xl font-semibold tracking-tight text-[var(--vp-c-text-1)] sm:text-3xl">
				{{ title }}
			</span>
			<p
				v-if="description"
				class="px-8 text-[var(--vp-c-text-2)]"
			>
				{{ description }}
			</p>
			<dl
				class="mt-20 divide-y divide-[var(--vp-c-bg-soft)] rounded-md bg-gray-200 px-8 py-12 backdrop-blur-lg dark:bg-white/10"
			>
				<div
					v-for="(section, sectionKey) in sections"
					:key="sectionKey"
					class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
				>
					<dt class="text-base/7 font-semibold text-[var(--vp-c-text-1)] lg:col-span-5">
						{{ section.title }}
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<span class="text-base/7 text-[var(--vp-c-text-1)]">
							{{ section.description }}
						</span>
						<div
							v-if="section.url"
							class="mt-10 flex"
						>
							<a
								:href="section.url"
								class="mt-4 block"
							>
								{{ section.linkTitle || "Read more" }}
								<span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name: "VFaqBlock",
		props: {
			title: {
				type: String,
				default: undefined,
			},
			description: {
				type: String,
				default: undefined,
			},
			sections: {
				type: Array,
				default: () => [],
			},
		},
	};
</script>
