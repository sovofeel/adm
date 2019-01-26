<template lang="pug">
    .skills 
        .skills-title {{type.name}}
        table.skills-list
            skill-item(
                v-for="skill in skills"
                v-if="skill.category === type.id"
                :key="skill.id"
                :skill="skill"
            )
            skill-item(
                :editmode="true"
                :typeId="type.id"
            )

            BR
            HR
            BR

</template>

<script>
import skillItem from "./skillItem";

export default {
  components: {
    skillItem
  },
  props: {
    type: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    fromNameToNum(name) {
      switch (name) {
        case "Frontend":
          return 0;
        case "Backend":
          return 1;
        case "Workflow":
          return 2;
      }
    }
  }
};
</script>
