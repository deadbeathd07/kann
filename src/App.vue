<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
import KannSection from './components/KannSection.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    KannSection
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
	}
	&__content {
		flex: 1 0 auto;
		& > * + * {
			margin-top: 115px;
		}
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
