<template lang="pug">
  .wrap
    h1 Страница "Мои работы"
    input(type="text" placeholder="Название проекта" v-model="work.title").input
    input(type="text" placeholder="Технологии" v-model="work.techs").input
    input(type="text" placeholder="Ссылка на проект" v-model="work.link").input
    input(type="file" @change="addPhoto").file
    button(@click="addNewWork") Добавить 
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      work: {
        title: '',
        techs: '',
        link: '',
        photo: ''
      }
    }
  },
  methods: {
    ...mapActions(['addWork']),
    addPhoto(e) {
      const files = e.target.files
      if (files.length === 0) return

      this.work.photo = files[0]
    },
    addNewWork() {
      const formData = new FormData()

      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop])
      })
      this.addWork(formData)
    }
  }
}
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
  font-family: 'Roboto', Helvetica, sans-serif;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
}
.file {
  margin-top: 20px;
}
</style>
