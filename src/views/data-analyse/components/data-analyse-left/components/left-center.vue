<script lang="ts" setup>
import PanelTitle1 from '@/components/PanelItem/PanelTitle/PanelTitle1.vue';
import Progress1 from '@/components/PanelItem/Progress/Progress1.vue';

const list = [
  { name: '科技有限公司', amount: 18888, percent: '50' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
];
</script>

<template>
  <div class="data-analyse-left__center">
    <PanelTitle1 title="销售公司销售设备数量占比" />

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="info">
          <span>{{ item.name }}</span>
          <div class="info-left">
            <span class="mr-[14px]">{{ item.amount }}台</span>
            <span class="mr-[9px] c-primary-secondary">环比 {{ item.percent }} %</span>
            <i class="i-mdi-trending-up">s</i>
          </div>
        </div>
        <Progress1 :progress="50" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-left__center {
  li {
    margin: 0 0 27px 0;

    &:nth-child(1) {
      margin: 35px 0 27px 0;
    }
  }
}

.info {
  display: flex;
  justify-content: space-between;

  .info-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      fonst-size: 15px;
      color: var(--color-primary-secondary);
    }
  }
}
</style>
