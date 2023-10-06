<template lang="pug">
div.lang-switcher
  template(v-for='(button, i) in langArr', :key='i')
    button.button.button--basic-button.button--hover.lang-switcher__button.fs-15(type='button') {{ button }}
    template(v-if="i+1 != langArr.length") /
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
