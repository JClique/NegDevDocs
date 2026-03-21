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
						return "rounded border border-indigo-500 bg-transparent px-2 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm hover:bg-indigo-500/10 dark:hover:bg-indigo-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";
					case "main":
						return "rounded bg-indigo-600 dark:bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";
					case "secondary":
						return "rounded border border-indigo-500/50 dark:border-indigo-400/50 bg-transparent px-2 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm hover:border-indigo-500 hover:bg-indigo-500/10 dark:hover:bg-indigo-400/20 disabled:opacity-50 disabled:cursor-not-allowed";
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
