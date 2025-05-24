<script lang="ts" setup></script>

<template>
  <div class="bar-op">
    <ul>
      <!--<li><img alt="icon-1" src="../../images/icon/icon-1.png" /></li>-->
      <!--<li><img alt="icon-2" src="../../images/icon/icon-2.png" /></li>-->
      <!--<li><img alt="icon-3" src="../../images/icon/icon-3.png" /></li>-->
    </ul>
    <span class="hover">小兔子🐇</span>
  </div>
</template>

<style lang="scss" scoped>
.bar-op {
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 20px;
  height: 36px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    float: left;
    width: 148px;

    img {
      width: 36px;
    }
  }

  span {
    color: var(--color-info);
    float: left;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
