<template>
	<div
		:class="type"
		class="custom-block flex flex-col pb-4"
	>
		<p class="custom-block-title">
			<strong>{{ title }}</strong>
		</p>
		<p>
			{{ description }}
		</p>
	</div>
</template>

<script>
	export default {
		name: "VPContainer",
		props: {
			type: {
				type: String,
				default: "tip",
				validator(value) {
					return ["tip", "warning"].includes(value);
				},
			},
			title: {
				type: String,
				default: "tip",
				validator(value) {
					return ["tip", "warning"].includes(value);
				},
			},
			description: {
				type: String,
				default: "tip",
				validator(value) {
					return ["tip", "warning"].includes(value);
				},
			},
		},
	};
</script>
