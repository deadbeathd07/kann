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
	color: #1a1818;
	font-size: 60px;
	letter-spacing: 1.2px;
}
</style>
