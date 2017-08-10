<template>
  <div id="app">
    <div class="menu">
      <ul>
        <li><router-link to="/form">Solicitud</router-link></li>
        <li><router-link to="/summary">Resumen</router-link></li>
        <li><a href="contact.asp">Administrar</a></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.menu {
  margin-bottom: 40px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 50px;
    overflow: hidden;
    background-color: #F77E34;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #4ca0f5;
}
</style>
