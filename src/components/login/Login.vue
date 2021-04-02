<template>
  <main class="login">
    <img-responsive
      :url="
        'https://fontmeme.com/permalink/210330/dd946e6256e7a4df20c627fad7e90697.png'
      "
      :title="'logo'"
      class="logo"
    />
    <section class="form_login flex-col">
      <form-login />
    </section>

    <aside class="login_aside flex-col">
      <img-responsive
        :url="'https://img.icons8.com/fluent/500/ffffff/bot.png'"
        :title="'image login'"
      />
      <div class="login_content">
        <p>
          The objective of the Hello app is to leverage geolocation to obtain
          the users country so it can then generate a customized greeting in the
          users native language.
        </p>
      </div>
    </aside>
  </main>
</template>

<script>
import FormLogin from '../form-login/FormLogin';
import ImageResponsive from "../shared/image-responsive/ImageResponsive";

export default {
  components: {
    "form-login" : FormLogin,
    "img-responsive": ImageResponsive
  },
};
</script>

<style scoped>
.form_login,
.login_aside {
  justify-content: center;
  align-items: center;
}

.form_login {
  grid-area: form;
  width: 100%;
}

.logo {
  grid-area: logo;
  justify-self: flex-start;
  padding: 1em 0.5em;
}

.login_aside {
  grid-area: aside;
  background: var(--dark-blue);
  color: var(--white);
  min-height: 100vh;
  padding: 0 2em;
  font-size: 16pt;
}


.login {
  display: grid;
  position: absolute;
  grid-template-rows: 10vh auto;
  grid-template-columns: 60vw auto;
  grid-template-areas:
    "logo aside"
    "form aside";
}

@media only screen and (max-width: 1024px) {
  .login {
    grid-template-columns: 100vw;
    grid-template-rows: 10vh auto auto;
    grid-template-areas:
      "logo"
      "form"
      "aside";
  }

  .form_login > form, .login_aside {
    width: auto;
    min-height: 90vh;
  }

}
</style>
