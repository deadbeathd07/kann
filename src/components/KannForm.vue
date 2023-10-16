<template lang="pug">
form.form
  h3.form__title(v-if="props.formContent.title") {{ props.formContent.title }}
  div.form__fields-wrapper
    input.form__field(type="email", name="form__email", :placeholder="props.formContent.placeholder")
    KannButton.form__button(type="submit", :text="props.formContent.button_text")
</template>

<script setup>
import KannButton from './KannButton.vue';

const props = defineProps({
	formContent: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss">
.form {
	&__title {
		max-width: 70%;
		margin-bottom: 25px;
	}
	&__fields-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	&__field {
		font-size: inherit;
		border: none;
		flex-grow: 1;
	}
	&__button {
		flex-grow: 0;
		margin-left: 20px;
	}
}
</style>
