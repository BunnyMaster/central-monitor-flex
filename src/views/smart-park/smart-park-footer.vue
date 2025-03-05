<script lang="ts" setup></script>

<template>
  <footer>
    <ul class="flex-x-around">
      <li
        v-for="index in new Array(5)"
        :key="index"
        class="smart-park__footer--nav-item flex-y-center"
      >
        <img alt="车辆管理" src="@/assets/images/smart-park/car/car-39.png" />
        <span class="text-white hover">车辆管理</span>
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

.smart-park__footer--nav-item {
  width: 138px;
  height: 125px;
  background: rgba(16, 11, 87, 0.55);
  border-radius: 10px;

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
