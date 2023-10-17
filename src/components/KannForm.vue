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
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		height: 100px;
	}
	&__field {
		max-width: 100%;
		font-size: inherit;
		border: none;
		flex: 1 1 auto;
	}
	&__button {
		flex: 0 1 auto;
	}
}
</style>
