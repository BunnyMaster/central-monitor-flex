<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const isActive = ref(true);

/** 改变移动状态 */
const changeMoveState = () => {
  setInterval(() => {
    isActive.value = !isActive.value;
  }, 2000);
};

onMounted(() => {
  changeMoveState();
});
</script>

<template>
  <div class="content-middle">
    <div class="content-middle__inner">
      <img
        :class="[isActive ? 'move-top' : 'move-bottom']"
        alt=""
        src="@/assets/images/big-data/bg/bg-middle-move.png"
      />

      <h1>工作台</h1>

      <img
        :class="[isActive ? 'move-bottom' : 'move-top']"
        alt=""
        src="@/assets/images/big-data/bg/bg-middle-move.png"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 189px;

  &__inner {
    position: relative;
    width: 267px;
    height: 189px;
    overflow: hidden;
  }

  h1 {
    width: 266px;
    height: 109px;
    text-align: center;
    line-height: 109px;
    font-size: 34px;
    color: var(--color-primary-secondary);
    background: url('@/assets/images/big-data/bg/bg-middle-title.png') no-repeat center;
    background-size: cover;
  }

  .move-top {
    animation: 2s linear 0s infinite normal none running line-move;
  }

  .move-bottom {
    animation: 2s linear 0s infinite normal none running line-move-alternate;
  }
}
</style>
