<template lang="pug">
header.header.header--hover(v-if="!isSmall")
  KannLogo.header__logo(alt='Organisation\'s logo')
  KannNavigation(:menu='menu' class-list="header__list fs-15")
  KannLangSwitcher.header__switcher.header__switcher--large(:lang-arr='languages')
  KannSearch
  KannLink(text="points de vente") 
  KannCart
header.header.header--hover(v-else)
  font-awesome-icon.header__menu-icon(icon="fa-solid fa-bars", size='lg')
  KannLogo.header__logo.header__logo--small(alt='Organisation\'s logo')
  KannCart.header__cart.header__cart--small
  aside.header__sidebar
    KannLangSwitcher.header__switcher.header__switcher--small(:lang-arr='languages')
    KannSearch.header__search.header__search--small
    KannNavigation(:menu='menu' class-list="header__list--small fs-15")
    KannLink.header__link.header__link--small(text="points de vente") 
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
		&--small {
			margin-left: 20px;
		}
	}
	&__switcher {
		margin-left: auto;
		&--small {
			margin-left: 0;
			margin-bottom: 20px;
		}
	}
	&__list {
		display: flex;
		&--large > * + * {
			display: flex;
			margin-left: 1rem;
		}
		&--small {
			flex-direction: column;
			& > * + * {
				margin-top: 10px;
			}
		}
	}
	&__cart--small {
		margin-left: auto;
	}
	&__menu-icon {
		cursor: pointer;
	}
	&__sidebar {
		position: absolute;
		top: 0;
		left: 0;
		width: 30vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 50px;
		background-color: #ffffff;
		box-shadow: 0px 5px 5px 5px rgba(34, 60, 80, 0.6);
	}
	&__search--small {
		margin-bottom: 20px;
	}
	&__link--small {
		margin-top: 20px;
	}
}
</style>
