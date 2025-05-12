<script lang="ts" setup>
import SmartParkContent from '@/views/smart-park/components/smart-park-content.vue';
import SmartParkFooter from '@/views/smart-park/components/smart-park-footer.vue';
</script>

<template>
  <div class="smart-park">
    <div class="smart-park__arrow left-[38px]">
      <img alt="左箭头" src="@/views/smart-park/images/arrow/arrow-left.png" />
    </div>

    <smart-park-content />

    <smart-park-footer />

    <div class="smart-park__arrow right-[38px]">
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
