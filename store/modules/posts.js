import axios from 'axios'

const posts = {
  actions: {
    addPost(store, post) {
      axios.post('/posts', post).then(() => { })
    }
  }
}

export default posts
