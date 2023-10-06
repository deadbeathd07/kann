<template lang="pug">
section.list-section
  h6.list-section__title.fs-14.ls-03 {{ props.listSection.title }}
  KannList(:list='props.listSection.menu', :classList='props.classList')
</template>

<script setup>
import KannList from './KannList.vue';

const props = defineProps({
	listSection: {
		type: Object,
		required: true,
	},
	classList: {
		type: String,
	},
});
</script>

<style lang="scss">
.list-section {
	&__title {
		color: #1a1818;
		font-weight: normal;
		text-transform: lowercase;
	}
}
</style>
