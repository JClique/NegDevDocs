<template>
	<div class="grid space-y-4 py-4 sm:grid-cols-2 sm:gap-8 sm:space-y-0">
		<div class="sm:grid-cols-2 sm:space-y-0">
			<field-item
				v-model="form.filmStock"
				label="Film stock"
				name="film_stock"
				type="select"
				placeholder="Select a film stock"
				:options-array="
					filmStockArray.map((fs) => {
						return {
							value: fs.slug,
							label: fs.label,
							disabled: selectedDilution
								? !selectedDilution.starting_times_array.filter(
										(st) => st.film_slug.toString() === fs.slug,
									).length
								: false,
						};
					})
				"
				@input="
					form.filmIso = null;
					form.optimiseForGrain = false;
					form.optimiseForTime = false;
				"
			/>

			<field-item
				v-show="form.filmStock"
				v-model="form.filmIso"
				label="Film ISO"
				name="film_iso"
				type="radio"
				:disabled="!form.filmStock"
				placeholder="Select a film speed"
				:options-array="
					filmSpeedArray.map((fs) => {
						return {
							value: fs,
							label: fs,
							disabled: selectedDilution
								? !selectedDilution.starting_times_array.filter(
										(st) =>
											st.iso.toString() === fs.toString() &&
											st.film_slug.toString() === form.filmStock,
									).length
								: false,
						};
					})
				"
				@input="
					form.optimiseForGrain = false;
					form.optimiseForTime = false;
				"
			/>
		</div>

		<div class="sm:grid-cols-2 sm:space-y-0">
			<field-item
				v-model="form.filmDeveloper"
				label="Film developer"
				name="film_developer"
				type="select"
				placeholder="Select a film developer"
				:options-array="
					filmDeveloperArray.map((fd) => {
						return {
							value: fd.slug,
							label: fd.label,
						};
					})
				"
			/>

			<field-item
				v-show="selectedDeveloper"
				v-model="form.developerDilution"
				label="Developer dilution"
				name="developer_dilution"
				type="radio"
				:disabled="!form.filmDeveloper"
				placeholder="Select a film developer dilution"
				:options-array="
					selectedDeveloper?.dilution_array?.map((fd) => {
						return {
							value: fd.slug,
							label: fd.label,
						};
					})
				"
				@input="
					form.optimiseForGrain = false;
					form.optimiseForTime = false;
				"
			/>

			<field-item
				v-if="selectedDeveloper"
				v-model="form.developerTemperature"
				label="Developer temperature"
				:help-text="`This assumes a <a href='/glossary#temperature-coefficient'>temperature coefficient</a> of around 2.5`"
				name="developer_temperature"
				type="range"
				suffix="ºC"
				:minimum-value="18"
				:maximum-value="27"
				:disabled="!form.filmDeveloper"
				@input="
					form.optimiseForGrain = false;
					form.optimiseForTime = false;
				"
			/>
		</div>
	</div>

	<field-item
		v-model="form.rotaryProcessor"
		label="Using a rotary processor"
		help-text="A reduction of 15% will be applied to compensate for higher levels of agitation"
		name="rotation_compensation"
		type="checkbox"
	/>

	<hr v-if="developingTime" />

	<span
		v-if="developingTime"
		class="flex flex-col py-6 text-sm/6"
	>
		<span class="block font-medium">Developing time: </span>
		<span
			:class="subFiveMinutes || warmDeveloper ? 'text-red-600' : 'text-black'"
			class="block text-lg"
		>
			{{
				developingTime.seconds
					? `${developingTime.minutes} minutes ${developingTime.seconds} seconds`
					: `${developingTime.minutes} minutes`
			}}
		</span>
	</span>

	<field-item
		v-if="developingTime"
		label="Optimise for high grain / quick developing time"
		help-text="Developer temperature and dilution will be set automatically to achieve the quickest results, which generally increases perceived grain."
		button-label="Optimise"
		:disabled="form.optimiseForTime"
		name="optimise_for_time"
		type="action"
		@click="optimiseForTime"
	/>

	<field-item
		v-if="developingTime"
		label="Optimise for for low grain / slow developing time"
		help-text="Developer temperature and dilution will be set automatically to achieve the slowest results, which generally reduces perceived grain."
		button-label="Optimise"
		name="optimise_for_grain"
		:disabled="form.optimiseForGrain"
		type="action"
		@click="optimiseForGrain"
	/>

	<v-p-container
		v-if="subFiveMinutes"
		type="danger"
		title="⚠ Time too short"
		description="Film developed for less than 5 minutes may cause uneven development"
	/>

	<v-p-container
		v-if="warmDeveloper"
		type="warning"
		title="⚠ Developer too warm"
		description="Film developed above 24°C may cause damage to the emulsion"
	/>
