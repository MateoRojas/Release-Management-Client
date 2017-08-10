<template>
  <div class="form">
    <div id="form">
      <fieldset>
        <legend v-if="id == 0">Nuevo</legend>
        <legend v-else>Editar</legend>
        <div class="form-item">
            <label>Nombre <span v-if="name == ''" class="req">*</span></label>
            <input v-model="name" type="text">
        </div>
        <div class="form-item">
            <label>Version <span v-if="version == ''" class="req">*</span></label>
            <input v-model="version" type="text">
        </div>
        <div>
            <button v-on:click="sendInfo">Guardar</button>
        </div>
        <div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'form',
  data () {
    return {
      name: '',
      id: 0,
      version: ''
    }
  },
  methods: {
    sendInfo: function() {
      if(this.name != '' && this.version != ''){
        let update = {};
        if(this.id != 0){
          update = {
            name: this.name,
            version: this.version,
            id: this.id
          }
        } else {
          update = {
            name: this.name,
            version: this.version
          }
        }
        axios.post('http://localhost/' + this.$route.query.path, update).then(function (response){
          console.log(response.data);
          this.$router.push({path: '/osServer'})
        }.bind(this));
      }
    }
  },
  created: function(){
    this.name = this.$route.query.name;
    this.id = this.$route.query.id;
    this.version = this.$route.query.version;
  }
}
</script>
<style scoped>
.form {
  width:40%;
  justify-content:center;
  margin:auto;
}

textarea {
  resize: none;
}
</style>
