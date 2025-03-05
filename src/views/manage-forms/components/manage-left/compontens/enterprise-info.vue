<script lang="ts" setup></script>

<template>
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
</template>

<style lang="scss" scoped>
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
</style>
