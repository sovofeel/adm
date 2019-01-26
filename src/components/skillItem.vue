<template lang="pug">
    tr.skills-item(v-if="editmode === false")
        td {{skill.title}}
        td
            span {{skill.percents}} %
        td
            button(type="button" @click="removeItem") Удалить
    tr.skills-item(v-else)
        td
            input(type="text" v-model="newSkill.title").input
        td
            input(type="text" v-model="newSkill.percents").input 
            span %
        td
            button(type="button" @click="addSkill") Добавить
  
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    ...mapActions(["addNewSkill", "removeExistedSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill);
    },
    removeItem() {
      this.removeExistedSkill(this.skill.id);
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
