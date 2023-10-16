<template lang="pug">
section.section(:class="props.contentObj.class")
  KannFigure.section__img(:path="props.contentObj.img.path", :alt="props.contentObj.img.alt", :figcaption="props.contentObj.img.figcaption")
  div.section__content
    KannTitle.section__title(v-if="props.contentObj.block.title", :text="props.contentObj.block.title")
    KannFigure.section__content-img(v-if="props.contentObj.block.img", :path="props.contentObj.block.img.path", :alt="props.contentObj.block.img.alt", :figcaption="props.contentObj.block.img.figcaption")
    KannLink.section__link(v-if="props.contentObj.block.link", :href="props.contentObj.block.link.path", :text="props.contentObj.block.link.name")
</template>

<script setup>
import KannTitle from './KannTitle.vue';
import KannLink from './KannLink.vue';
import KannFigure from './KannFigure.vue';

const props = defineProps({
	contentObj: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss">
.section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	height: 70vh;
	&--large > .section__img {
		width: 60vw;
	}
	&--medium > .section__img {
		width: 50vw;
	}
	&__img {
		height: 100%;
	}
	&__content {
		width: 30vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&--reverse {
		flex-direction: row-reverse;
	}
}
</style>
