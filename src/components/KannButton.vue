<template lang="pug">
button.button.button--hover(:type="props.type") {{ props.text }}
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'button',
	},
});
</script>

<style lang="scss">
.button {
	background: none;
	border: none;
	transition: all 0.3s ease-in-out;
	padding: 0;
	color: #1a1818;
	text-transform: lowercase;
	font-size: inherit;
	cursor: pointer;
	&--checked,
	&--hover:hover {
		color: lighten($color: #1a1818, $amount: 60);
		text-decoration: underline;
		text-underline-offset: 5px;
	}
}
</style>
