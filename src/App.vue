<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    .content
      router-view
</template>

<script>
import header from "./components/header";
import login from "./components/login";
import tabs from "./components/tabs";
import skills from "./components/skills";
import { mapActions } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs,
    skills,
    login
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic");
body,
html {
  margin: 0;
  height: 100%;
  font-family: "Roboto", Helvetica, sans-serif;
}
.wrapper {
  height: 100%;
}
#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}
.header {
  height: 80px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
* {
  box-sizing: border-box;
}
.tabs {
  height: 60px;
}
.content {
  flex: 1;
  padding: 20px;
  /* background: url("back.png"); */
}
</style>
