<template lang="pug">
  .wrap
    h1 Страница "Блог"
    input(type="text" placeholder="Название" v-model="post.title").input
    input(type="text" placeholder="Дата" v-model="post.date").input
    input(type="text" placeholder="Содержание" v-model="post.content").input
    button(@click="addNewPost") Добавить 
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      post: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    addNewPost() {
      const formData = new FormData();

      Object.keys(this.post).forEach(prop => {
        formData.append(prop, this.post[prop]);
      });
      this.addPost(formData);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input {
  border-radius: 5px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 10px;
}
button {
  background-color: #00bfa5;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", Helvetica, sans-serif;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
}
.file {
  margin-top: 20px;
}
</style>
