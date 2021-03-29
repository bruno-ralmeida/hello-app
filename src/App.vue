<template>
  <router-view></router-view>
</template>


<style>
:root{
  --purple: #8e44ad;
  --darker: #2c3e50;
  --gray: #95a5a6;
  --white: #ecf0f1;
  --blue: #3498db;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
}

</style>
