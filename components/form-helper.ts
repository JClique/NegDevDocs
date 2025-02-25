class Form<T extends Record<string, any>> {
	private defaultValues: T;
	private internalValues: T;
	[key: string]: any;

	isValid: boolean = true; // form is valid
	isDefault: boolean = true; // form is set to default values
	isUpdated: boolean = false; // form was updated by the user

	constructor(initialValues: T) {
		this.defaultValues = { ...initialValues };
		this.internalValues = { ...initialValues };

		Object.keys(initialValues).forEach((key) => {
			Object.defineProperty(this, key, {
				get: () => this.internalValues[key as keyof T],
				set: (value) => {
					this.isUpdated = true;
					this.internalValues[key as keyof T] = value;
					this.updateIsDefault();
				},
				enumerable: true,
			});
		});
	}

	setValues(newValues: Partial<T>): void {
		this.internalValues = { ...this.internalValues, ...newValues };
		this.updateIsDefault();
	}

	getValues(): T {
		return { ...this.internalValues };
	}

	setValid(isValid: boolean): void {
		this.isValid = isValid;
	}

	setDefaults(defaultValues: T): void {
		this.defaultValues = { ...defaultValues };
		this.updateIsDefault();
	}

	resetToDefaults(): void {
		this.setValues(this.defaultValues);
		this.isDefault = true;
	}

	private updateIsDefault(): void {
		this.isDefault = Object.keys(this.internalValues).every(
			(key) => this.internalValues[key] === this.defaultValues[key],
		);
	}
}

// Factory function to use instead of `new Form()`
export function useForm(fields: Record<string, any>) {
	return new Form(fields);
}

export default Form;
