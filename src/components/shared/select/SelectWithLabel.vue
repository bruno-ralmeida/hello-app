<template>
  <div-group class="select-grid-base">
    <img-responsive :url="iconSrc" :title="iconTitle" class="img-base" />
    <label for="country" class="lbl-select">{{ label }}</label>
    <select name="country_select" id="country" class="options">
      <option
        class="option"
        :value="lang"
        v-for="lang of languages"
        :key="lang"
      >
        <h4> {{ lang }} </h4>
      </option>
    </select>
  </div-group>
</template>
<script>
import DivGroup from "../div-group/DivGroup";
import ImageResponsive from "../image-responsive/ImageResponsive";
export default {
  components: {
    "div-group": DivGroup,
    "img-responsive": ImageResponsive
  },
  props: {
    iconSrc: {
      type: String,
      required: true
    },
    iconTitle: {
      type: String,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.img-base {
  grid-area: icon;
  justify-self: center;
}

.lbl-select,
.options {
  align-self: stretch;
  border: none;
  border-left: 1px solid var(--dark);
  color: var(--white);
  padding: 0.25em 0 0 0.5em;
  text-transform: capitalize;
}

.lbl-select {
  grid-area: label;
  font-size: 16pt;
  border-bottom: 1px solid var(--dark);
}

.options {
  grid-area: options;
  cursor: pointer;
  background: transparent;
  margin: 0;
  outline: none;
  font-size: 14pt;
}

.options > .option {
  background: var(--dark);
}

.select-grid-base {
  grid-template-areas:
    "icon label"
    "icon options";
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
</style>
