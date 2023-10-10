<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.layout__section--position-top-70.section.section--bg-img.section--min-height-60.section--max-height-70
      h1.title.title--basic-color.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--ai-center.fs-60.ls-12 Galta collection by SCMP Design Office
    section.section.section--min-height-70.section--max-height-100
      div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
        h2.title.title--basic-color.fs-60.ls-12 Dans les coulisses de la fabrication Kann
        a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Lire l'article
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-7
        img.section__img(src="./assets/images/img-1.jpg", alt="Image of furniture")
    section.section.section--min-height-60.section--max-height-80
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-6
        img.section__img(src="./assets/images/img-2.jpg", alt="Image of furniture")
      figure.section__grid-element.section__grid-element--rows-center-3.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative
        img.section__img(src="./assets/images/img-3.jpg", alt="Image of furniture")
        figcaption.lowercase.fs-15.lh-20 Cut / vert sablé
        a.section__link.section__link--pos-abs.section__link--b-0.section__link--end.link.link--basic-link.link--hover.fs-15.lh-20(href="#") shop
    section.section.section--min-height-60.section--max-height-75
      div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
        h2.title.title--basic-color.fs-60.ls-12 Linéaire et minimaliste, les bancs Galta dessinés par SCMP Design Office
        a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Shop
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-7
        img.section__img(src='./assets/images/img-4.jpg', alt="Image of furniture")
    section.section.section--min-height-60.section--max-height-80
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-6
        img.section__img(src="./assets/images/img-5.jpg", alt="Image of furniture")
        figcaption.lowercase.fs-15.lh-20 voir toutes les chaises
      figure.section__grid-element.section__grid-element--rows-center-3.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative
        img.section__img(src="./assets/images/img-6.jpg", alt="Image of furniture")
        figcaption.lowercase.fs-15.lh-20 tal / chêne noir
        a.section__link.section__link--pos-abs.section__link--b-0.section__link--end.link.link--basic-link.link--hover.fs-15.lh-20(href="#") shop
    section.section.section--min-height-60.section--max-height-75
      div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
        h2.title.title--basic-color.fs-60.ls-12 Des lignes horizontales s’encastrent dans le piètement, rendant apparente la technicité de l'assemblage.
        a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Shop
      figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-7
        img.section__img(src='./assets/images/img-7.jpg', alt="Image of furniture")
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
