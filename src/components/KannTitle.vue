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
	font-size: calc((100vw - 365px) / (1440 - 365) * (60 - 48) + 48px);
	letter-spacing: 1.2px;
}
</style>
