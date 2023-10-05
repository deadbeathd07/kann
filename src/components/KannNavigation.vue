<template lang="pug">
nav.nav
  KannList(:list='props.menu')
</template>

<script setup>
import KannList from './KannList.vue';

const props = defineProps({
	menu: {
		type: Array,
		required: true,
	},
});
</script>

<style lang="scss"></style>
