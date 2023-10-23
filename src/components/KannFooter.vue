<template lang="pug">
footer.footer.footer--top-border(:class="props.class")
  section.footer__menu-section
    div(v-for='(listSection, i) in listSections', :key='i')
      h6.footer__list-title.fs-14.ls-03 {{ listSection.title }}
      KannList(:list='listSection.menu', classList='footer__list fs-15')
  section.footer__copywriting.footer__copywriting--light.footer__copywriting--lowercase.fs-15
    p © Kann Design 2021
    KannButton.footer__button.footer__button--hover(:text="$t('footer.btn.cookie')") 
    p Website by
    KannLink.footer__link.footer__link--hover(text='Studio Krabb & Léa Tortay')
</template>

<script setup>
import KannList from './KannList.vue';
import KannButton from './KannButton.vue';
import KannLink from './KannLink.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const props = defineProps({
	class: {
		type: String,
	},
});

const listSections = computed(() => [
	{
		title: t('footer.conception.title'),
		menu: [
			{ name: t('footer.conception.list.about'), path: '#' },
			{ name: t('footer.conception.list.projects'), path: '#' },
			{ name: t('footer.conception.list.journal'), path: '#' },
			{ name: t('footer.conception.list.design'), path: '#' },
			{ name: t('footer.conception.list.points'), path: '#' },
		],
	},
	{
		title: t('footer.contacts.title'),
		menu: [
			{ name: t('footer.contacts.list.contact'), path: '#' },
			{ name: t('footer.contacts.list.account'), path: '#' },
			{ name: t('footer.contacts.list.return'), path: '#' },
			{ name: t('footer.contacts.list.cgv'), path: '#' },
		],
	},
	{
		title: t('footer.proff.title'),
		menu: [
			{ name: t('footer.proff.list.catalog'), path: '#' },
			{ name: t('footer.proff.list.bank'), path: '#' },
			{ name: t('footer.proff.list.sheet'), path: '#' },
			{ name: t('footer.proff.list.3d'), path: '#' },
		],
	},
	{
		title: t('footer.social.title'),
		menu: [
			{ name: 'Instagram', path: '#' },
			{ name: 'Facebook', path: '#' },
		],
	},
]);
</script>

<style lang="scss">
.footer {
	padding: 74px 1rem 0;
	text-transform: lowercase;
	color: lighten($color, $amount: 60);
	font-size: 15px;
	&__menu-section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 80%;
		margin-bottom: 98px;
		color: $color;
		@media (max-width: 820px) {
			width: 100%;
		}
	}
	@media (max-width: 820px) {
		font-size: 12px;
	}
	&__copywriting {
		display: flex;
		align-items: center;
		padding: 17px 0;
		@media (max-width: 820px) {
			flex-direction: column;
		}
	}
	&__list > * + * {
		margin-top: 8px;
	}
	&__list-title {
		font-weight: normal;
		text-transform: lowercase;
		margin-bottom: 18px;
	}
	&__button {
		margin-right: auto;
		margin-left: 20px;
		color: inherit;
		@media (max-width: 820px) {
			margin: 10px 0;
		}
	}
	&__link {
		margin-left: 5px;
		color: inherit;
	}
	&__button--hover:hover,
	&__link--hover:hover {
		color: lighten($color, $amount: 40);
	}
	&--top-border {
		border-top: 2px solid $color;
	}
}
</style>
