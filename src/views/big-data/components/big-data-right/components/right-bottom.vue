<script lang="ts" setup>
const list = [
  { title: '134.5㎡', summary: '建成投产面积' },
  { title: '38000㎡', summary: '保税仓库面积' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
  { title: '327.3㎡', summary: '物流场站' },
];
</script>

<template>
  <div class="big-data__sidebar-item">
    <div class="flex-x-between">
      <h1 class="big-data__sidebar-title">园区规划</h1>
    </div>

    <ul class="big-data__sidebar-card">
      <li v-for="(item, index) in list" :key="index">
        <h1>{{ item.title }}</h1>
        <p>{{ item.summary }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.big-data__sidebar-item {
  width: 100%;

  .big-data__sidebar-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin: 19px 0 0 0;
    width: 100%;
  }
}

li {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 24px 14px 0;
  width: 144px;
  height: 83px;
  background: url('@/assets/images/big-data/bg/bg-right-bottom.png') no-repeat center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--color-primary-secondary);
    border-radius: 50%;
    bottom: -5px;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--color-primary-secondary-1);
    border-radius: 50%;
    bottom: -10px;
    animation: zoomIn 0.8s alternate infinite;
  }

  &:last-child {
    margin: 0;
  }

  h1 {
    margin: 0 0 2px 0;
    color: var(--color-primary-secondary);
    font-size: 18px;
  }

  p {
    color: #fff;
    font-size: 12px;
  }
}
</style>
