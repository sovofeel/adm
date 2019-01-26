import axios from 'axios'

const works = {
  actions: {
    addWork(store, work) {
      axios.post("/works", work).then(response => { });
    }
  }
};

export default works;