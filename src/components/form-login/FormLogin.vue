<template>
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
      <btn-base
        :title="'sign in'"
        :btnType="'submit'"
        class="btn-form"
        @click.native="validateLogin"
      />
    </router-link>
  </form>
</template>

<script>
import InputGroup from "../shared/input-group/InputGroup";
import SelectWithLabel from "../shared/select/SelectWithLabel";
import Button from "../shared/button/Button";

export default {
  components: {
    "ipt-group": InputGroup,
    "select-group": SelectWithLabel,
    "btn-base": Button
  },

  data() {
    return {
      langSelect: "",
      username: "",
      pass: "",
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
      ]
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
</style>
