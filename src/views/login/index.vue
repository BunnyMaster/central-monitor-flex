<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

import LayoutHeader from '@/components/CommonHeader/LayoutHeader.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();

const isViewPassword = ref(false);

onBeforeMount(() => {
  appStore.setBackground('/images/common/bg/bg-layout.png');
});
</script>

<template>
  <div :style="{ background: appStore.background }" class="layout-container">
    <layout-header />

    <div class="layout-content">
      <div class="layout-content__inner">
        <main>
          <h1>欢迎登录</h1>

          <div class="ipt-group">
            <span>
              <i class="i-heroicons-outline:user" />
              <input maxlength="15" placeholder="请输入用户名" />
            </span>
            <span>
              <i class="i-heroicons-outline:lock-closed" />
              <input
                :type="isViewPassword ? '' : 'password'"
                maxlength="32"
                placeholder="请输入密码"
              />
              <i
                v-show="isViewPassword"
                class="i-heroicons-outline:eye"
                style="left: unset; right: 18px"
                @click="isViewPassword = !isViewPassword"
              />
              <i
                v-show="!isViewPassword"
                class="i-heroicons-outline:eye-off"
                style="left: unset; right: 18px"
                @click="isViewPassword = !isViewPassword"
              />
            </span>
          </div>

          <div class="layout-content__inner-info">
            <span>手机号登录</span>
            <span>忘记密码</span>
          </div>

          <button>登录</button>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes btn-login {
  0% {
    border: 1px solid #a1c4fd;
    background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
    background-position-x: 12%;
    background-position-y: 6%;
  }
  100% {
    border: 1px solid #a1c4fd;
    background-image: linear-gradient(to right, #a1c4fd 100%, #c2e9fb 51%, #a1c4fd 0%);
  }
}

.layout-container {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;

  .layout-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 108px);

    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 749px;
      height: 578px;
      background: url('@/assets/images/login/bg-login.png') no-repeat center;
      background-size: cover;

      &-info {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 0 0;
        width: 100%;
        color: var(--color-primary-secondary);
        font-size: 14px;

        span {
          transition: all 0.4s;
          cursor: pointer;
        }

        span:hover {
          color: #a4ffff;
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 305px;
    height: 283px;
    color: #fff;

    h1 {
      font-size: 37px;
      text-align: center;
    }

    button {
      width: 145px;
      height: 60px;
      margin: 0;
      padding: 0;
      font-size: 18px;
      color: #beffff;
      border: 1px solid #00142d;
      border-radius: 9px;
      transition: 0.5s;
      background-image: linear-gradient(to right, #00142d 0%, #006bc5 51%, #00142d 100%);
      background-size: 200% auto;

      &:hover {
        border: 1px solid #006bc5;
        background-position: right center;
      }
    }
  }

  .ipt-group {
    span {
      display: block;
      position: relative;

      &:nth-child(2) {
        margin: 20px 0 0 0;
      }
    }

    i {
      position: absolute;
      top: 18px;
      left: 23px;
      font-size: 24px;
      color: var(--color-primary-secondary);
    }

    input {
      padding: 15px 43px 15px 65px;
      width: 305px;
      height: 60px;
      font-size: 16px;
      color: var(--color-primary-secondary);
      outline: none;
      background: url('@/assets/images/login/bg-login-btn.png') no-repeat center;
      background-size: cover;
    }
  }
}
</style>
