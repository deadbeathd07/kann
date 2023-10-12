<template lang="pug">
section.section.section--min-height-70.section--max-height-100(v-if="props.contentObj.type == 'original'")
  div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
    h2.title.title--basic-color.fs-60.ls-12(v-if="props.contentObj.title") {{ props.contentObj.title }}
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(v-if="props.contentObj.link", :href="props.contentObj.link.link_path") {{ props.contentObj.link.link_name }}
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-7
    img.section__img(:src="props.contentObj.img[0].img_path", :alt="props.contentObj.img[0].img_alt")
section.section.section--min-height-60.section--max-height-80(v-else-if="props.contentObj.type == 'double'")
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-6
    img.section__img(:src="props.contentObj.img[0].img_path", :alt="props.contentObj.img[0].img_alt")
  figure.section__grid-element.section__grid-element--rows-center-3.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative
    img.section__img(:src="props.contentObj.img[1].img_path", :alt="props.contentObj.img[1].img_alt")
    figcaption.lowercase.fs-15.lh-20 {{ props.contentObj.img[1].figcaption }}
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--end.link.link--basic-link.link--hover.fs-15.lh-20(v-if="props.contentObj.link", :href="props.contentObj.link.link_path") {{ props.contentObj.link.link_name }} 
section.section.section--min-height-60.section--max-height-75(v-else-if="props.contentObj.type == 'original-reverse'")
  div.section__grid-element.section__grid-element--rows-full.section__grid-element--column-end-4.section__flex-element.section__flex-element--vertical.section__flex-element--relative.section__flex-element--jc-center
    h2.title.title--basic-color.fs-60.ls-12(v-if="props.contentObj.title") {{ props.contentObj.title }}
    a.section__link.section__link--pos-abs.section__link--b-0.section__link--start.link.link--basic-link.link--hover.fs-14(v-if="props.contentObj.link", :href="props.contentObj.link.link_path") {{ props.contentObj.link.link_name }} 
  figure.section__grid-element.section__grid-element--rows-full.section__grid-element--column-start-7
    img.section__img(:src="props.contentObj.img[0].img_path", :alt="props.contentObj.img[0].img_alt")
</template>

<script setup>
const props = defineProps({
	contentObj: {
		type: Object,
		required: true,
	},
});

console.log(props.contentObj);
</script>

<style lang="scss">
.section {
	display: grid;
	padding: 0 1rem;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(5, 1fr);
	&--min-height-60 {
		min-height: 60vh;
	}
	&--min-height-70 {
		min-height: 70vh;
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
