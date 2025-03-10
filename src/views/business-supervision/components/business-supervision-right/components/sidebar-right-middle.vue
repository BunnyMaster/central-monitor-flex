<script lang="ts" setup>
const list = [
  { title: '食品业务出口总值', value: '890.30', unit: '亿 /k㎡', percent: '10' },
  { title: '食品业务出口总值', value: '890.30', unit: '亿 /k㎡', percent: '10' },
  { title: '食品业务出口总值', value: '890.30', unit: '亿 /k㎡', percent: '10' },
  { title: '食品业务出口总值', value: '890.30', unit: '亿 /k㎡', percent: '10' },
];
</script>

<template>
  <div class="business-supervision__sidebar-item h-[354px]">
    <div class="flex-x-between">
      <div class="business-supervision__sidebar-title">
        <h1>企业信息</h1>
      </div>
      <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
    </div>

    <ul class="business-supervision__sidebar-panel">
      <li v-for="(item, index) in list" :key="index">
        <h1>{{ item.title }}</h1>
        <strong>¥{{ item.value }}</strong>
        <span>{{ item.unit }}</span>
        <div class="business-supervision__sidebar-panel-circle">
          <div>{{ item.percent }}%</div>
          <div>环比</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.business-supervision__sidebar {
  &-panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 14px 0 0 0;
    width: 100%;
    height: calc(100% - 60px);

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 0 14px;
      width: 243px;
      height: 124px;
      background: url('@/assets/images/business-supervision/bg/sidebar/bg-sidebar-panel.png')
        no-repeat center;
      background-size: cover;

      h1 {
        color: #fff;
        font-size: 17px;
      }

      strong {
        color: var(--color-primary-secondary);
        font-size: 27px;
      }

      span {
        position: absolute;
        right: 56px;
        bottom: 42px;
        color: var(--color-primary-secondary);
        font-size: 15px;
      }
    }

    &-circle {
      position: absolute;
      top: -14px;
      right: -9px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      color: var(--color-info);
      font-size: 9px;
      background: url('@/assets/images/common/bg/bg-main-2.png') no-repeat center;
      background-size: cover;
    }
  }
}
</style>
