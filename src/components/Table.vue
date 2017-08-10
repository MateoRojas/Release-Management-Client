<template>
  <div class="form">
    <div id="form">
      <table class="striped">
        <thead>
          <tr>
            <th>Aplicacion</th>
            <th>Proyecto</th>
            <th>Ambiente</th>
            <th>Versión</th>
            <th>Fecha</th>
            <th>Comentarios</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows">
            <td>{{ row.name }}</td>
            <td>{{ row.projectName }}</td>
            <td>{{ row.environment }}</td>
            <td>{{ row.version }}</td>
            <td>{{ formatDate(new Date(row.date)) }}</td>
            <td><textarea rows="1" cols="10" readonly> {{ row.comments }}</textarea></td>
            <td>{{ row.state }}</td>
            <td>
              <button v-if="row.state == 'PUBLICADO'"><img src="../assets/media/icons/left-arrow.png"></button>
              <button v-if="row.state == 'SOLICITADO'"v-on:click.once="acceptClicked(row.requestId)" ><img src="../assets/media/icons/success.png"></button>
              <button v-if="row.state != 'PUBLICADO'"v-on:click.once="publishClicked(row.requestId)" ><img src="../assets/media/icons/play-button.png"></button>
              <button v-on:click.once="cancelClicked(row.requestId)"><img src="../assets/media/icons/error.png"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'form',
  props: ['rows'],
  data () {
    return {
    }
  },
  methods: {
    formatDate: function(date){
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    },
    acceptClicked: function(request){
      console.log('Accepted + id: ' + request);
    },
    publishClicked: function(request){
      console.log('Published + id: ' + request);
    },
    cancelClicked: function(request){
      console.log('Canceled + id: ' + request);
    }
  },
  created: function(){
  }
}
</script>

<style scoped>
.form {
  width:85%;
  justify-content:center;
  margin:auto;
}

th {
  background-color: #F77E34;
  color:white;
}

button{
  padding: 2px;
  background: rgba(0, 0, 0, 0);
}

textarea {
  resize: none;
}

td{
  vertical-align: middle;
}
</style>
