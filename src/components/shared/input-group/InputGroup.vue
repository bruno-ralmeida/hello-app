<template>
  <div-group class="ipt-grid-base">
    <img-responsive :url="iconSrc" :title="iconTitle" class="img-base" />
    <label :for="label" class="lbl-base"> {{ label }} </label>
    <input
      :type="typeInput"
      :id="label"
      class="ipt-base"
      @focus="addBorder"
      @blur="removeBorder"
    />
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
      type: String
    },
    iconTitle: {
      type: String
    },
    typeInput: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    addBorder(e) {
      this.$el.classList.add("border");
    },
    removeBorder(e) {
      this.$el.classList.remove("border");
    }
  }
};
</script>

<style scoped>
.ipt-base, .lbl-base {
  align-self: stretch;
  border: none;
  color: var(--white);
  font-size: 16pt;
  padding: 0 .5em;
}

.img-base {
  grid-area: icon;
  justify-self: center;  
  
}

.lbl-base {
  grid-area: label;
  text-transform: capitalize;
  padding-top: .25em;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
  
}

.ipt-base {
  grid-area: input;
  outline: none;
  background: var(--darkness);
  border-left: 1px solid var(--dark);
}

.ipt-grid-base {
  background: var(--darkness);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 40px auto;
  grid-template-areas:
    "icon label"
    "icon input";
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.border {
  border-color: var(--light-blue);
  transition: 0.3s ease-in;
}
</style>
