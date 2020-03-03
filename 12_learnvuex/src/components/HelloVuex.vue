<template>
  <div>
    <p>HelloVuex:{{this.$store.state.counter}}</p>
    
    <p>HelloVuex-power:{{this.$store.getters.powerCounter}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
