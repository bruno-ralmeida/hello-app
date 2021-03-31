<template>
  <button
    class="btn"
    :btnType="btnType"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.btn {
  background: var(--blue);
  border-radius: 2px;
  border: none;
  color: var(--white);
  font-size: 16pt;
  font-weight: 500;
  padding: 10px;
  text-transform: capitalize;
  outline: none;
}

.btn:hover {
  transform: scale(1.03);
  transition: .1s ;
}

</style>
