<template lang="pug">
ul.list
  li.list__item(v-for="(item, i) in props.list", :key="i") 
    a.link(:href="item.path") {{ item.name }}
</template>

<script setup>
const props = defineProps({
	list: {
		type: Array,
		required: true,
	},
});
</script>

<style lang="scss"></style>
