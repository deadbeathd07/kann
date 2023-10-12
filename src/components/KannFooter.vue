<template lang="pug">
footer.footer.footer--top-border(:class="props.class")
  section.footer__menu-section
    KannListSection(v-for='(listSection, i) in listSections', :key='i', :listSection='listSection' classList="footer__list fs-15")
  section.footer__copywriting.footer__copywriting--light.footer__copywriting--lowercase.fs-15
    p © Kann Design 2021
    button.button.button--basic-button.footer__button.footer__button--light.footer__button--hover.fs-15(type="button") Gestion des cookies
    p Website by
    a.link.link--basic-link.footer__link.footer__link--light.footer__link--hover(href='#') Studio Krabb &#38; Léa Tortay
</template>

<script setup>
import KannListSection from './KannListSection.vue';

const props = defineProps({
	class: {
		type: String,
	},
});

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
	padding: 74px 1rem 0;
	&__menu-section {
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin-bottom: 98px;
	}
	&__copywriting {
		display: flex;
		align-items: center;
		padding: 17px 0;
		&--light {
			color: lighten($color: #1a1818, $amount: 60);
		}
		&--lowercase {
			text-transform: lowercase;
		}
	}
	&__list > * + * {
		margin-top: 8px;
	}
	&__button.button {
		margin-right: auto;
		margin-left: 20px;
	}
	&__link.link {
		margin-left: 5px;
	}
	&__button--light,
	&__link--light {
		color: lighten($color: #1a1818, $amount: 60);
	}
	&__button--hover:hover,
	&__link--hover:hover {
		color: lighten($color: #1a1818, $amount: 40);
	}
	&--top-border {
		border-top: 2px solid #1a1818;
	}
}
</style>
