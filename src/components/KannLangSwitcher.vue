<template lang="pug">
div.lang-switcher
  template(v-for='(button, i) in langArr', :key='i')
    KannButton.lang-switcher__button(:text="button", @change-lang="changeLang")
    template(v-if="i+1 != langArr.length") /
</template>

<script setup>
import { ref } from 'vue';
import KannButton from './KannButton.vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const props = defineProps({
	langArr: {
		type: Array,
		required: true,
	},
});

const usedLang = ref(i18n.locale);

function changeLang(event) {
	let newLang = event.target.innerText.toLowerCase();
	usedLang.value = newLang;
	i18n.locale = newLang;
	localStorage.kann_lang = newLang;
	window.location.reload(); // решить проблему принудительной перезагрузки страницы, т.к. не меняется язык корректно без этого
}
</script>

<style lang="scss"></style>
