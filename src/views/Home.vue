<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/aeo.jpg">
  </div>
</template>

<style scoped lang="scss">
  .home {
    margin:0;
    padding:16px;
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      max-width: 100%;
      width: 100%;
      height: 100vh;
      object-fit: contain;
    }
  }
</style>

<script>

export default {
  name: 'Home',
  
}
</script>
