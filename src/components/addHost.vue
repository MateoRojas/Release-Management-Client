<template>
  <div class="form">
    <div id="form">
      <fieldset>
        <legend v-if="id == 0">Nuevo</legend>
        <legend v-else>Editar</legend>
        <div class="form-item">
            <label>Nombre <span v-if=" name == ''" class="req">*</span></label>
            <input v-model="name" type="text">
        </div>
        <div class="form-item">
            <label>Dirección IP <span v-if="ipAddress == ''" class="req">*</span></label>
            <input v-model="ipAddress" type="text">
        </div>
        <div class="form-item">
            <label>RAM <span v-if="ram == ''" class="req">*</span></label>
            <input v-model="ram" type="text">
        </div>
        <div class="form-item">
            <label>Sistema Operativo <span v-if="selectedOS == 0" class="req">*</span></label>
            <select v-model="selectedOS">
                <option v-if="selectedOS == 0" value="0">---</option>
                <option v-for="system in systems" v-bind:value="system.id">{{ system.name }}  {{ system.version}}</option>
            </select>
        </div>
        <div class="form-item">
            <label>Cantidad de CPUs <span v-if="amountCpu == ''" class="req">*</span></label>
            <input v-model="amountCpu" type="text">
        </div>
        <div>
            <button v-on:click="sendInfo">Guardar</button>
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
      id: 0,
      name: '',
      ipAddress: '',
      ram: 0,
      selectedOS: 0,
      amountCpu: 0,
      systems: []
    }
  },
  methods: {
    fetchOs: function(){
      axios.get('http://localhost/os').then(function (response) {
        this.systems = response.data;
      }.bind(this));
    },
    sendInfo: function() {
      if(this.name != '' && this.ipAddress != '' && this.ram != 0 && this.selectedOS != 0 && this.amountCpu != 0){
        let data = {};
        if(this.id != 0){
          data = {
            id: this.id,
            name: this.name,
            ipAddress: this.ipAddress,
            ram: this.ram,
            amountCpu: this.amountCpu,
            osId: this.selectedOS
          }
        } else {
          data = {
            name: this.name,
            ipAddress: this.ipAddress,
            ram: this.ram,
            amountCpu: this.amountCpu,
            osId: this.selectedOS
          }
        }
        axios.post('http://localhost/host', data).then(function (response){
          this.$router.push({path: '/hosts'})
        }.bind(this));
      }
    }
  },
  created: function() {
    this.fetchOs();
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    this.ipAddress = this.$route.query.ipAddress;
    this.ram = this.$route.query.ram;
    this.selectedOS = this.$route.query.osId;
    this.amountCpu = this.$route.query.amountCpu;
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
