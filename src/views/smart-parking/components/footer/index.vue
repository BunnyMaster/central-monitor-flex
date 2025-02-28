<script lang="ts" setup></script>

<template>
  <footer>
    <ul class="flex-x-around">
      <li v-for="index in new Array(5)" :key="index" class="rectangle flex-y-center">
        <img alt="车辆管理" src="../../../../assets/images/layout/footer-39.png" />
        <span class="text-white">车辆管理</span>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 66px auto auto auto;
  width: 772px;
  height: 125px;
}

.rectangle {
  width: 138px;
  height: 125px;
  background: #0e094d55;

  img {
    width: 67px;
    height: 67px;
  }

  span {
    font-size: 15px;
    font-weight: lighter;
  }
}
</style>
