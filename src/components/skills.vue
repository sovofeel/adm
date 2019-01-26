<template lang="pug">
  #about
    h1 Страница "Обо мне"
    skillsRow(
      v-for="type in types"
      :key="type.name",
      :type="type"
      :skills="skills"
    )
</template>

<script>
import skillsRow from "./skillsRow";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    }),
    ...mapGetters(["userId"])
  },
  watch: {
    userId() {
      this.fetchSkills(this.userId);
    }
  },
  created() {
    this.fetchSkills(this.userId);
  },
  methods: {
    ...mapActions(["fetchSkills", "getUserInfo", "logout"])
  }
};
</script>
