<template>
  <div class="osServer">
    <div id="table">
      <h5>{{this.$route.query.head}}</h5>
      <table class="striped">
        <tr>
          <th>Nombre</th>
          <th>Version</th>
          <th>Acción</th>
        </tr>
        <tr v-for="row in rows">
          <td>{{ row.name }}</td>
          <td>{{ row.version }}</td>
          <td>
            <button v-on:click.once="detele(row.id)"><img src="../assets/media/icons/error.png"></button>
            <button v-on:click="edit(row.id, row.name, row.version)"><img src="../assets/media/icons/edit.png"></button>
          </td>
        </tr>
      </table>
      <button v-on:click="newEntry"><img src="../assets/media/icons/plus.png"></button>
    </div>
    <!-- <addForm v-bind:version="version" v-bind:name="name" v-bind:id="id"></addForm> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'form',
  data () {
    return {
      rows : []
    }
  },
  methods: {
    newEntry: function() {
      this.$router.push({path: '/addOsServer', query: {path: 'os', name: '', id: 0, version: ''}});
    },
    fetchData: function() {
      axios.get('http://localhost/os/').then(function (response) {
        this.rows = response.data;
      }.bind(this));
    },
    edit :function(id, name, version){
      this.name = name;
      this.id = id;
      this.$router.push({path: '/addOsServer', query: {path: 'os', name: name, id: id, version: version}})
    }
  },
  created : function(){
    this.fetchData();
  }
}
</script>
<style scoped>
th {
  background-color: #F77E34;
  color:white;
}

#table {
  width:auto;
  max-width: 40%;
  justify-content:center;
  margin:auto;
}

td{
  horizontal-align: middle;
}

button{
  padding: 2px;
  background: rgba(0, 0, 0, 0);
}
</style>
