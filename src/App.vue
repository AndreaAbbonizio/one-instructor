<script>
import AppNavbar from './components/AppNavbar.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    AppNavbar,
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>
