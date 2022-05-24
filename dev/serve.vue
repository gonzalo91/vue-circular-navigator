<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueCircularNavigatorSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  data(){
    return {
      wifi: false,
      ecologic: true,
      color: '',
      conf: {    
        /*top: '55vh',*/
        top: '70vh',
      },
      options: [
            {
                id:1,
                title: 'Wifi',
                icon: 'bx bx-wifi',                
                type:'switch',                
                value: false,
                disabled: false,
            }, 
            {
                id:2,
                title: 'Select color',
                icon: 'bx bx-color',                
                type:'action',
                value: false,
                disabled: false,
            }, 
            {
                id:3,
                title: 'Ecologic Mode',
                icon: 'bx bx-leaf',                
                type:'switch',
                value: true,
                disabled: false,
            }, 
        ]

    }
  },
  methods:{
    clicked(option){
      if(option.id == 1){
        this.wifi = option.value
      }
      if(option.id == 2){
        this.color = prompt('Enter the color:')
      }

      if(option.id == 3){
        this.ecologic = option.value;
      }
    }
  }
});
</script>

<template>
  <div id="app" >    
    <strong>Wifi:</strong> {{ this.wifi ? 'On' : 'Off' }} <br>
    <strong>Color:</strong> {{ this.color  }} <br>
    <strong>Ecologic</strong> {{ this.ecologic ? 'On' : 'Off' }}
    <vue-circular-navigator @optionClicked="clicked" :conf="conf" :options="options"/>
  </div>
</template>

<style >
body{ 
  background: #E0E0E0;
  height: 1000px;
}
</style>
