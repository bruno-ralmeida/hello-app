<template> 
  <img :src="url" :alt="title">
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
  img{
    max-width: 100%;
    width: auto;
  }
</style>
