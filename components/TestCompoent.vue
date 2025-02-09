<template>
<div>
	<p>This is a test {{ count }}</p>
	<button
		type="button"
		@click="count+=1">
		Click me
	</button>
</div>
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {
			count: 0,
		}
	}
}
</script>