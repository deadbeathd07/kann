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
	position: relative;
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__figcaption {
		text-transform: lowercase;
		@media (max-width: 820px) {
			position: absolute;
			top: 0;
			left: 0;
			padding: 0 1rem;
		}
	}
}
</style>
