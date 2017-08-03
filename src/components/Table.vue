<template>
  <div class="form">
    <div id="form">
      <table class="striped">
        <tr>
          <th>Aplicacion</th>
          <th>Proyecto</th>
          <th>Ambiente</th>
          <th>Versión</th>
          <th>Proxy</th>
          <th>Fecha</th>
          <th>Comentarios</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
        <tr>
          <td>Hola Mundo</td>
          <td>Kruger Corp</td>
          <td>Desarrollo</td>
          <td>2.21</td>
          <td>192.168.10.1</td>
          <td>7/8/2017 23:30</td>
          <td><textarea rows="1" cols="10" readonly></textarea></td>
          <td>Solicitud</td>
          <td>
            <button><img src="../assets/media/icons/success.png"></button>
            <button><img src="../assets/media/icons/play-button.png"></button>
            <button><img src="../assets/media/icons/error.png"></button>
            <button></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background: white;
}

textarea {
  resize: none;
}

td{
  vertical-align: middle;
}
</style>
