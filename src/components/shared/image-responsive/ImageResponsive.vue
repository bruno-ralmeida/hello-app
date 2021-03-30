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
    width: auto;
  }
</style>
