<template>
  <div class="page-welcome">
    <h1>うぇるかむ</h1>
    {{ ping }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      ping: null,
    }
  },

  created() {
    this.axios.get('/ping-pub').then((res) => {
      this.ping = res.data
    })
  },
}
</script>

<style scoped>

</style>
