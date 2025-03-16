<script lang="ts" setup>
import WelcomeContent from '@/views/welcome/components/welcome-content.vue';
import WelcomeFooter from '@/views/welcome/components/welcome-footer.vue';
</script>

<template>
  <div class="welcome">
    <welcome-content />
    <welcome-footer />
  </div>
</template>

<style lang="scss">
.welcome {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/welcome/bg/bg-particle.png') no-repeat center;
  background-size: cover;
  animation: bounceInUp 1s;
}
</style>
