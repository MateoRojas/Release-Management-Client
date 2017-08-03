<template>
  <div class="form">
    <div id="form">
      <fieldset>
        <legend>Solicitud</legend>
        <div class="form-item">
            <label>Proyecto <span class="req">*</span></label>
            <select>
                <option value="">---</option>
            </select>
        </div>
        <div class="form-item">
            <label>Aplicacion <span class="req">*</span></label>
            <select>
                <option value="">---</option>
            </select>
        </div>
        <div class="form-item">
            <label>Ambiente <span class="req">*</span></label>
            <select>
                <option value="">---</option>
            </select>
        </div>
        <div class="form-item">
            <label>Version <span class="req">*</span></label>
            <input type="text">
        </div>
        <div class="form-item">
            <label>Fecha <span class="req">*</span></label>
            <input type="datetime-local">
        </div>
        <div class="form-item">
            <label>Archivo <span class="req">*</span></label>
            <input type="file">
        </div>
        <div class="form-item">
            <label>Comentarios</label>
            <textarea rows="4"></textarea>
        </div>
        <div>
            <button>Enviar</button>
        </div>
      </fieldset>
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
  width:500px;
  justify-content:center;
  margin:auto;
}

textarea {
  resize: none;
}
</style>
