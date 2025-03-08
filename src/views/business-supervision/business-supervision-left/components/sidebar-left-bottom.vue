<script lang="ts" setup>
import { ref } from 'vue';

const devices = ref<any>([
  [
    { color: '#ff7e5f', title: 738, description: '设备总数1' },
    { color: '#ff7e5f', title: 738, description: '设备总数' },
    { color: '#fff', title: 738, description: '设备总数' },
    { color: '#ff7e5f', title: 738, description: '设备总数' },
  ],
  [
    { color: '#2a65ea', title: '7.3k㎡', description: '设备总数' },
    { color: '#2a65ea', title: 738, description: '设备总数' },
    { color: '#fff', title: 738, description: '设备总数' },
    { color: '#2a65ea', title: 738, description: '设备总数' },
  ],
]);
</script>

<template>
  <div class="business-supervision__sidebar-item h-[294px]">
    <div class="flex-x-between">
      <div class="business-supervision__sidebar-title">
        <h1>地理规划</h1>
      </div>
      <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
    </div>
    <ul v-for="(parent, pIndex) in devices" :key="pIndex" class="flex-x-around mt-[12px]">
      <li v-for="(item, index) in parent" :key="index">
        <div class="manage-device">
          <h1>{{ item.title.toString() }}</h1>
          <p>{{ item.description }}</p>
          <div class="device-carriage">
            <i :style="{ color: item.color }" class="i-mdi:electricity" />
          </div>
        </div>
        <!--<manage-device :color="item.color" :description="item.description" :title="item.title" />-->
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.manage-device {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;

  h1 {
    text-align: center;
    font-size: 24px;
  }

  p {
    margin: 0 0 2px 0;
    text-align: center;
    font-size: 14px;
  }

  .device-carriage {
    display: flex;
    justify-content: center;
    width: 74px;
    height: 46px;
    background: url('@/assets/images/business-supervision/bg/sidebar/device-carriage.png') no-repeat
      center;
    background-size: cover;

    i {
      font-size: 26px;
    }
  }
}
</style>
