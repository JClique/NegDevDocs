<template>
	<button
		:type="type"
		:name="name"
		class="disabled:cursor-not-allowed"
		:class="buttonStyleClass"
		:disabled="disabled"
		@click="onClick"
	>
		<span class="whitespace-nowrap">
			{{ label }}
		</span>
	</button>
</template>

<script>
	export default {
		name: "VButton",
		props: {
			type: {
				type: String,
				default: "button",
				validator(value) {
					return ["button", "submit"].includes(value);
				},
			},
			name: {
				type: String,
				required: true,
			},
			buttonStyle: {
				type: String,
				default: "primary",
				validator(value) {
					return ["primary", "secondary", "main"].includes(value);
				},
			},
			label: {
				type: String,
				required: true,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		},

		computed: {
			buttonStyleClass() {
				switch (this.buttonStyle) {
					case "primary":
						return "rounded bg-gray-100 enabled:bg-indigo-50 px-2 py-1 text-xs font-semibold text-gray-400 enabled:text-indigo-600 shadow-sm enabled:hover:bg-indigo-100";
					case "main":
						return "rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm enabled:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";
					case "secondary":
						return "rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm enabled:hover:bg-white/20";
				}
			},
		},

		methods: {
			onClick($event) {
				this.$emit("click", $event);
			},
		},
	};
</script>
