<template lang="pug">
h2.title {{ props.text }}
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss">
.title {
	font-weight: bold;
	color: $color;
	font-size: 60px;
	letter-spacing: 1.2px;
	@media (max-width: 820px) {
		font-size: 48px;
	}
}
</style>
