<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
import KannSection from './components/KannSection.vue';
import KannList from './components/KannList.vue';
import KannForm from './components/KannForm.vue';

const sectionsContent = [
	{
		class: 'section--reverse',
		img: {
			path: 'images/img-1.jpg',
			alt: 'Image of furniture',
		},
		block: {
			title: 'Dans les coulisses de la fabrication Kann',
			link: {
				name: "Lire l'article",
				path: '#',
			},
		},
	},
	{
		img: {
			path: 'images/img-2.jpg',
			alt: 'Image of furniture',
		},
		block: {
			link: {
				name: 'shop',
				path: '#',
			},
			img: {
				path: 'images/img-3.jpg',
				alt: 'Image of furniture',
				figcaption: 'Cut / vert sablé',
			},
		},
	},
	{
		img: {
			path: 'images/img-4.jpg',
			alt: 'Image of furniture',
		},
		block: {
			title:
				'Linéaire et minimaliste, les bancs Galta dessinés par SCMP Design Office',
			link: {
				name: 'shop',
				path: '#',
			},
		},
	},
	{
		img: {
			path: 'images/img-5.jpg',
			alt: 'Image of furniture',
			figcaption: 'voir toutes les chaises',
		},
		block: {
			link: {
				name: 'shop',
				path: '#',
			},
			img: {
				path: 'images/img-6.jpg',
				alt: 'Image of furniture',
				figcaption: 'tal / chêne noir',
			},
		},
	},
	{
		img: {
			path: 'images/img-7.jpg',
			alt: 'Image of furniture',
		},
		block: {
			title:
				"Des lignes horizontales s’encastrent dans le piètement, rendant apparente la technicité de l'assemblage.",
			link: {
				name: 'shop',
				path: '#',
			},
		},
	},
];

const furnitureList = [
	{
		name: 'Banc',
		path: '#',
	},
	{
		name: 'banquette',
		path: '#',
	},
	{
		name: 'Bibliothèque',
		path: '#',
	},
	{
		name: 'buffet',
		path: '#',
	},
	{
		name: 'bureau',
		path: '#',
	},
	{
		name: 'canapé',
		path: '#',
	},
	{
		name: 'chaise',
		path: '#',
	},
	{
		name: 'chaise haute',
		path: '#',
	},
	{
		name: 'chariot bar',
		path: '#',
	},
	{
		name: 'étagère',
		path: '#',
	},
	{
		name: 'fauteuil',
		path: '#',
	},
	{
		name: 'luminaire',
		path: '#',
	},
	{
		name: 'miroir',
		path: '#',
	},
	{
		name: 'paravent',
		path: '#',
	},
	{
		name: 'patère et valet',
		path: '#',
	},
	{
		name: "table basse et d'appoint",
		path: '#',
	},
	{
		name: 'table de repas',
		path: '#',
	},
];

const formContent = {
	title:
		'Abonnez-vous à notre newsletter pour recevoir nos offres et suivre notre actualité.',
	placeholder: 'votre adresse email',
	button_text: "S'abonner",
};
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__promo
      h1.layout__title.title.title--basic-color.fs-60 Galta collection by SCMP Design Office
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
