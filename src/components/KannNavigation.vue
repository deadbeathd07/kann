<template lang="pug">
nav.nav
  KannList(:list='props.menu', :classList="classList")
</template>

<script setup>
import KannList from './KannList.vue';

const props = defineProps({
	menu: {
		type: Array,
		required: true,
	},
	classList: {
		type: String,
	},
});
</script>

<style lang="scss"></style>
