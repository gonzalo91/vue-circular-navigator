<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueCircularNavigatorSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VueCircularNavigatorSample,
  // }
});
</script>

<template>
  <div id="app" style="background-color: red">
    <vue-circular-navigator />
  </div>
</template>

<style >
body{
  background: purple;
}
</style>
