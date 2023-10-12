<template lang="pug">
section
  figure
    img(:src="props.contentObj.img.path")
</template>

<script setup>
import KannTitle from './KannTitle.vue';
import KannLink from './KannLink.vue';

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
