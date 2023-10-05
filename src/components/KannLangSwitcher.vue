<template lang="pug">
div.lang-switcher
  button(v-for='(button, i) in langArr', :key='i', type='button') {{ button }}
</template>

<script setup>
const props = defineProps({
	langArr: {
		type: Array,
		required: true,
	},
});
</script>

<style lang="scss"></style>
