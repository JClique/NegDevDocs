<template>
	<div
		:class="type === 'action' ? 'space-x-4' : null"
		class="flex items-center justify-between py-2"
	>
		<div class="w-full">
			<div
				v-if="!['checkbox', 'radio'].includes(type)"
				class="flex items-center justify-between space-x-4"
			>
				<label
					v-if="label"
					:for="name"
					class="flex flex-grow text-sm/6 font-medium"
				>
					{{ label }}
				</label>
				<input
					ref="input"
					:value="modelValue"
					v-if="type === 'range'"
					type="range"
					:name="`${name}_range`"
					:id="id"
					:min="minimumValue"
					:max="maximumValue"
					:disabled="disabled"
					:class="styleClass"
					class="h-2 cursor-pointer appearance-none rounded-lg bg-gray-200 focus:-outline-offset-2 dark:bg-gray-700"
					@input="onInput"
				/>
			</div>
			<div class="relative mt-2">
				<div
					v-show="prefix || (type === 'select' && !modelValue && placeholder)"
					ref="prefix"
					:class="floatingTextClass"
					class="pointer-events-none absolute left-2 top-2 shrink-0 translate-y-px transform select-none px-1 text-base sm:text-sm"
				>
					{{ type === "select" && !modelValue && placeholder ? placeholder : prefix }}
				</div>
				<input
					ref="input"
					:value="modelValue"
					v-if="['text', 'email', 'number', 'range'].includes(type)"
					:type="type === 'range' ? 'text' : type"
					:name="name"
					:id="id"
					:autocomplete="autocomplete"
					:placeholder="placeholder"
					:disabled="disabled"
					:class="[styleClass, defaultClass]"
					:style="{ paddingLeft: floatingRight + 'px' }"
					class="block"
					@keydown="onInput"
					@input="onInput"
					@blur="enforceValidation"
				/>
				<textarea
					ref="input"
					:value="modelValue"
					v-if="type === 'textarea'"
					:name="name"
					:id="id"
					:autocomplete="autocomplete"
					:placeholder="placeholder"
					:disabled="disabled"
					rows="3"
					:class="[styleClass, defaultClass]"
					:style="{ paddingLeft: floatingRight + 'px' }"
					@input="onInput"
					@blur="enforceValidation"
				/>
				<select
					ref="input"
					:value="modelValue"
					v-if="type === 'select'"
					:name="name"
					:id="id"
					:disabled="disabled"
					:autocomplete="autocomplete"
					:class="[styleClass, defaultClass]"
					:style="{ paddingLeft: floatingRight + 'px' }"
					@input="onInput"
				>
					<option
						v-for="(option, optionKey) in optionsArray"
						:key="`${name}-option-${optionKey}`"
						:value="option.value"
						:disabled="option.disabled"
					>
						{{ option.label }}
					</option>
				</select>
				<svg
					v-if="type === 'select'"
					class="pointer-events-none absolute right-2 top-2.5 size-5 text-gray-500 sm:size-4"
					viewBox="0 0 16 16"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
				<label
					v-if="type === 'checkbox'"
					class="flex gap-3"
				>
					<span class="flex h-6 shrink-0 items-center">
						<span class="group grid size-4 grid-cols-1">
							<input
								:id="id"
								:aria-labelledby="`${name}-label`"
								:aria-describedby="`${name}-description`"
								:name="name"
								:disabled="disabled"
								type="checkbox"
								:checked="modelValue"
								@change="$emit('update:model-value', !Boolean(modelValue))"
								class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
							/>
							<svg
								class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									class="opacity-0 group-has-[:checked]:opacity-100"
									d="M3 8L6 11L11 3.5"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									class="opacity-0 group-has-[:indeterminate]:opacity-100"
									d="M3 7H11"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</span>
					<span class="text-sm/6">
						<span
							:id="`${name}-label`"
							class="font-medium text-gray-900"
						>
							{{ label }}
						</span>
						<span
							:id="`${name}-description`"
							class="block text-xs text-gray-500"
						>
							{{ helpText }}
						</span>
					</span>
				</label>
				<fieldset v-if="type === 'radio'">
					<legend
						:class="disabled ? 'text-gray-300' : 'text-gray-900'"
						class="text-sm/6 font-medium"
					>
						{{ label }}
					</legend>
					<span
						:class="disabled ? 'text-gray-200' : 'text-gray-600'"
						class="mt-1 text-xs/6 text-gray-600"
					>
						{{ helpText }}
					</span>
					<div class="my-3 space-y-4">
						<label
							v-for="(option, optionKey) in optionsArray"
							:key="`radio-option-${optionKey}`"
							class="flex items-center gap-x-3"
						>
							<input
								:id="option.id"
								:name="option.name || option.label"
								type="radio"
								:value="option.value"
								:disabled="disabled || option.disabled"
								:checked="isChecked(option)"
								@change="onInput"
								class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
							/>
							<span>
								<span
									:class="disabled || option.disabled ? 'text-gray-300' : 'text-gray-900'"
									class="block text-xs/4 font-medium"
								>
									{{ option.label }}
								</span>
								<span
									v-if="option.helpText"
									:class="disabled || option.disabled ? 'text-gray-200' : 'text-gray-600'"
									class="mt-1 block text-xs/4 text-gray-600"
								>
									{{ option.helpText }}
								</span>
							</span>
						</label>
					</div>
				</fieldset>
				<div
					v-if="suffix"
					:class="floatingTextClass"
					class="pointer-events-none absolute top-1/2 shrink-0 -translate-y-1/2 transform select-none text-base sm:text-sm"
					:style="{ left: floatingLeft + 'px' }"
				>
					{{ suffix }}
				</div>
			</div>
			<span
				v-if="helpText && !['checkbox', 'radio'].includes(type)"
				:class="disabled ? 'text-gray-500' : 'text-gray-600'"
				class="mt-2 block text-xs dark:text-gray-400"
				v-html="helpText"
			/>
			<span
				v-if="suffix"
				ref="modelValueWidth"
				class="absolute -right-3/4 -top-3/4 whitespace-pre text-base opacity-0 sm:text-sm/6"
			>
				{{ type === "select" ? selectedOptionLabel : modelValue }}
			</span>
		</div>
		<div
			v-if="type === 'action'"
			class="w-max flex-grow"
		>
			<v-button
				:disabled="disabled"
				:name="`${name}_button`"
				:label="buttonLabel"
				@click="$emit('click', $event)"
			/>
		</div>
	</div>
