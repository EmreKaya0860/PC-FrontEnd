<template>
  <div id="axios-get">
    <table id="customers">
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      <tr v-for="post of posts" :key="post.id">
        <td>
          {{post.name}}
        </td>
        <td>
          {{post.department}}
        </td>
        <td>
          {{post.email}}
        </td>
        <td><button v-on:click="deletePosts(post.id)">Delete</button></td>
      </tr>
    </table>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errors: [],
      deleteStat: false,
      emp_for_del_manager: []
    };
  },
  methods: {
    getPosts() {
      axios
          .get("http://localhost:8080/managers")
          .then((response)=>{this.posts=response.data})
          .catch(error => {
            this.errors.push(error);
          });
    },
    deletePosts(id) {
      axios
      .delete("http://localhost:8080/managers/del="+id)
      .then(()=>{this.getPosts();})
      .catch((response) =>{
        console.log(response);
      })
    },
    checkDelete(id){
      axios
          .get("http://localhost:8080/managers/"+id)
          .then((response)=>{this.emp_for_del_manager=response.data})
            

    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>

