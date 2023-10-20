<template lang="pug">
KannButton(:text="$t('header.btns.cart') + ' ' + count.toString()")
</template>

<script setup>
import KannButton from './KannButton.vue';

const count = 0;
</script>

<style lang="scss"></style>
