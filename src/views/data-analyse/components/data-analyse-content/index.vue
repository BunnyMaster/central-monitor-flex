<script lang="ts" setup>
const titleList = [170582, 586220, 168902];
</script>

<template>
  <div class="data-analyse-content">
    <ul class="data-analyse-content__header">
      <li v-for="(item, index) in titleList" :key="index">
        <h3>数据展示</h3>
        <strong>{{ item }}</strong>
        <span>台</span>
      </li>
    </ul>

    <main class="data-analyse-content__body">body</main>

    <footer class="data-analyse-content__footer">footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-content {
  margin: 0 35px;
  width: 803px;
  height: 970px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 0 0;

    h3 {
      color: #94ddff;
      font-size: 18px;
    }

    strong {
      color: #fff;
      font-size: 36px;
    }

    span {
      margin: 0 0 0 8px;
      color: #fff;
      font-size: 16px;
    }
  }

  &__body {
    margin: 14px 0 0 0;
    width: 803px;
    height: 567px;
  }

  &__footer {
    margin: 6px 0 0 0;
    width: 860px;
    height: 284px;
  }
}
</style>
