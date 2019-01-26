<template>
  <tr>
    <td>
      <input class="input" type="text" placeholder="name" v-model="user.name" />
    </td>
    <td>
      <input class="input" type="text" placeholder="name" v-model="user.name" />
      <span>%</span>
    </td>
    <td>
      <button type="button" @click="handleEnter">войти</button>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    handleEnter() {
      axios.post("/login", this.user).then(
        response => {
          console.log(response);
          if (response.status == 200) {
            localStorage.setItem("token", response.data.token);
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: 5px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
button {
  background-color: #00bfa5;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", Helvetica, sans-serif;
  &:hover {
    cursor: pointer;
  }
}
td {
  font-size: 14px;
}
</style>
