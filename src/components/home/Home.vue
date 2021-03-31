<template>
  <div>
    <h2>Home</h2>
    <br>
    <h3> Usuário:</h3>
    <p>{{ this.data.user }}</p>
    <h3> Idioma Selecionado: </h3>
    <p>{{ this.data.lang }}</p>
    <h3>Mensagem: </h3>
    <p v-html="this.msg">
      
    </p>
    <h3>Infos:</h3>
    <ul>
      <li v-for="info of this.info" :key="info"> 
        {{ info }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
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

          if (!this.data.lang) this.generateMsg(countryCode.toLowerCase(), null);
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
          this.msg = `${res.data.hello} ${this.data.user}!  You have successfully logged in!`;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped></style>
