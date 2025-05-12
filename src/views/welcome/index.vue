<script lang="ts" setup>
import WelcomeContent from '@/views/welcome/components/welcome-content.vue';
</script>

<template>
  <div class="welcome">
    <welcome-content />
    <!--<welcome-footer />-->
  </div>
</template>

<style lang="scss">
.welcome {
  width: 100%;
  height: 100%;
  animation: bounceInUp 1s;
}
</style>
