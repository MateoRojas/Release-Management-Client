<template>
  <div class="osServer">
    <div id="table">
      <h5>Hosts</h5>
      <table class="striped">
        <tr>
          <th>Nombre</th>
          <th>Dirección IP</th>
          <th>CPUs</th>
          <th>Sistema Operativo</th>
          <th>Ram</th>
          <th>Acción</th>
        </tr>
        <tr v-for="row in rows">
          <td>{{ row.name }}</td>
          <td>{{ row.ipAddress }}</td>
          <td>{{ row.amountCpu }}</td>
          <td>{{ row.osName }}</td>
          <td>{{ row.ram }}</td>
          <td>
            <button v-on:click.once="detele(row.id)"><img src="../assets/media/icons/error.png"></button>
            <button v-on:click="edit(row.id, row.name, row.ipAddress, row.amountCpu, row.osId, row.ram, row.osName)"><img src="../assets/media/icons/edit.png"></button>
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
      this.$router.push({path: '/addHost', query: {id: 0, name: '', ipAddress: '', amountCpu: 0, osId: 0, ram: 0}});
    },
    fetchData: function() {
      axios.get('http://localhost/host').then(function (response) {
        this.rows = response.data;
      }.bind(this));
    },
    edit :function(id, name, ipAddress, amountCpu, osId, ram, osName){
      this.name = name;
      this.id = id;
      this.$router.push({path: '/addHost', query: {id: id, name: name, ipAddress: ipAddress, amountCpu: amountCpu, osId: osId, ram: ram}})
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
  max-width: 70%;
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
