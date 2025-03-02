<script lang="tsx" setup>
import { ref } from 'vue';

import formatter from '@/utils/digte-formatter';

const money = ref('1386114');

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
  <div class="manage-forms-slide flex-y-between">
    <div class="common-bg money">
      <div class="title">
        <h1>园区进出口额</h1>
      </div>

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
    </div>

    <div class="enterprise-info common-bg">
      <div class="flex-x-between">
        <div class="title">
          <h1>企业信息</h1>
        </div>
        <span class="title-description">截止时间至2021.12.30</span>
      </div>

      <ul>
        <li>
          <h1>报税金额</h1>
          <p class="c-warning-secondary">¥1551154545</p>
        </li>
        <li>
          <div class="flex-x-between">
            <div>
              <h1>企业数量</h1>
              <p class="c-primary-secondary">783</p>
            </div>
            <div>111</div>
          </div>
          <div class="enterprise-type">
            <span class="mr-[13px]">
              <i class="bg-primary-secondary" />
              国营企业 345
            </span>
            <span>
              <i class="bg-warning-secondary" />
              私营企业 345
            </span>
          </div>
        </li>
        <li>
          <div class="flex-x-between">
            <h1>总投资金额</h1>
            <span class="font-size-[12px]">环比变化</span>
            <span class="font-size-[12px]">+123%</span>
          </div>
          <p class="c-primary-secondary">¥1551154545</p>
        </li>
        <li>
          <div class="flex-x-between">
            <h1>税收总金额</h1>
            <span class="font-size-[12px]">环比变化</span>
            <span class="font-size-[12px]">-123%</span>
          </div>
          <p class="c-primary-secondary">¥1551154545</p>
        </li>
      </ul>
    </div>

    <div class="common-bg plan">
      <div class="flex-x-between">
        <div class="title">
          <h1>地理规划</h1>
        </div>
        <span class="title-description">截止时间至2021.12.30</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.money {
  width: 100%;
  height: 246px;

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
      background: url('@/assets/images/manage-forms/bg/bg-count.png') no-repeat;
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
}

.enterprise-info {
  padding: 10px 15px;
  width: 530px;
  height: 354px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    height: 100%;

    li {
      //margin: 15px 0 0 0;
      padding: 9px 16px 0 19px;
      margin: 15px 0 0 0;
      width: 242px;
      height: 124px;
      background: url('@/assets/images/manage-forms/bg/frame-1.png') no-repeat center;
      background-size: cover;

      h1 {
        margin: 0 0 2px 0;
        font-size: 18px;
      }

      p {
        font-size: 30px;
      }
    }

    .enterprise-type {
      width: 100%;

      span {
        font-size: 13px;
      }

      i {
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }
    }
  }
}

.plan {
  width: 530px;
  height: 294px;
}
</style>
