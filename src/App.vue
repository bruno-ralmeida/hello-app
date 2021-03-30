<template>
  <router-view></router-view>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
:root{
  --dark: #43475a;
  --darkness: #3a3d4d;
  --shadow: #3b3e4e;
  --gray: #95a5a6;
  --white: #ecf0f1;
  --light-blue: #44a1b8;
  --blue: #4a90e2;
  --dark-blue: #333972;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
body {
  background: var(--dark);
}
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
}

</style>
