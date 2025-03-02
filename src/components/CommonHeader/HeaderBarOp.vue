<script lang="ts" setup></script>

<template>
  <div class="bar-op">
    <ul class="flex-x-around">
      <li><img alt="icon-1" src="@/assets/images/common/icon/icon-1.png" /></li>
      <li><img alt="icon-2" src="@/assets/images/common/icon/icon-2.png" /></li>
      <li><img alt="icon-3" src="@/assets/images/common/icon/icon-3.png" /></li>
    </ul>
    <span class="hover c-primary">王菠萝</span>
  </div>
</template>

<style lang="scss" scoped>
.bar-op {
  display: flex;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 20px;
  height: 36px;

  ul {
    float: left;
    width: 148px;

    img {
      width: 36px;
    }
  }

  span {
    float: left;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
