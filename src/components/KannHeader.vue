<template lang="pug">
header.header.header--hover(v-if="!isSmall")
  KannLogo.header__logo(alt='Organisation\'s logo')
  KannNavigation(:menu='menu' class-list="header__list fs-15")
  KannLangSwitcher.header__switcher(:lang-arr='languages')
  KannSearch
  KannLink(text="points de vente") 
  KannCart
header.header.header--hover(v-else)
  KannLogo.header__logo(alt='Organisation\'s logo')
  KannCart.header__cart.header__cart--small
</template>

<script setup>
import KannLogo from './KannLogo.vue';
import KannNavigation from './KannNavigation.vue';
import KannLangSwitcher from './KannLangSwitcher.vue';
import KannSearch from './KannSearch.vue';
import KannCart from './KannCart.vue';
import KannLink from './KannLink.vue';
import { ref } from 'vue';

const menu = [
	{ name: 'Shop', path: '#' },
	{ name: 'Projets', path: '#' },
	{ name: 'Journal', path: '#' },
	{ name: 'à propos', path: '#' },
];

const languages = ['fr', 'en'];
const isSmall = ref(isWindowSmall());

window.addEventListener('resize', () => {
	isSmall.value = isWindowSmall();
});

function isWindowSmall() {
	return window.innerWidth <= 690;
}
</script>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	padding: 20px 1rem;
	transition: all 0.3s ease-out;
	font-size: 15px;
	& > * + * {
		margin-right: 1rem;
		&:last-child {
			margin-right: 0;
		}
	}
	&--hover:hover {
		background-color: rgba($color: #ffffff, $alpha: 1);
	}
	&__logo {
		margin-right: 20px;
	}
	&__switcher {
		margin-left: auto;
	}
	&__list {
		display: flex;
		& > * + * {
			margin-left: 1rem;
		}
	}
	&__cart--small {
		margin-left: auto;
	}
}
</style>
