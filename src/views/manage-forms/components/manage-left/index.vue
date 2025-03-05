<script lang="tsx" setup>
import { ref } from 'vue';

import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import EnterpriseInfo from '@/views/manage-forms/components/manage-left/compontens/enterprise-info.vue';
import ImportExportValue from '@/views/manage-forms/components/manage-left/compontens/import-export-value.vue';
import ManageDevice from '@/views/manage-forms/components/manage-left/compontens/manage-device.vue';

const devices = ref([
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
  <div class="manage-forms-slide flex-y-between">
    <div class="common-bg money">
      <div class="flex-x-between">
        <div class="title">
          <h1>园区进出口额</h1>
        </div>
        <div>
          <span class="all-data">总数据</span>
          <TimeSelect :time-list="timeList" />
        </div>
      </div>

      <import-export-value />
    </div>

    <div class="enterprise-info common-bg">
      <div class="flex-x-between">
        <div class="title">
          <h1>企业信息</h1>
        </div>
        <span class="title-description">截止时间至2021.12.30</span>
      </div>

      <enterprise-info />
    </div>

    <div class="common-bg plan">
      <div class="flex-x-between">
        <div class="title">
          <h1>地理规划</h1>
        </div>
        <span class="title-description">截止时间至2021.12.30</span>
      </div>
      <ul v-for="(parent, pIndex) in devices" :key="pIndex" class="flex-x-around mt-[12px]">
        <li v-for="(item, index) in parent" :key="index">
          <manage-device :color="item.color" :description="item.description" :title="item.title" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.money {
  width: 100%;
  height: 246px;

  .all-data {
    float: left;
    margin: 0 7px 0 0;
    width: 62px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    text-align: center;
    background: rgba(24, 69, 135, 0.55);
    color: #fff;
  }
}

.enterprise-info {
  padding: 10px 15px;
  width: 530px;
  height: 354px;
}

.plan {
  width: 530px;
  height: 294px;
}
</style>
