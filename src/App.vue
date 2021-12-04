<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <FooterComponent />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import FooterComponent from "@/components/FooterComponent";
export default {
  components: {
    Navigation,
    FooterComponent
  }
}
</script>
<style lang="scss">
#app {
  overflow-x: hidden;
}
</style>
