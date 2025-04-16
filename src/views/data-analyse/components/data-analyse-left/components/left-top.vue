<script lang="ts" setup></script>

<template>
  <div class="data-analyse-left__top">
    <div>
      <h1>销售设备总量（台）</h1>
      <span>
        环比去年增长 52%
        <i class="i-mdi-trending-up">s</i>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-left__top {
  width: 248px;
  height: 53px;

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 15px;
    color: var(--color-primary-secondary);
  }

  i {
    position: absolute;
    top: 18px;
    left: 23px;
    font-size: 24px;
    color: var(--color-primary-secondary);
  }
}
</style>
