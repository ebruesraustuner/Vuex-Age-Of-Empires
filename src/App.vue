<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/units">Units</router-link>
    <router-view></router-view>
  </div>
  
</template>

<style lang="scss">
@import 'assets/main.scss';
@import 'assets/reset.scss';

.navbar {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  
  a {
    font-weight: bold;
    color: lightblue;
    align-content: flex-end;
  align-self: flex-end;
  align-items: flex-end;
  padding:0 8px;

    &.router-link-exact-active {
      color: #4c92ed;
    }
  }
}

</style>
