<template>
  <div id="app-view">
    <CommonHeader/>
    <router-view/>
    <CommonFooter/>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
}
</script>


<style lang="scss">
@import "src/styles/global-style";

html {
  padding: 0;
  margin: 0;
  background-color: $color-cream;

  ul {
    padding: 0;
    margin: 0;
  }

  a {
    &:link,
    &:hover,
    &:visited,
    &:active {
      color: $color-navy;
      text-decoration: none;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-black;
}

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   font-weight: bold;
//   color: $color-navy;
// }
</style>
