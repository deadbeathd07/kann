<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
import KannSection from './components/KannSection.vue';

const sectionsContent = [
	{
		type: 'original',
		title: 'Dans les coulisses de la fabrication Kann',
		img: [
			{
				img_path: 'images/img-1.jpg',
				img_alt: 'Image of furniture',
			},
		],
		link: {
			link_name: "Lire l'article",
			link_path: '#',
		},
	},
	{
		type: 'double',
		img: [
			{
				img_path: 'images/img-2.jpg',
				img_alt: 'Image of furniture',
			},
			{
				img_path: 'images/img-3.jpg',
				img_alt: 'Image of furniture',
				figcaption: 'Cut / vert sablé',
			},
		],
		link: {
			link_name: 'shop',
			link_path: '#',
		},
	},
	{
		type: 'original-reverse',
		title:
			'Linéaire et minimaliste, les bancs Galta dessinés par SCMP Design Office',
		img: [
			{
				img_path: 'images/img-4.jpg',
				img_alt: 'Image of furniture',
			},
		],
		link: {
			link_name: 'shop',
			link_path: '#',
		},
	},
	{
		type: 'double',
		img: [
			{
				img_path: 'images/img-5.jpg',
				img_alt: 'Image of furniture',
				figcaption: 'voir toutes les chaises',
			},
			{
				img_path: 'images/img-6.jpg',
				img_alt: 'Image of furniture',
				figcaption: 'tal / chêne noir',
			},
		],
		link: {
			link_name: 'shop',
			link_path: '#',
		},
	},
];
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    div.layout__intro
      h1.layout__title.title.title--basic-color.fs-60 Galta collection by SCMP Design Office
    KannSection(v-for="(section, i) in sectionsContent", :key="i", :content-obj="section")
  KannFooter(class="layout__footer")
</template>

<style lang="scss">
.layout {
	&__wrapper {
		min-height: 100%;
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
		}
	}
	&__intro {
		padding: 0 1rem;
		background-image: url('images/bg-full.jpg');
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
	}
	&__footer {
		margin-top: 115px;
		flex: 0 0 auto;
	}
	&__section--position-top-70 {
		margin-top: -70px;
	}
}
</style>
