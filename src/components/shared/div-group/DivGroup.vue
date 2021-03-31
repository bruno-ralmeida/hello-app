<template>
    <div class="div-group flex-col">
      <slot></slot>
    </div>
</template>

<style scoped>
.div-group {
  margin: 0.5em;
  height: 75px; 
  align-items: center;
  background: var(--darkness);
  display: grid;
  grid-template-columns: 60px 4fr;
  grid-template-rows: 40px auto;
}

</style>
