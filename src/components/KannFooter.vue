<template lang="pug">
footer.footer.footer--top-border
  section.footer__menu-section
    KannListSection(v-for='(listSection, i) in listSections', :key='i', :listSection='listSection' classList="footer__list fs-15")
  section.footer__copywriting
    p © Kann Design 2021
    button.button.button--basic-button(type="button") Gestion des cookies
    p Website by
    a.link.link--basic-link(href='#') Studio Krabb &#38; Léa Tortay
</template>

<script setup>
import KannListSection from './KannListSection.vue';

const listSections = [
	{
		title: 'Kann Design',
		menu: [
			{ name: 'À propos', path: '#' },
			{ name: 'Projets', path: '#' },
			{ name: 'Journal', path: '#' },
			{ name: 'Designers', path: '#' },
			{ name: 'Points de vente', path: '#' },
		],
	},
	{
		title: "Besoin d'aide ?",
		menu: [
			{ name: 'Contact', path: '#' },
			{ name: 'Compte', path: '#' },
			{ name: 'Retours', path: '#' },
			{ name: 'cgv', path: '#' },
		],
	},
	{
		title: 'Professionnel',
		menu: [
			{ name: 'Catalogue', path: '#' },
			{ name: "Banque d'image", path: '#' },
			{ name: 'Fiche produit', path: '#' },
			{ name: 'Fichier 3D', path: '#' },
		],
	},
	{
		title: 'Nous suivre',
		menu: [
			{ name: 'Instagram', path: '#' },
			{ name: 'Facebook', path: '#' },
		],
	},
];
</script>

<style lang="scss">
.footer {
	padding: 74px 0 98px;
	&__menu-section {
		display: flex;
		justify-content: space-between;
		width: 80%;
	}
	&__copywriting {
		padding: 0 17px;
	}
	&__list > * + * {
		margin-top: 8px;
	}
	&--top-border {
		border-top: 2px solid #1a1818;
	}
}
</style>
