<template lang="pug">
section.layout__section--position-top-70.section.section--bg-img.section--min-height-60.section--max-height-70
  h1.title.title--basic-color.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--ai-center.fs-60.ls-12 Galta collection by SCMP Design Office
section.section.section--min-height-70.section--max-height-100
  div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
    h2.title.title--basic-color.fs-60.ls-12 Dans les coulisses de la fabrication Kann
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Lire l'article
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-7
    img.section__img(src="images/img-1.jpg", alt="Image of furniture")
section.section.section--min-height-60.section--max-height-80
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-6
    img.section__img(src="images/img-2.jpg", alt="Image of furniture")
  figure.section__grid-element.section__grid-element--rows-center-3.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative
    img.section__img(src="images/img-3.jpg", alt="Image of furniture")
  figcaption.lowercase.fs-15.lh-20 Cut / vert sablé
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--end.link.link--basic-link.link--hover.fs-15.lh-20(href="#") shop
section.section.section--min-height-60.section--max-height-75
  div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
    h2.title.title--basic-color.fs-60.ls-12 Linéaire et minimaliste, les bancs Galta dessinés par SCMP Design Office
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Shop
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-7
    img.section__img(src='images/img-4.jpg', alt="Image of furniture")
section.section.section--min-height-60.section--max-height-80
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-6
    img.section__img(src="images/img-5.jpg", alt="Image of furniture")
    figcaption.lowercase.fs-15.lh-20 voir toutes les chaises
  figure.section__grid-element.section__grid-element--rows-center-3.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative
    img.section__img(src="images/img-6.jpg", alt="Image of furniture")
    figcaption.lowercase.fs-15.lh-20 tal / chêne noir
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--end.link.link--basic-link.link--hover.fs-15.lh-20(href="#") shop
section.section.section--min-height-60.section--max-height-75
  div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
    h2.title.title--basic-color.fs-60.ls-12 Des lignes horizontales s’encastrent dans le piètement, rendant apparente la technicité de l'assemblage.
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(href="#") Shop
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-7
    img.section__img(src='images/img-7.jpg', alt="Image of furniture")
</template>

<script setup></script>

<style lang="scss">
.section {
	display: grid;
	padding: 0 1rem;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(5, 1fr);
	&--bg-img {
		background-image: url('images/bg-full.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	&--min-height-60 {
		min-height: 60vh;
	}
	&--min-height-70 {
		min-height: 70vh;
	}
	&--max-height-70 {
		max-height: 70vh;
	}
	&--max-height-75 {
		max-height: 75vh;
	}
	&--max-height-80 {
		max-height: 80vh;
	}
	&--max-height-100 {
		max-height: 100vh;
	}
	&__grid-element {
		&--rows-full {
			grid-row-start: 1;
			grid-row-end: 6;
		}
		&--rows-center-3 {
			grid-row-start: 2;
			grid-row-end: 5;
		}
		&--column-start-4 {
			grid-column: span 4;
		}
		&--column-start-6 {
			grid-column: span 6;
		}
		&--column-start-7 {
			grid-column: span 7;
		}
		&--column-end-4 {
			grid-column-start: 13;
			grid-column-end: 9;
		}
		&--column-end-7 {
			grid-column-start: 13;
			grid-column-end: 6;
		}
	}
	&__flex-element {
		display: flex;
		&--vertical {
			flex-direction: column;
		}
		&--ai-center {
			align-items: center;
		}
		&--jc-center {
			justify-content: center;
		}
		&--relative {
			position: relative;
		}
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__link {
		&--pos-abs {
			position: absolute;
		}
		&--b-0 {
			bottom: 0;
		}
		&--end {
			align-self: flex-end;
		}
		&--start {
			align-self: flex-start;
		}
	}
}
</style>
