<template lang="pug">
KannButton(:text="'Cart ' + count.toString()")
</template>

<script setup>
import KannButton from './KannButton.vue';

const count = 0;
</script>

<style lang="scss"></style>
