<template lang="pug">
  #header
    .title Панель администрирования
    a(href="/" @click="logout()").exit Вернуться на сайт
</template>

<style lang="scss" scoped>
#header {
  background: #16c2aa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100%;
  .title {
    font-size: 28px;
  }
  .exit {
    color: inherit;
    font-size: 16px;
    text-decoration: underline;
  }
}
</style>