</template>

<script>
	import FieldItem from "../field-item.vue";
	import { useForm } from "../form-helper.ts";
	import FilmStockArray from "../enumerables/film-stock-array.json";
	import FilmDeveloperArray from "../enumerables/film-developer-array.json";
	import TempCompensationArray from "../enumerables/temp-compensation-array.json";
	import VPContainer from "../vitepress-extensions/VPContainer.vue";

	export default {
		name: "BlackAndWhiteDevelopingTimeCalculator",
		components: { VPContainer, FieldItem },

		data() {
			return {
				form: useForm({
					filmStock: null,
					filmIso: null,
					filmDeveloper: null,
					developerDilution: null,
					developerTemperature: 20,
					rotaryProcessor: false,
					optimiseForTime: false,
					optimiseForGrain: false,
				}),
				filmStockArray: FilmStockArray,
				filmDeveloperArray: FilmDeveloperArray,
				tempCompensationArray: TempCompensationArray,
			};
		},

		computed: {
			filmSpeedArray() {
				if (!this.form.filmStock) return [];
				const selectedFilmStock = this.filmStockArray.find((fs) => fs.slug === this.form.filmStock);
				if (!selectedFilmStock) return [];
				return selectedFilmStock.iso_array;
			},

			selectedDeveloper() {
				return this.filmDeveloperArray.find((d) => {
					return d.slug === this.form.filmDeveloper;
				});
			},

			selectedDilution() {
				if (!this.form.developerDilution || !this.selectedDeveloper) return;
				return this.selectedDeveloper.dilution_array.find((d) => {
					return d.slug === this.form.developerDilution;
				});
			},

			subFiveMinutes() {
				if (!this.developingTime || !this.developingTime.minutes) return;
				return this.developingTime.minutes < 5;
			},

			warmDeveloper() {
				return Number(this.form.developerTemperature) > 24;
			},

			developingTime() {
				if (
					!this.selectedDeveloper ||
					!this.selectedDilution ||
					!this.form.filmIso ||
					!this.form.filmStock ||
					!this.form.developerTemperature
				)
					return;

				const startingTime = this.selectedDilution.starting_times_array.find(
					(st) => st.film_slug === this.form.filmStock && st.iso.toString() === this.form.filmIso.toString(),
				);
				if (!startingTime) return;

				const timeAdjustQuarteredMinutes = (quarteredMinutes) => {
					const temperatureCompensation = this.tempCompensationArray.find((t) => {
						return t["20"] === Number(quarteredMinutes);
					});
					if (!temperatureCompensation || !temperatureCompensation[this.form.developerTemperature])
						return quarteredMinutes;
					return temperatureCompensation[this.form.developerTemperature];
				};

				const adjustedTime = startingTime.time * (this.form.rotaryProcessor ? 0.85 : 1),
					decimalMinutes = Math.round(adjustedTime * 10) / 10,
					quarteredMinutes = (Math.round(decimalMinutes * 4) / 4).toFixed(2),
					tempAdjustedMinutes = timeAdjustQuarteredMinutes(quarteredMinutes),
					fullMinutes = Math.trunc(tempAdjustedMinutes),
					remainingSeconds = Math.floor((tempAdjustedMinutes - fullMinutes) * 60);

				return {
					tempAdjustment: tempAdjustedMinutes,
					minutes: fullMinutes,
					seconds: remainingSeconds,
				};
			},
		},

		methods: {
			optimiseForTime() {
				this.form.optimiseForGrain = false;
				this.form.optimiseForTime = true;
				this.form.developerTemperature = 24;
				this.form.developerDilution = "stock";
			},

			optimiseForGrain() {
				this.form.optimiseForTime = false;
				this.form.optimiseForGrain = true;
				this.form.developerTemperature = 18;
				this.form.developerDulution = "1-an-3";
			},
		},
	};
</script>
