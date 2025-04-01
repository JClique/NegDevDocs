<template>
	<div class="bg-[var(--vp-c-bg-soft)] pb-24 sm:pb-32 pt-12 sm:pt-20">
		<div
			v-if="title || description"
			class="mx-auto max-w-2xl lg:text-center px-6 lg:px-8">
			<span class="block mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
				{{ title }}
			</span>
			<span
				class="block mt-6 text-pretty text-lg/8 text-[var(--vp-c-text-2)]"
				v-html="description"
			/>
		</div>
		<v-spacer class="mt-20 mb-20" />
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
			<article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
				<span
					id="featured-post"
				    class="block my-4 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
					{{ articles[0].title }}
				</span>
				<span class="mt-4 leading-8">
					{{ articles[0].description }}
				</span>
				<div
					class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
					<div class="flex">
						<a
							:href="articles[0].url"
							class="text-sm/6 font-semibold text-indigo-600"
							aria-describedby="featured-post">
							Continue reading
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</article>
			<div
				class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
				<div class="-my-12 divide-y divide-gray-900/10">
					<article class="py-12">
						<div class="group relative max-w-xl">
							<span
								id="featured-post-1"
							    class="block my-4 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
								{{ articles[1].title }}
							</span>
							<span class="mt-4 text-sm/6">
								{{ articles[1].description }}
							</span>
							<span
								class="block mt-4 text-sm/6 font-semibold text-indigo-600">
								<a
									:href="articles[1].url"
									class="text-sm/6 font-semibold text-indigo-600"
									aria-describedby="featured-post-1">
									<span class="absolute inset-0"></span>
									Continue reading
									<span aria-hidden="true">&rarr;</span>
								</a>
							</span>
						</div>
					</article>

					<article class="py-12">
						<div class="group relative max-w-xl">
							<span
								id="featured-post-1"
							    class="block my-4 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
								{{ articles[2].title }}
							</span>
							<span class="mt-4 text-sm/6">
								{{ articles[2].description }}
							</span>
							<span
								class="block mt-4 text-sm/6 font-semibold text-indigo-600">
								<a
									:href="articles[2].url"
									class="text-sm/6 font-semibold text-indigo-600"
									aria-describedby="featured-post-1">
									<span class="absolute inset-0"></span>
									Continue reading
									<span aria-hidden="true">&rarr;</span>
								</a>
							</span>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VSpacer from './v-spacer.vue';

export default {
	name: 'VFeaturedPost',
	components: {VSpacer},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		articles: {
			type: Array,
			required: true,
		}
	},
}
</script>