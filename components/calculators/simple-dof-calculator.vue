<template>
	<div class="flex flex-col space-y-4">
		<p class="flex flex-grow text-sm/6 font-medium">
			{{ `Depth of Field of roughly ${form.isValid ? getDepthOfField : "... "}mm` }}
		</p>

		<v-field-item
			v-model="form.focalLength"
			label="Focal length (or 35mm eq)"
			name="focal_length"
			type="range"
			suffix="mm"
			:minimum-value="18"
			:maximum-value="500"
			@validate="form.setValid($event)"
		/>

		<v-field-item
			v-model="form.focusingDistance"
			label="Focusing distance"
			name="focusing_distance"
			type="range"
			:minimum-value="50"
			:maximum-value="1000"
			@validate="form.setValid($event)"
		/>

		<v-field-item
			v-model="form.apertureNumber"
			label="Aperture"
			name="aperture"
			type="select"
			:options-array="
				apertureOptions.map((o) => {
					return {
						value: o,
						label: `f${o}`,
					};
				})
			"
			@validate="form.setValid($event)"
		/>
	</div>
</template>

<script>
	import VFieldItem from "../v-field-item.vue";
	import { useForm } from "../form-helper.ts";

	export default {
		name: "SimpleDoFCalculator",
		components: { VFieldItem },
		data() {
			return {
				form: useForm({
					focalLength: 50,
					apertureNumber: 8,
					focusingDistance: 50,
					circleOfConfusion: 0.024,
				}),
				apertureOptions: [
					1.4, 1.8, 2, 2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22,
				],
			};
		},

		computed: {
			getDepthOfField() {
				return Math.round(
					(2 *
						(this.form.focusingDistance * 10) ** 2 *
						this.form.apertureNumber *
						this.form.circleOfConfusion) /
						this.form.focalLength ** 2,
				);
			},
		},
	};
</script>
