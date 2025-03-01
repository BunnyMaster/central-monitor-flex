<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade-transform'" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
#app {
  width: 100%;
  //height: 100%;
  height: 1080px;
}
</style>
