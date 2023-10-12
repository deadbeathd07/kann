<template lang="pug">
div.lang-switcher
  template(v-for='(button, i) in langArr', :key='i')
    KannButton.lang-switcher__button(:text="button")
    template(v-if="i+1 != langArr.length") /
</template>

<script setup>
import KannButton from './KannButton.vue';

const props = defineProps({
	langArr: {
		type: Array,
		required: true,
	},
});
</script>

<style lang="scss"></style>
