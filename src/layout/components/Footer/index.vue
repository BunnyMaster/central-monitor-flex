<script lang="ts" setup></script>

<template>
  <footer class="mt-[66px] mx-auto w-[772px] h-[125px]">
    <ul class="flex-x-around">
      <li
        v-for="index in new Array(5)"
        :key="index"
        class="rectangle w-[138px] h-[125px] flex-y-center bg-[#0E094D55]"
      >
        <img alt="车辆管理" src="@/assets/images/footer-39.png" />
        <span class="c-white font-100">车辆管理</span>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.rectangle {
  img {
    width: 67px;
    height: 67px;
  }
}
</style>
