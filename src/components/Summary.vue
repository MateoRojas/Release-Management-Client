<template>
  <div class="summary">
    <div class="filter">
      <div style="width:85%; margin:auto;">
        <div class="row gutters">
            <div class="col col-2">
                <div class="form-item">
                    <select v-model="selectedEnv">
                      <option value="0">---</option>
                      <option v-for="env in environments" v-bind:value="env.id">{{env.description}}</option>
                    </select>
                    <div class="desc">Ambiente</div>
                </div>
            </div>
            <div class="col col-2">
              <div class="form-item">
                  <select v-model="selectedProject" v-on:change="fetchApps">
                    <option value="0">---</option>
                    <option v-for="project in projects" v-bind:value="project.id">{{project.name}}</option>
                  </select>
                  <div class="desc">Proyecto</div>
              </div>
            </div>
            <div class="col col-2">
              <div class="form-item">
                  <select v-model="selectedApp">
                    <option value="0">---</option>
                    <option v-for="app in apps" v-bind:value="app.id">{{app.name}}</option>
                  </select>
                  <div class="desc">Aplicación</div>
              </div>
            </div>
            <div class="col col-2">
              <div class="form-item">
                  <select v-model="selectedState">
                    <option value="0">---</option>
                    <option v-for="state in states" v-bind:value="state.id">{{state.description}}</option>
                  </select>
                  <div class="desc">Estado</div>
              </div>
            </div>
            <div class="col col-1">
                <div>
                    <button v-on:click="newFetchRows">Filtrar</button>
                </div>
            </div>
            <div>
        </div>
      </div>
    </div>
    <list v-bind:rows="rows"></list>
    <div align="center">
      <button v-if="page > 1" v-on:click="previousPage">Anterior</button><button v-if="page < maxPage" v-on:click="nextPage">Siguiente</button></div>
    </div>
  </div>
</template>

<script>
import List from './Table'
import axios from 'axios'

export default {
  name: 'summary',
  data () {
    return {
      maxPage : 0,
      page : 1,
      selectedEnv : 0,
      environments : [],
      selectedState : 0,
      states : [],
      projects : [],
      selectedProject : 0,
      apps : [],
      selectedApp : 0,
      rows : []
    }
  },
  components: {
    'list':List
  },
  methods : {
    nextPage: function(){
      if(this.page < (this.maxPage)){
        this.fetchRows(++this.page);
      }
    },
    previousPage: function(){
      if(this.page > 1){
        this.fetchRows(--this.page);
      }
    },
    fetchRows: function(page){
      console.log('Page: ' + this.page);
      var data = new FormData();
      data.append('status', this.selectedState);
      data.append('project', this.selectedProject);
      data.append('application', this.selectedApp);
      data.append('environment', this.selectedEnv);
      data.append('page', page);
      axios.post('http://localhost/servapp/filter/', data).then(function (response) {
        this.rows = response.data;
      }.bind(this));
    },
    newFetchRows(){
      var data = new FormData();
      data.append('status', this.selectedState);
      data.append('project', this.selectedProject);
      data.append('application', this.selectedApp);
      data.append('environment', this.selectedEnv);
      this.page = 1;
      axios.post('http://localhost/servapp/filter/maxpage', data).then(function (response) {
        this.maxPage = response.data;
        console.log(this.maxPage);
      }.bind(this));
      this.fetchRows(this.page);
    },
    fetchProjects: function(){
      axios.get('http://localhost/project/').then(function (response) {
        this.projects = response.data;
      }.bind(this));
    },
    fectchEnvironments : function(){
      axios.get('http://localhost/catalog/1').then(function (response) {
        this.environments = response.data;
      }.bind(this));
    },
    fetchStates : function(){
      axios.get('http://localhost/catalog/2').then(function (response) {
        this.states = response.data;
      }.bind(this));
    },
    fetchApps: function(){
      this.selectedApp = 0;
      this.apps = [];
      axios.get('http://localhost/app/project/' + this.selectedProject).then(function (response) {
        this.apps = response.data;
      }.bind(this));
    }
  },
  created: function() {
    this.fectchEnvironments();
    this.fetchProjects();
    this.fetchStates();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
