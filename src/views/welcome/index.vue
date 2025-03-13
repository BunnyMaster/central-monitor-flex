<script lang="ts" setup>
import WelcomeContent from '@/views/welcome/components/welcome-content/index.vue';
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

  &__content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    p {
      color: #fff;
      font-size: 16px;

      i {
        color: var(--color-primary-secondary);
      }
    }

    img {
      width: 239px;
      height: 34px;
    }
  }
}
</style>
