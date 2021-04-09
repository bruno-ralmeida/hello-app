<template>
  <main>
    <section class="card_welcome flex-row">
      <div class="flex-col">
        <span class="msg" v-html="this.msg"></span>
        <p>Have a great day!</p>
      </div>
      <router-link :to="{name: 'login'}"  class="btn-logout">
          <btn-base :title="'logout'" :btnType="'button'"/>
        </router-link>
    </section>
    <info-base :info="this.info" class="info"/>
    
  </main>
</template>

<script>
import Button from "../shared/button/Button";
import Infos from "../infos/Infos";

export default {
  components: {
    "btn-base": Button,
    "info-base": Infos
  },
  data() {
    return {
      data: "",
      msg: "",
      info: {}
    };
  },
  mounted() {
    this.data = this.$route.query;
    this.getLocationInfos();
  },
  methods: {
    getLocationInfos() {
      this.$http
        .get("http://ip-api.com/json/")
        .then(res => {
          const {
            city,
            country,
            countryCode,
            lat,
            lon,
            query,
            region,
            regionName,
            timezone,
            zip
          } = res.data;
          this.info = {
            city,
            country,
            countryCode,
            lat,
            lon,
            query,
            region,
            regionName,
            timezone,
            zip
          };

          if (!this.data.lang)
            this.generateMsg(countryCode.toLowerCase(), null);
          else if (this.data.lang) this.generateMsg(null, this.data.lang);
        })
        .catch(err => console.error(err));
    },

    generateMsg(cc, lang) {
      let url;
      cc
        ? (url = `https://fourtonfish.com/hellosalut/?cc=${cc}`)
        : (url = `https://fourtonfish.com/hellosalut/?lang=${lang}`);

      this.$http
        .get(url)
        .then(res => {
          this.msg = `<h2 style="font-size: 32pt; font-weight: bold; text-transform: none;"> ${res.data.hello} ${this.data.user} </h2> <p> you have successfully logged in! </p>`;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>

.card_welcome {
  grid-area: welcome;
  justify-content: space-between;
  color: var(--white);
  text-transform: capitalize;
}

.card_welcome {
  align-self: flex-start;
  font-size: 18pt;
  margin: 0.5em 0.75em;
}
.info {
  grid-area: infos;
}

main {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20vh 80vh;
  grid-template-areas:
    "welcome"
    "infos";
}

@media only screen and (max-width: 1024px) {
  main {
    grid-template-rows: auto auto;
  }
  .card_welcome {
    flex-direction: column-reverse;
  }

  .btn-logout {
    align-self: flex-end;
  }
}
</style>
