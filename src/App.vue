<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__section--position-top-70.section.section--bg-img.section--min-height-70.section--max-height-90
      h1.title.title--basic-color.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--ai-center.fs-60.ls-12 Galta collection by SCMP Design Office
    section.section.section--min-height-70.section--max-height-90
      div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--vertical
        h2title.title--basic-color.fs-60.ls-12.mt-auto Dans les coulisses de la fabrication Kann
        a.link.link--basic-link.link--hover.fs-14.mt-auto(href="#") Lire l'article
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-7
        img.section__img(src="./assets/images/img-1.jpg")
    section.section
      img(src="./assets/images/img-2.jpg")
      img(src="./assets/images/img-3.jpg")
      p.lowercase.fs-15 Cut / vert sablé
      a.link.link--basic-link.link--hover.fs-15(href="#") shop
    section.section
      h2.title.title--basic-color.fs-60.ls-12 Linéaire et minimaliste, les bancs Galta dessinés par SCMP Design Office
      img(src='./assets/images/img-4.jpg')
      a.link.link--basic-link.link--hover.fs-14(href="#") Shop
    section.section
      img(src="./assets/images/img-5.jpg")
      img(src="./assets/images/img-6.jpg")
      p.lowercase.fs-15 voir toutes les chaises
      p.lowercase.fs-15 tal / chêne noir
      a.link.link--basic-link.link--hover.fs-15(href="#") shop
    section.section
      h2.title.title--basic-color.fs-60.ls-12 Des lignes horizontales s’encastrent dans le piètement, rendant apparente la technicité de l'assemblage.
      img(src='./assets/images/img-7.jpg')
      a.link.link--basic-link.link--hover.fs-14(href="#") Shop
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
