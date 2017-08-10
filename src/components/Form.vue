<template>
  <div class="form">
    <div id="form">
      <fieldset>
        <legend>Solicitud</legend>
        <div class="form-item">
            <label>Proyecto <span v-if=" selectedProject == 0" class="req">*</span></label>
            <select v-model="selectedProject" v-on:change="fetchApps">
                <option v-if=" selectedProject == 0" value="0">---</option>
                <option v-for="project in projects" v-bind:value="project.id">{{ project.name }}</option>
            </select>
        </div>
        <div class="form-item">
            <label>Aplicacion <span v-if="selectedApp == 0" class="req">*</span></label>
            <select v-model="selectedApp" v-on:change="fectchEnvironments">
                <option v-if="selectedApp == 0" value="0">---</option>
                <option v-for="app in apps" v-bind:value="app.id">{{ app.name }}</option>
            </select>
        </div>
        <div class="form-item">
            <label>Ambiente <span v-if="selectedEnv == 0" class="req">*</span></label>
            <select v-model="selectedEnv">
                <option v-if="selectedEnv == 0" value="0">---</option>
                <option v-for="env in environments" v-bind:value="env.id">{{ env.name }}</option>
            </select>

        </div>
        <div class="form-item">
            <label>Version <span v-if="version == ''" class="req">*</span></label>
            <input v-model="version" type="text">
        </div>
        <div class="form-item">
            <label>Fecha de Publicación<span v-if="calendar == ''" class="req">*</span></label>
            <input v-model="calendar" type="datetime-local">
        </div>
        <div class="form-item">
            <label>Archivo <span class="req">*</span></label>
            <input id="file" type="file">
        </div>
        <div class="form-item">
            <label>Comentarios</label>
            <textarea v-model="comments" rows="4"></textarea>
        </div>
        <div>
            <button v-on:click="sendInfo">Enviar</button>
        </div>
        <div>
          <br>
          <alert v-bind:message="message" v-bind:show="show" v-bind:type="type"></alert>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert';

export default {
  name: 'form',
  data () {
    return {
      message : '',
      type : 0,
      show : false,
      version : '',
      comments : '',
      apps : [],
      environments : [],
      projects : [],
      selectedProject : 0,
      selectedApp : 0,
      selectedEnv : 0,
      calendar: ''
    }
  },
  components: {
    'alert' : Alert
  },
  methods: {
    fetchProjects: function(){
      axios.get('http://localhost/project/').then(function (response) {
        this.projects = response.data;
        console.log(this.projects);
      }.bind(this));
    },
    fetchApps: function(){
      this.selectedApp = 0;
      this.apps = [];
      axios.get('http://localhost/app/project/' + this.selectedProject).then(function (response) {
        this.apps = response.data;
        console.log(this.apps);
      }.bind(this));
    },
    fectchEnvironments: function(){
      this.selectedEnv = 0;
      this.environments = [];
      if(this.selectedApp != 0){
        axios.get('http://localhost/servapp/app/' + this.selectedApp).then(function (response) {
          this.environments = response.data;
          console.log(this.apps);
        }.bind(this));
      }
    },
    activateAlert: function (message, type){
      this.message = message;
      this.show = true;
      this.type = type;
    },
    sendInfo: function() {
      if(this.selectedApp != 0 && this.selectedEnv != 0 && this.calendar != '' &&  this.version != '' && document.getElementById('file').files[0] != ''){
        var data = new FormData();
        data.append('application', this.selectedApp);
        data.append('environment', this.selectedEnv);
        data.append('calendar', this.calendar.replace(/T/gi, ' '));
        data.append('version', this.version);
        data.append('comments', this.comments);
        data.append('file', document.getElementById('file').files[0]);
        this.activateAlert('Enviando', 1);
        axios.post('http://localhost/form', data).then(function (response){
          console.log(response.data);
          if(response.data == 'OK'){
            this.activateAlert('Enviado Correctamente!', 0);
          } else {
            this.activateAlert(response.data, 2);
          }
        }.bind(this)).catch(function (err) {
              this.activateAlert(err.message, 2);
        }.bind(this));
      } else {
        this.activateAlert('Faltan Datos!', 1);
      }
    }
  },
  created: function() {
    this.fetchProjects();
  }
}
</script>


<style scoped>
.form {
  width:500px;
  justify-content:center;
  margin:auto;
}

textarea {
  resize: none;
}
</style>
