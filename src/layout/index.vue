<script lang="ts" setup>
import AppMain from "@/layout/components/AppMain/index.vue";
import NavBar from "@/layout/components/NavBar/index.vue";
import Footer from "@/layout/components/Footer/index.vue";
</script>

<template>
  <div class="layout w-full h-full">
    <NavBar />
    <AppMain />
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bg.png") no-repeat center;
  background-size: cover;
}
</style>
