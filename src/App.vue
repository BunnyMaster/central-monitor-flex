<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="
        route.meta.transition?.enter
          ? `animate__animated ${route.meta.transition.enter}`
          : 'animate__animated animate__fadeInLeft animate__faster'
      "
      :leave-active-class="
        route.meta.transition?.leave
          ? `animate__animated ${route.meta.transition.leave}`
          : 'animate__animated animate__fadeOutLeft animate__faster'
      "
      mode="out-in"
    >
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>
<style lang="scss">
#app {
  width: 100%;
  height: 1080px;
  //height: 100%;
}
</style>
