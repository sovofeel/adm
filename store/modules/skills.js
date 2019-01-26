import axios from 'axios'

const skills = {
    state: {
        data: []
    },
    mutations: {
        fillUpSkills(state, skills) {
            state.data = skills;
        },
        addSkill(state, skill) {
            state.data.push(skill);
        },
        removeSkill(state, skillId) {
            state.data = state.data.filter(item => item.id !== skillId);
        }
    },
    actions: {
        addNewSkill({ commit }, skill) {
            axios.post("/skills", skill).then(response => {
                console.log(response.data);

                commit("addSkill", response.data);
            });
        },
        removeExistedSkill({ commit }, skillId) {
            axios.delete(`/skills/${skillId}`).then(response => {
                commit("removeSkill", skillId);
            });
        },
        fetchSkills({ commit, getters }) {
            return axios.get(`/skills/86`).then(response => {
                commit("fillUpSkills", response.data);
            });
        }
    }
};


export default skills;