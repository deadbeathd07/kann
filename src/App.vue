<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__section--position-top.section.section--bg-img.section--min-height-80.section--content-center
      h1.title.title--basic-color.section__title.section__content--width-480.fs-60.ls-12 Galta collection by SCMP Design Office
    section.section.section--content-center.section--content-space-between
      h2.title.title--basic-color.section__title.section__content--width-480.fs-60.ls-12 Dans les coulisses de la fabrication Kann
      img.section__img(src="./assets/images/img-1.jpg")
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
		flex: 0 0 auto;
	}
	&__section--position-top {
		margin-top: -70px;
	}
}
</style>
