<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const list = ref([
  { icon: 'i-material-symbols:home-and-garden', name: '园区', target: '/' },
  { icon: 'i-fa:building', name: '园区', target: '/' },
  { icon: 'i-fa-solid:chart-line', name: '经营', target: '/business-supervision' },
  { icon: 'i-eos-icons:big-data-outlined', name: '大数据', target: '/big-data' },
]);
</script>

<template>
  <footer>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="router.push(item.target)">
        <i :class="`${item.icon}`" />
        <span class="hover">{{ item.name }}</span>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 190px 0 0 0;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      background: url('@/assets/images/common/bg/bg-main-2.png') no-repeat center;
      background-size: cover;

      i {
        width: 26px;
        height: 26px;
        font-size: 26px;
      }

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
