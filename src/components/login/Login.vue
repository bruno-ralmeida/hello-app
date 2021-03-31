<template>
  <div class="login">
    <img-responsive
      :url="
        'https://fontmeme.com/permalink/210330/dd946e6256e7a4df20c627fad7e90697.png'
      "
      :title="'logo'"
      class="logo"
    />
    <section class="form_login flex-col">
      <form class="flex-col">
        <h2 class="form-title">sign in</h2>

        <ipt-group
          :iconSrc="'https://img.icons8.com/metro/20/ffffff/user-male.png'"
          :iconTitle="'user-icon'"
          :label="'user *'"
          :typeInput="'text'"
          @input.native="username = $event.target.value"
        />

        <ipt-group
          :iconSrc="'https://img.icons8.com/metro/18/ffffff/lock-2.png'"
          :iconTitle="'lock-icon'"
          :label="'password *'"
          :typeInput="'password'"
          @input.native="pass = $event.target.value"
        />

        <select-group
          :iconSrc="
            'https://img.icons8.com/pastel-glyph/20/ffffff/earth-planet.png'
          "
          :iconTitle="'world-icon'"
          :languages="languages"
          :label="'language'"
          @change.native="langSelect = $event.target.value"
        />

        <router-link
          class="link flex-col"
          :to="{
            name: 'home',
            query: { user: this.username, lang: this.langSelect }
          }"
        >
          <btn-base :title="'sign in'" :btnType="'submit'" class="btn-form" @click.native="validateLogin"/>
        </router-link>
      </form>
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
  </div>
</template>

<script>
import InputGroup from "../shared/input-group/InputGroup";
import SelectWithLabel from "../shared/select/SelectWithLabel";
import Button from "../shared/button/Button";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";

export default {
  components: {
    "ipt-group": InputGroup,
    "select-group": SelectWithLabel,
    "btn-base": Button,
    "img-responsive": ImageResponsive
  },
  data() {
    return {
      languages: [
        "",
        "ar",
        "az",
        "be",
        "bg",
        "bn",
        "bs",
        "cs",
        "da",
        "de",
        "dz",
        "el",
        "en",
        "en-gb",
        "en-us",
        "es",
        "et",
        "fa",
        "fi",
        "fil",
        "fr",
        "he",
        "hi",
        "hr",
        "hu",
        "hy",
        "id",
        "is",
        "it",
        "ja",
        "ka",
        "kk",
        "km",
        "ko",
        "lb",
        "lo",
        "lt",
        "lv",
        "mk",
        "mn",
        "ms",
        "my",
        "ne",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sq",
        "sr",
        "sv",
        "sw",
        "th",
        "tk",
        "uk",
        "vi",
        "zh"
      ],
      langSelect: "",
      username: "",
      pass: ""
    };
  },
  methods: {
    validateLogin(e){
      if (!this.username || !this.pass) {
        e.preventDefault()
        let iptUser = this.$children[1].$el
        let iptPass = this.$children[2].$el
        
        if(!this.username) iptUser.style.borderColor = '#e74c3caa'
        if(!this.pass) iptPass.style.borderColor = '#e74c3caa'
      };
    }
  }
};
</script>

<style scoped>
.form_login,
.login_aside {
  justify-content: center;
  align-items: center;
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

section .form_login {
  grid-area: form;
  width: 100%;
}

.btn-form {
  margin: 0.5em;
}

.link {
  text-decoration: none;
}

.form-title {
  align-self: center;
  margin: 0.5em 0;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  color: var(--white);
  font-weight: 600;
  font-size: 26pt;
}

form {
  border-radius: 1px;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: stretch;
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

  form,.login_aside {
    width: auto;
    min-height: 90vh;
  }


}
</style>
