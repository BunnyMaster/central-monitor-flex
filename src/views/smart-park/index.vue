<script lang="ts" setup>
import { useTimeoutFn } from '@vueuse/core';
import { ref } from 'vue';

import SmartParkContent from '@/views/smart-park/components/smart-park-content.vue';
import SmartParkFooter from '@/views/smart-park/components/smart-park-footer.vue';

const showNavigationArrows = ref(false);
let hideArrowsTimeout: (() => void) | null = null;

/* 鼠标经过显示箭头 */
const handleMouseMovement = () => {
  // 每次鼠标移动时显示箭头
  showNavigationArrows.value = true;

  // 清除之前的定时器（如果存在）
  if (hideArrowsTimeout) {
    hideArrowsTimeout();
  }

  // 设置新的定时器，2秒后隐藏箭头
  const { start, stop } = useTimeoutFn(() => {
    showNavigationArrows.value = false;
  }, 2000);

  hideArrowsTimeout = stop;
  start();
};
</script>

<template>
  <div class="smart-park" @mousemove="handleMouseMovement">
    <div v-show="showNavigationArrows" class="smart-park__arrow left-[38px]">
      <img alt="左箭头" src="@/views/smart-park/images/arrow/arrow-left.png" />
    </div>

    <smart-park-content />

    <smart-park-footer />

    <div v-show="showNavigationArrows" class="smart-park__arrow right-[38px]">
      <img alt="左箭头" src="@/views/smart-park/images/arrow/arrow-right.png" />
    </div>
  </div>
</template>

<style lang="scss">
.smart-park {
  width: 100%;
  height: 100%;

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 65px;
    }
  }

  &__sidebar {
    width: 380px;
    height: 650px;
    background: url('@/views/smart-park/images/bg/bg-side.png') no-repeat center;
    background-size: cover;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .smart-park__sidebar-title {
      width: 218px;
      height: 59px;
      background: url('@/views/smart-park/images/bg/bg-road-condition.png') no-repeat center;
      background-size: cover;

      h1 {
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
