<template lang="pug">
header.header
  KannLogo(alt='Organisation\'s logo')
  KannNavigation(:menu='menu')
  KannLangSwitcher(:lang-arr='languages')
  KannSearch
  a.link(href="#") points de vente
  KannCart
</template>

<script setup>
import KannLogo from './KannLogo.vue';
import KannNavigation from './KannNavigation.vue';
import KannLangSwitcher from './KannLangSwitcher.vue';
import KannSearch from './KannSearch.vue';
import KannCart from './KannCart.vue';

const menu = [
	{ name: 'Shop', path: '#' },
	{ name: 'Projets', path: '#' },
	{ name: 'Journal', path: '#' },
	{ name: 'à propos', path: '#' },
];

const languages = ['fr', 'en'];
</script>

<style lang="scss" scoped>
.header {
	display: flex;
}
</style>
