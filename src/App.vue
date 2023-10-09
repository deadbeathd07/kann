<script setup>
import KannHeader from './components/KannHeader.vue';
import KannFooter from './components/KannFooter.vue';
</script>

<template lang="pug">
div.layout__wrapper
  KannHeader(class="layout__header")
  main.layout__content
    section.section.section--bg-img.section--min-height-800.section--content-center
      h1.title.title--basic-color.section__title.section__title--width-45.fs-60.ls-12 Galta collection by SCMP Design Office
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
	}
	&__content {
		flex: 1 0 auto;
	}
	&__footer {
		flex: 0 0 auto;
	}
}
</style>
