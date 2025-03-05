<script lang="tsx" setup>
import { ref } from 'vue';

import formatter from '@/utils/digte-formatter';

const money = ref('1386114');

/** 显示金额 */
const displayContent = () => {
  formatter(money);
  return (
    <>
      <span>¥</span>
      {money.value.split('').map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};
</script>

<template>
  <div class="money-digit">
    <component :is="displayContent()" />
  </div>
  <div>
    <div class="progress">111</div>
    <ul class="import-export-value flex-x-between">
      <li>
        进口额
        <i>¥1551154545</i>
      </li>
      <li class="thin-line h-[20px]" />
      <li>
        <i>¥1551154545</i>
        出口额
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.money-digit {
  display: flex;
  justify-content: end;
  margin: 26px 0 0 0;
  color: var(--color-primary-secondary);
  font-size: 45px;
  text-align: center;

  span {
    float: left;
    margin: 0 3.5px;
    width: 49px;
    height: 69px;
    background: url('@/assets/images/business-supervision/bg/sidebar/bg-count.png') no-repeat;
    background-size: cover;
  }
}

.progress {
  margin: 21px 0 0 0;
}

.import-export-value {
  font-size: 18px;

  i {
    font-style: normal;
    font-size: 20px;
    color: var(--color-primary-secondary);
  }
}
</style>
