<script lang="ts" setup></script>

<template>
  <main class="mt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <div class="left mr-[28px]">左边</div>

    <div class="middle">中间</div>

    <div class="right ml-[28px]">右边</div>
  </main>
</template>

<style lang="scss" scoped>
.layout-main {
  margin: 0 auto;
}

.left,
.right {
  width: 380px;
  height: 650px;
  background: url("@/assets/images/bg-side.png") no-repeat center;
  background-size: cover;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.left {
  transform: rotateY(180deg);
}

.middle {
  width: 824px;
  height: 650px;
  background: url("@/assets/images/bg-middle.png") no-repeat center;
  background-size: cover;
}
</style>
