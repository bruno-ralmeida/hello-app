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
      type: String,
      required: true
    },
    iconTitle: {
      type: String,
      required: true
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
.img-base {
  grid-area: icon;
  justify-self: center;  
  
}

.ipt-base, .lbl-base {
  align-self: stretch;
  border: none;
  border-left: 1px solid var(--dark);
  color: var(--white);
  padding: .25em 0  0 .5em ;
}

.lbl-base {
  grid-area: label;
  font-size: 16pt;
  border-bottom: 1px solid var(--dark);
  text-transform: capitalize;
}

.ipt-base {
  grid-area: input;
  background: transparent;
  font-size: 14pt;
  margin: 0;
  outline: none;
}

.ipt-grid-base {
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
