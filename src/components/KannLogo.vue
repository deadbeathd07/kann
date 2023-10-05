<template lang="pug">
img(:src='logo' :class="props.class" :alt="alt")
</template>

<script setup>
import logo from '../assets/logo.svg';

const props = defineProps({
	class: {
		type: [String, Array],
	},
	alt: {
		type: String,
	},
});
</script>

<style lang="scss"></style>
