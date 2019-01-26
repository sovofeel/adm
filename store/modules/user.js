import axios from 'axios'

const user = {
    state: {
        userId: 0,
        userdata: {}
    },
    mutations: {

        updateUserId(state, userId) {
            state.userId = userId;
        }
        ,
        fillUpUserData(state, user) {
            state.userdata = user;
        },
        clearUserData(state) {
            state.userdata = {};
        }
    },
    getters: {
        userId: state => state.userId
    },
    actions: {
        getUserInfo({ commit, state }) {
            return axios
                .get("/user")
                .then(
                    response => {
                        console.log(response);

                        commit("fillUpUserData", axios);
                    },
                    error => {
                        console.log(error);
                    }
                )
                .catch(e => console.error(e));
        },
        logout({ commit }) {
            return axios.post("/logout").then(response => {
                console.log("logout response", response);
                localStorage.removeItem("token");
                commit("clearUserData");
            });
        }
    }
};

export default user;