</template>

<script>
	import VButton from "./v-button.vue";
	import _ from "lodash";
	export default {
		name: "FieldItem",
		components: {
			VButton,
		},
		props: {
			modelValue: {
				type: [String, Number, Boolean, null],
			},
			type: {
				type: String,
				default: "text",
				validator(value) {
					return [
						"text",
						"textarea",
						"number",
						"email",
						"range",
						"select",
						"radio",
						"checkbox",
						"file",
						"action",
					].includes(value);
				},
			},
			name: {
				type: String,
				required: true,
			},
			label: {
				type: String,
				default: undefined,
			},
			helpText: {
				type: String,
				default: undefined,
			},
			id: {
				type: String,
				default: undefined,
			},
			autocomplete: {
				type: String,
				default: undefined,
			},
			placeholder: {
				type: String,
				default: undefined,
			},
			optionsArray: {
				type: Array,
				default: () => [],
			},
			prefix: {
				type: String,
				default: undefined,
			},
			suffix: {
				type: String,
				default: undefined,
			},
			minimumValue: {
				type: Number,
				default: undefined,
			},
			maximumValue: {
				type: Number,
				default: undefined,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			buttonLabel: {
				type: String,
				default: "Click me",
			},
		},

		data() {
			return {
				floatingLeft: 0,
				floatingRight: 10,
			};
		},

		watch: {
			optionsArray: {
				deep: true,
				handler(oldV, newV) {
					const arraysDiffer = (arr1, arr2) => {
						return !_.isEqual(arr1, arr2);
					};

					if (arraysDiffer(oldV, newV)) this.enforceValidation();
				},
			},
		},

		computed: {
			floatingTextClass() {
				if (!this.isValid) return "text-red-500";
				if (this.disabled) return "text-gray-300";
				return "text-gray-500 dark:text-gray-400";
			},

			selectedOptionLabel() {
				if (this.type !== "select") return this.modelValue;
				const selectedOption = this.optionsArray.find((o) => o.value === this.modelValue);
				if (!selectedOption || !Object.hasOwn(selectedOption, "label")) return this.modelValue;
				return selectedOption.label;
			},

			isValid() {
				if (this.minimumValue) {
					return Number(this.modelValue) >= this.minimumValue;
				}
				if (this.maximumValue) {
					return Number(this.modelValue) < this.maximumValue;
				}
				return true;
			},
			styleClass() {
				const textClass = this.disabled
					? "text-gray-300"
					: "text-gray-900 dark:text-gray-100 placeholder:text-gray-500";
				if (this.isValid) return `border-gray-300 ${textClass}`;
				return "border-red-500 text-red-600 placeholder:text-red-400 ring-red-400";
			},
			defaultClass() {
				return "w-full rounded-md border bg-white dark:bg-[var(--vp-c-bg)] px-3 py-1.5 text-base ring-blue-300 ring-offset-2 ring-offset-transparent focus:ring-2 sm:text-sm/6";
			},
		},

		mounted() {
			this.updateSuffixPosition();
		},

		methods: {
			isChecked(option) {
				if (!this.modelValue || !["checkbox", "radio"].includes(this.type)) return;
				return this.modelValue.toString() === option.value.toString();
			},

			updateFloatingPositions() {
				this.updatePrefixPosition();
				this.updateSuffixPosition();
			},

			updatePrefixPosition() {
				let showSelectPlaceholder = this.type === "select" && !this.modelValue && this.placeholder;
				if (showSelectPlaceholder || !this.$refs.prefix) {
					this.floatingRight = 10;
				} else {
					this.floatingRight = this.$refs.prefix?.offsetWidth + 10;
				}
			},

			updateSuffixPosition() {
				if (!this.suffix) return;
				this.$nextTick(() => {
					const paddingLeft = parseFloat(getComputedStyle(this.$refs.input).paddingLeft) || 0,
						modelValueWidth = this.$refs.modelValueWidth?.offsetWidth,
						prefixWidth = this.$refs.prefix?.offsetWidth || 0;

					this.floatingLeft = paddingLeft + modelValueWidth + prefixWidth + 5;
				});
			},

			enforceValidation() {
				if (this.minimumValue && Number(this.modelValue) < this.minimumValue) {
					this.$emit("update:model-value", this.minimumValue);
					this.updateFloatingPositions();
				}
				if (this.maximumValue && Number(this.modelValue) > this.maximumValue) {
					this.$emit("update:model-value", this.maximumValue);
					this.updateFloatingPositions();
				}
				if (["radio", "select"].includes(this.type) && !!this.modelValue) {
					const selectedOption = this.optionsArray.find(
						(o) => o.value.toString() === this.modelValue.toString(),
					);
					if (selectedOption?.disabled) {
						this.$emit("update:model-value", null);
					}
				}

				this.$nextTick(() => {
					this.$emit("validate", this.isValid);
				});
			},

			onInput($event) {
				let newValue = $event.target.value;

				if (["number", "range"].includes(this.type)) {
					if ($event.key === "ArrowUp") {
						newValue = Number(newValue) + 1;
					}

					if ($event.key === "ArrowDown") {
						newValue = Number(newValue) - 1;
					}
				}

				this.$emit("update:model-value", newValue);
				this.updateFloatingPositions();
				this.$nextTick(() => {
					this.$emit("validate", this.isValid);
				});
			},
		},
	};
</script>
