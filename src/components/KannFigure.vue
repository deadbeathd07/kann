<template lang="pug">
figure.figure
  img.figure__img(:src="props.path", :alt="props.alt")
  figcaption.figure__figcaption(v-if="props.figcaption") {{ props.figcaption }}
</template>

<script setup>
const props = defineProps({
	path: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	figcaption: {
		type: String,
	},
});
</script>

<style lang="scss">
.figure {
	height: 100%;
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
