<template lang="pug">
section.section(:class="props.contentObj.class")
  KannFigure.section__img(:path="props.contentObj.img.path", :alt="props.contentObj.img.alt", :figcaption="props.contentObj.img.figcaption", :class="props.contentObj.block.img ? 'section__img--medium section__img--alternative' : 'section__img--large section__img--normal'")
  div.section__content(:class="props.contentObj.block.img ? 'section__content--img' : 'section__content--title'")
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
	max-width: 100%;
	&__img {
		&--large {
			width: 60vw;
			@media (max-width: 820px) {
				width: 100%;
			}
		}
		&--medium {
			width: 50vw;
			@media (max-width: 820px) {
				width: 100%;
			}
		}
		&--normal {
			@media (max-width: 820px) {
				&::before {
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					background-color: rgba(#fff, 0.3);
				}
			}
		}
		&--alternative {
			@media (max-width: 820px) {
				height: 50%;
			}
		}
	}
	&__link {
		margin-top: 2px;
	}
	&__content {
		width: 30vw;
		display: flex;
		flex-direction: column;
		&--title {
			height: 100%;
			& > .section__title,
			& > .section__link {
				margin-top: auto;
			}
			@media (max-width: 820px) {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				padding: 0 1rem;
			}
		}
		&--img {
			height: 70%;
			align-items: flex-end;
			justify-content: center;
			@media (max-width: 820px) {
				width: 100%;
				height: 50%;
				justify-content: start;
			}
		}
	}
	&__content-img {
		width: 100%;
	}
	&--reverse {
		flex-direction: row-reverse;
		@media (max-width: 820px) {
			flex-direction: column-reverse;
		}
	}
	@media (max-width: 820px) {
		position: relative;
		flex-direction: column;
	}
}
</style>
