<template lang="pug">
a.link.link--hover(:href="props.path") {{ props.text }}
</template>

<script setup>
const props = defineProps({
	path: {
		type: String,
		required: true,
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
	text-decoration: none;
	transition: all 0.3s ease-in-out;
	text-transform: lowercase;
	color: #1a1818;
	&--hover:hover {
		color: lighten($color: #1a1818, $amount: 60);
		text-decoration: underline;
		text-underline-offset: 5px;
	}
}
</style>
