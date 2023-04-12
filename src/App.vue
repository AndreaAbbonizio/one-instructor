<script>
import AppNavbar from './components/AppNavbar.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    AppNavbar,
    AppHeader,
    AppMain,
  }
}

</script>

<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
