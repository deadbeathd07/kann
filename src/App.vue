<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
import KannSection from './components/KannSection.vue';
import KannList from './components/KannList.vue';
import KannForm from './components/KannForm.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const sectionsContent = computed(() => [
	{
		class: 'section--reverse',
		img: {
			path: 'images/img-1.jpg',
			alt: t('img_alt'),
		},
		block: {
			title: t('sections[0].title'),
			link: {
				name: t('links.read'),
				path: '#',
			},
		},
	},
	{
		img: {
			path: 'images/img-2.jpg',
			alt: t('img_alt'),
		},
		block: {
			link: {
				name: t('links.shop'),
				path: '#',
			},
			img: {
				path: 'images/img-3.jpg',
				alt: t('img_alt'),
				figcaption: t('img_descriptions.img_2'),
			},
		},
	},
	{
		img: {
			path: 'images/img-4.jpg',
			alt: t('img_alt'),
		},
		block: {
			title: t('sections[1].title'),
			link: {
				name: t('links.shop'),
				path: '#',
			},
		},
	},
	{
		img: {
			path: 'images/img-5.jpg',
			alt: t('img_alt'),
			figcaption: t('img_descriptions.img_3'),
		},
		block: {
			link: {
				name: t('links.shop'),
				path: '#',
			},
			img: {
				path: 'images/img-6.jpg',
				alt: t('img_alt'),
				figcaption: t('img_descriptions.img_4'),
			},
		},
	},
	{
		img: {
			path: 'images/img-7.jpg',
			alt: t('img_alt'),
		},
		block: {
			title: t('sections[2].title'),
			link: {
				name: t('links.shop'),
				path: '#',
			},
		},
	},
]);

const furnitureList = computed(() => [
	{
		name: t('furniture.bench'),
		path: '#',
	},
	{
		name: t('furniture.stool'),
		path: '#',
	},
	{
		name: t('furniture.library'),
		path: '#',
	},
	{
		name: t('furniture.buffet'),
		path: '#',
	},
	{
		name: t('furniture.desk'),
		path: '#',
	},
	{
		name: t('furniture.couch'),
		path: '#',
	},
	{
		name: t('furniture.chair'),
		path: '#',
	},
	{
		name: t('furniture.high_chair'),
		path: '#',
	},
	{
		name: t('furniture.bar_trolley'),
		path: '#',
	},
	{
		name: t('furniture.shelf'),
		path: '#',
	},
	{
		name: t('furniture.armchair'),
		path: '#',
	},
	{
		name: t('furniture.lamp'),
		path: '#',
	},
	{
		name: t('furniture.mirror'),
		path: '#',
	},
	{
		name: t('furniture.screen'),
		path: '#',
	},
	{
		name: t('furniture.coat_hook_valet'),
		path: '#',
	},
	{
		name: t('furniture.coffee_side_table'),
		path: '#',
	},
	{
		name: t('furniture.dining table'),
		path: '#',
	},
]);

const formContent = computed(() => {
	return {
		title: t('title.form'),
		placeholder: t('placeholder'),
		button_text: t('btns.subscribe'),
	};
});
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__promo
      h1.layout__title.title.title--basic-color.fs-60 {{ $t('title.intro') }}
    KannSection(v-for="(section, i) in sectionsContent", :key="i", :content-obj="section")
    section.layout__list-wrapper
      KannList.layout__list(:list="furnitureList")
    section.layout__form
      KannForm(:formContent="formContent")
  KannFooter(class="layout__footer")
</template>

<style lang="scss">
.layout {
	&__wrapper {
		display: flex;
		flex-direction: column;
	}
	&__header {
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	&__content {
		flex: 1 0 auto;
		& > * + * {
			margin-top: 115px;
			@media (max-width: 820px) {
				margin-top: 58px;
			}
		}
	}
	&__promo {
		padding: 0 1rem;
		background-image: url('../images/bg-full.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		min-height: 70vh;
		margin-top: -70px;
		display: flex;
		align-items: center;
	}
	&__title {
		max-width: 40%;
		@media (max-width: 820px) {
			max-width: 100%;
		}
		@media (min-width: 821px) and (max-width: 1024px) {
			max-width: 70%;
		}
	}
	&__footer {
		margin-top: 27px;
		flex: 0 0 auto;
	}
	&__section--position-top-70 {
		margin-top: -70px;
	}
	&__list-wrapper {
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		font-size: 60px;
		@media (max-width: 820px) {
			font-size: 48px;
		}
	}
	&__form {
		padding: 0 1rem;
		font-size: calc((100vw - 365px) / (1440 - 365) * (47 - 36) + 36px);
	}
}
</style>
