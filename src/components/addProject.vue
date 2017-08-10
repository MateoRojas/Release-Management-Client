<template>
  <div class="form">
    <div id="form">
      <fieldset>
        <legend>Nuevo</legend>
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
  props: ['path'],
  data () {
    return {
      name : '',
      version : ''
    }
  },
  methods: {
    sendInfo: function() {
      if(this.name != '' && this.version != ''){
        var data = new FormData();
        data.append('name', this.name);
        data.append('version', this.version);
        axios.post('http://localhost/' + this.path, data).then(function (response){
          console.log(response.data);
        }.bind(this));
      }
    }
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
