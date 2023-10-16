<template lang="pug">
form.form
  h3.form__title(v-if="formContent.title") {{ formContent.title }}
  input.form__email(type="email", name="form__email")
  KannButton(type="submit", :text="formContent.button_text")
</template>

<script setup>
import KannButton from './KannButton.vue';

const formContent = defineProps({
	formContent: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss"></style>
