<script lang="tsx" setup>
import { ref } from 'vue';

import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import EnterpriseInfo from '@/views/business-supervision/business-supervision-left/compontens/enterprise-info.vue';
import ImportExportValue from '@/views/business-supervision/business-supervision-left/compontens/import-export-value.vue';
import ManageDevice from '@/views/business-supervision/business-supervision-left/compontens/manage-device.vue';

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

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);
</script>

<template>
  <div class="business-supervision__sidebar">
    <div class="business-supervision__sidebar-item h-[246px]">
      <div class="flex-x-between">
        <div class="business-supervision__sidebar-title">
          <h1>园区进出口额</h1>
        </div>
        <div>
          <span class="business-supervision__sidebar-tag">总数据</span>
          <TimeSelect :time-list="timeList" />
        </div>
      </div>

      <import-export-value />
    </div>

    <div class="business-supervision__sidebar-item h-[354px]">
      <div class="flex-x-between">
        <div class="business-supervision__sidebar-title">
          <h1>企业信息</h1>
        </div>
        <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
      </div>

      <enterprise-info />
    </div>

    <div class="business-supervision__sidebar-item h-[294px]">
      <div class="flex-x-between">
        <div class="business-supervision__sidebar-title">
          <h1>地理规划</h1>
        </div>
        <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
      </div>
      <ul v-for="(parent, pIndex) in devices" :key="pIndex" class="flex-x-around mt-[12px]">
        <li v-for="(item, index) in parent" :key="index">
          <manage-device :color="item.color" :description="item.description" :title="item.title" />
        </li>
      </ul>
    </div>
  </div>
</template>
