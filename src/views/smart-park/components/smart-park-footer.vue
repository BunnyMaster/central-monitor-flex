<script lang="ts" setup></script>

<template>
  <footer>
    <ul class="smart-park__footer-nav">
      <li v-for="index in new Array(5)" :key="index" class="smart-park__footer-item">
        <img alt="车辆管理" src="../images/car/car-39.png" />
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

.smart-park__footer-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
}
</style>
