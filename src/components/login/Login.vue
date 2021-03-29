<template>
  <div class="login">
    <section class="form_login flex-col">
      <form class="form">
        <h2>sign up</h2>
        <div class="form_group">
          <label for="user">pser</label>
          <input type="text" id="user" autocomplete="false"/>
        </div>
        <div class="form_group">
          <label for="pass" required>password</label>
          <input type="password" id="pass" autocomplete="false"/>
        </div>
        <div class="form_group">
          <label for="country">country</label>
          <select name="country_select" id="country">
            <option value="1">Brasil</option>
            <option value="2">Estados Unidos</option>
          </select>
        </div>
        <div class="form_group">
          <button>sign up</button>
          <button>Reset</button>
        </div>
      </form>
    </section>
    <aside class="login_image flex-col"></aside>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 65vw auto;
  grid-template-areas: "form image";
}

.form_login,
.login_image {
  justify-content: center;
  align-items: center;
}

.form_login {
  grid-area: form;
  background: var(--darker);
}

.login_image {
  grid-area: image;
  background: var(--purple);
}

.form {
  background: var(--white);
}
</style>
