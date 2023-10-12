<template lang="pug">
a.link.link--hover(:href="props.path") {{ props.text }}
</template>

<script setup>
const props = defineProps({
	path: {
		type: String,
		default: '#',
	},
	text: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss">
.link {
	$color: #1a1818;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
	text-transform: lowercase;
	color: $color;
	&--hover:hover {
		color: lighten($color, $amount: 60);
		text-decoration: underline;
		text-underline-offset: 5px;
	}
}
</style>
