<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__section--position-top-70.section.section--bg-img.section--min-height-80.section--content-center
      h1.title.title--basic-color.section__column.section__column--column-4.section__title.fs-60.ls-12 Galta collection by SCMP Design Office
    section.section.section--content-center.section--content-space-between
      a.section__link.link.link--basic-link.link--hover.fs-14(href="#") Lire l'article
      h2.title.title--basic-color.section__column.section__column--column-4.section__title.fs-60.ls-12 Dans les coulisses de la fabrication Kann
      img.section__img.section__column.section__column--column-end-7(src="./assets/images/img-1.jpg")
    section.section.section--content-center.section--content-space-between
      img.section__img.section__column.section__column--column-8(src="./assets/images/img-2.jpg")
      img.section__img.section__column.section__column--column-end-4(src="./assets/images/img-3.jpg")
      div.section__link-wrapper
        p.lowercase.fs-15 Cut / vert sablé
        a.link.link--basic-link.link--hover.fs-15(href="#")  shop
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
	&__section--position-top-70 {
		margin-top: -70px;
	}
}
</style>
