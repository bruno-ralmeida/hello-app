<template>
  <section class="container_info">
      <h3>geolocation information</h3>
      <ul class="infos">
        <li class="info_item flex-row">
          <span class="info"> city: </span>
          <p>{{ info.city }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> country: </span>
          <p>{{ info.country }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> country code: </span>
          <p>{{ info.countryCode }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> lat: </span>
          <p>{{ info.lat }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> lon: </span>
          <p>{{ info.lon }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> ip: </span>
          <p>{{ info.query }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> region code: </span>
          <p>{{ info.region }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> region name: </span>
          <p>{{ info.region }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> timezone: </span>
          <p>{{ info.timezone }}</p>
        </li>
        <li class="info_item flex-row">
          <span class="info"> zip: </span>
          <p>{{ info.zip }}</p>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
    props: ['info']
}
</script>

<style scoped>

.info_item,
.container_info h3 {
  color: var(--white);
  text-transform: capitalize;
}

.container_info {
  align-self: center;
  background: var(--dark);
  border-radius: 10px;
  box-shadow: inset 2px 2px 10px var(--shadow), 5px 5px 10px var(--shadow);
  justify-self: center;
  max-width: 600px;
  padding: 0.5em 1em;
  position: relative;
  width: 100%;
}
.container_info h3 {
  font-size: 28pt;
  margin: 0.75em 0.5em;
}

ul.infos {
  list-style: none;
}

li.info_item {
  margin: 0.5em 1em;
  font-size: 14pt;
  border-left: 3px solid var(--light-blue);
}

.info_item > .info {
  margin: 0 0.5em;
  font-weight: 800;
}

</style>