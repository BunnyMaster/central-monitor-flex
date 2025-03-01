<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <footer class="flex-y-around">
    <ul class="flex-x-between">
      <li>
        <img alt="" src="@/assets/images/icon/icon-4.png" />
        <span>园区</span>
      </li>
      <li>
        <img alt="" src="@/assets/images/icon/icon-5.png" />
        <span>园区</span>
      </li>
      <li>
        <img alt="" src="@/assets/images/icon/icon-6.png" />
        <span>园区</span>
      </li>
      <li>
        <img alt="" src="@/assets/images/icon/icon-7.png" />
        <span>园区</span>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 190px 0 0 0;

  ul {
    width: 431px;
    height: 90px;

    li {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
      color: #7cc1ff;
      background: url('@/assets/images/bg/bg-main-2.png') no-repeat center;
      background-size: cover;

      img {
        width: 26px;
        height: 26px;
      }

      span {
        margin: 4px 0 0 0;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
}
</style>
