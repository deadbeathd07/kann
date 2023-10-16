<template lang="pug">
header.header.header--hover(v-if="!isSmall")
  KannLogo.header__logo(alt='Organisation\'s logo')
  KannNavigation(:menu='menu' class-list="header__list header__list--large fs-15")
  KannLangSwitcher.header__switcher.header__switcher--large(:lang-arr='languages')
  KannSearch
  KannLink(text="points de vente") 
  KannCart
header.header(v-else)
  font-awesome-icon.header__icon(icon="fa-solid fa-bars", size='lg', @click="toggleOpeningSidebar")
  KannLogo.header__logo.header__logo--small(alt='Organisation\'s logo')
  KannCart.header__cart.header__cart--small
  aside.header__sidebar(:class="isOpen ? 'header__sidebar--open' : 'header__sidebar--close'")
    font-awesome-icon.header__icon.header__icon--close(icon="fa-solid fa-xmark", size='lg', @click="toggleOpeningSidebar")
    KannLangSwitcher.header__switcher.header__switcher--small(:lang-arr='languages')
    KannSearch.header__search.header__search--small
    KannNavigation(:menu='menu' class-list="header__list header__list--small fs-15")
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
const isOpen = ref(false);

window.addEventListener('resize', () => {
	isSmall.value = isWindowSmall();
});

function isWindowSmall() {
	return window.innerWidth <= 690;
}
function toggleOpeningSidebar() {
	isOpen.value = !isOpen.value;
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
		box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
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
			margin-left: 1rem;
			flex-direction: row;
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
	&__icon {
		cursor: pointer;
		&--close {
			margin-bottom: 20px;
			align-self: flex-end;
		}
	}
	&__sidebar {
		position: absolute;
		top: 0;
		width: 30vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 70px 50px;
		background-color: #ffffff;
		box-shadow: 0px 5px 5px 5px rgba(34, 60, 80, 0.6);
		transition: all 0.3s ease-in-out;
		&--close {
			left: -100vw;
		}
		&--open {
			left: 0;
		}
	}
	&__search--small {
		margin-bottom: 20px;
	}
	&__link--small {
		margin-top: 20px;
	}
}
</style>
