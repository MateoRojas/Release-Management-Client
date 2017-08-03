<template>
  <div class="filter">
    <div style="width:85%; margin:auto;">
      <div class="row gutters">
          <div class="col col-1">
              <div class="form-item">
                  <select><option>---</option></select>
                  <div class="desc">Ambiente</div>
              </div>
          </div>
          <div class="col col-1">
              <div class="form-item">
                  <select><option>---</option></select>
                  <div class="desc">Proyecto</div>
              </div>
          </div>
          <div class="col col-1">
              <div class="form-item">
                  <select><option>---</option></select>
                  <div class="desc">Aplicación</div>
              </div>
          </div>
          <div class="col col-1">
              <div class="form-item">
                  <select><option>---</option></select>
                  <div class="desc">Estado</div>
              </div>
          </div>
          <div class="col col-1">
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
          </div>
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
export default {
  name: 'filter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
