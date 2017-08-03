<template>
  <div class="login">
    <div style=" width:320px;justify-content: center; margin:auto;">
        <fieldset>
            <legend>LOGIN</legend>
            <div class="form-item">
                <label>User</label>
                <input type="email" name="user-email">
            </div>
            <div class="form-item">
                <label>Password</label>
                <input type="password" name="user-password">
            </div>
            <div>
                <button>Log in</button>
            </div>
        </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
