<template lang="pug">
ul.list(:class="classList")
  li.list__item(v-for="(item, i) in props.list", :key="i")
    KannLink(:text="item.name")
</template>

<script setup>
import KannLink from './KannLink.vue';
const props = defineProps({
	list: {
		type: Array,
		required: true,
	},
	classList: {
		type: String,
	},
});
</script>

<style lang="scss">
.list {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
</style>
