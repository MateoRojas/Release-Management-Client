<template>
  <div class="filter">
    <div style="width:85%; margin:auto;">
      <div class="row gutters">
          <div class="col col-2">
              <div class="form-item">
                  <select v-model="selectedEnv">
                    <option v-if=" selectedEnv == 0" value="0">---</option>
                    <option v-for="env in environments" v-bind:value="env.id">{{env.description}}</option>
                  </select>
                  <div class="desc">Ambiente</div>
              </div>
          </div>
          <div class="col col-2">
            <div class="form-item">
                <select v-model="selectedProject" v-on:change="fetchApps">
                  <option v-if=" selectedProject == 0" value="0">---</option>
                  <option v-for="project in projects" v-bind:value="project.id">{{project.name}}</option>
                </select>
                <div class="desc">Proyecto</div>
            </div>
          </div>
          <div class="col col-2">
            <div class="form-item">
                <select v-model="selectedApp">
                  <option v-if=" selectedApp == 0" value="0">---</option>
                  <option v-for="app in apps" v-bind:value="app.id">{{app.name}}</option>
                </select>
                <div class="desc">Aplicación</div>
            </div>
          </div>
          <div class="col col-2">
            <div class="form-item">
                <select v-model="selectedState">
                  <option v-if=" selectedState == 0" value="0">---</option>
                  <option v-for="state in states" v-bind:value="state.id">{{state.description}}</option>
                </select>
                <div class="desc">Estado</div>
            </div>
          </div>
          <!-- <div class="col col-1">
              <div class="form-item">
                  <select><option>---</option></select>
                  <div class="desc">Proxy</div>
              </div>
          </div>
          <div class="col col-2">
              <div class="form-item">
                  <input type="datetime-local">
                  <div class="desc">Fecha</div>
              </div>
          </div> -->
          <div class="col col-1">
              <div>
                  <button>Filtrar</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'filter',
  data () {
    return {
      selectedEnv : 0,
      environments : [],
      selectedState : 0,
      states : [],
      projects : [],
      selectedProject : 0,
      apps : [],
      selectedApp : 0
    }
  },
  methods : {
    fetchProjects: function(){
      axios.get('http://localhost/project/').then(function (response) {
        this.projects = response.data;
        console.log(this.projects);
      }.bind(this));
    },
    fectchEnvironments : function(){
      axios.get('http://localhost/catalog/1').then(function (response) {
        this.environments = response.data;
        console.log(this.environments);
      }.bind(this));
    },
    fetchStates : function(){
      axios.get('http://localhost/catalog/2').then(function (response) {
        this.states = response.data;
        console.log(this.environments);
      }.bind(this));
    },
    fetchApps: function(){
      this.selectedApp = 0;
      this.apps = [];
      axios.get('http://localhost/app/project/' + this.selectedProject).then(function (response) {
        this.apps = response.data;
        console.log(this.apps);
      }.bind(this));
    }
  },
  created: function() {
    this.fectchEnvironments();
    this.fetchStates();
    this.fetchProjects();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
