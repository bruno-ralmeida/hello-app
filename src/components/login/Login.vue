<template>
  <div class="login">
    <section class="form_login flex-col">
      <form class="form flex-col">
        <h2 class="form-title">sign up</h2>

        <ipt-group
          :iconSrc="'https://img.icons8.com/metro/24/ffffff/user-male.png'"
          :iconTitle="'user-icon'"
          :label="'user'"
          :typeInput="'text'"
        />
        <ipt-group
          :iconSrc="'https://img.icons8.com/metro/22/ffffff/lock-2.png'"
          :iconTitle="'lock-icon'"
          :label="'password'"
          :typeInput="'password'"
        />

        <div-group>
          <btn-base :title="'sign up'" :btnType="'submit'" />
        </div-group>
        
      </form>
    </section>
    <aside class="login_aside flex-col">
      <img-responsive
        :url="'https://img.icons8.com/ios/500/4a90e2/robot-gustav.png'"
        :title="'image login'"
      />
      <div class="login_content">
        <h2>Hello App</h2>
        <p>
          O objetivo do Hello App é aproveitar a geolocalização para obter o
          país dos usuários para que ele possa gerar uma saudação personalizada
          na língua nativa dos usuários.
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import InputGroup from "../shared/input-group/InputGroup";
import DivGroup from "../shared/div-group/DivGroup";
import Button from "../shared/button/Button";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";

export default {
  components: {
    "ipt-group": InputGroup,
    "div-group": DivGroup,
    "btn-base": Button,
    "img-responsive": ImageResponsive
  }
};
</script>

<style scoped>
.login {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 60vw auto;
  grid-template-areas: "form aside";
}

.form_login,
.login_aside {
  justify-content: center;
  align-items: center;
}

.form_login {
  grid-area: form;
}

.login_aside {
  grid-area: aside;
  background: var(--dark-blue);
  padding: 0 2em;
  color: var(--white);
  font-family: "Orbitron", sans-serif;
  font-size: 16pt;
}

.form {
  border-radius: 1px;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: stretch;
}

.form-title {
  align-self: center;
  margin: .5em 0;
  text-transform: capitalize;
  color: var(--white);
  font-weight: 800;
  font-size: 24pt;
}
</style>
