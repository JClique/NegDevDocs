<template>
	<div
		class="px-8 py-12 sm:py-20 bg-[var(--vp-c-bg)] dark:bg-[var(--vp-c-bg-alt)]">
		<div
			v-if="title"
			class="mx-auto max-w-2xl lg:text-center">
			<span class="block mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
				{{ title }}
			</span>
			<span
				class="block mt-6 text-pretty text-lg/8 text-[var(--vp-c-text-2)]"
				v-html="description"
			/>
		</div>
		<v-spacer v-if="title" class="mt-20 mb-20" />
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<dl class="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
				<div class="relative pl-16">
					<dt class="text-base/7 font-semibold">
						<div
							class="p-2 absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-800 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.-->
								<path
									d="M64 64C46.3 64 32 78.3 32 96l0 233.4 67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4 480 96c0-17.7-14.3-32-32-32L64 64zM32 374.6L32 416c0 17.7 14.3 32 32 32l41.4 0 96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448 448 448c17.7 0 32-14.3 32-32l0-105.4-90.3-90.3zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
									fill="currentColor"/>
							</svg>
						</div>
						<span>{{ blocks[0].title }}</span>
					</dt>
					<dd class="block mt-2 text-base/7">
						{{ blocks[0].description }}
					</dd>
					<a
						v-if="blocks[0].url"
						:href="blocks[0].url"
						class="mt-4 block">
						Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
				<div class="relative pl-16">
					<dt class="text-base/7 font-semibold">
						<div
							class="p-2 absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-800 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z" fill="currentColor"/></svg>
						</div>
						<span>{{ blocks[1].title }}</span>
					</dt>
					<dd class="block mt-2 text-base/7">
						{{ blocks[1].description }}
					</dd>
					<a
						v-if="blocks[1].url"
						:href="blocks[1].url"
						class="mt-4 block">
						Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
				<div class="relative pl-16">
					<dt class="text-base/7 font-semibold">
						<div
							class="p-2 absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-800 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d="M48 112l0-32 32 0 0 32-32 0zM16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48C26.7 48 16 58.7 16 72zm160 8c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L176 80zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zM48 240l32 0 0 32-32 0 0-32zm-8-32c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0zm8 224l0-32 32 0 0 32-32 0zM16 392l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" fill="currentColor"/></svg>
						</div>
						<span>{{ blocks[2].title }}</span>
					</dt>
					<dd class="block mt-2 text-base/7">
						{{ blocks[2].description }}
					</dd>
					<a
						v-if="blocks[2].url"
						:href="blocks[2].url"
						class="mt-4 block">
						Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
				<div class="relative pl-16">
					<dt class="text-base/7 font-semibold">
						<div
							class="p-2.5 absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-800 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l368 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-66.7c18.6-6.6 32-24.4 32-45.3l0-320c0-26.5-21.5-48-48-48L64 0zM384 416l0 64L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l32 0 0 352-32 0zm64 0l0-352 272 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-272 0zm48-240c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z" fill="currentColor"/></svg>
						</div>
						<span>{{ blocks[3].title }}</span>
					</dt>
					<dd class="block mt-2 text-base/7">
						{{ blocks[3].description }}
					</dd>
					<a
						v-if="blocks[3].url"
						:href="blocks[3].url"
						class="mt-4 block">
						Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</dl>
		</div>
	</div>
</template>

<script>
import VSpacer from './v-spacer.vue';
export default {
	name: "VCTA2x2Block",
	components: {
		VSpacer
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		blocks: {
			type: Array,
			default: () => [],
		}
	}
}
</script>