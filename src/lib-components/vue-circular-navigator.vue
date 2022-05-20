
<template>
  <nav ref="nav" :style="{ top: localConf.top, right: localConf.right}">      
      <div class="nav-content">
          <div class="toggle-btn" ref="toggleBtn">              
              <i :class="[centralIcon]" :style="{color: localConf.iconDefaultColor}" ></i>
          </div>
          <span title="Primero" style="--i:5;">
              <a href="#">
                  <i class='bx bx-wifi active' ></i>                  
              </a>
          </span>
          <span title="Segundo" style="--i:4;">
              <a href="#">
                  <i class='bx bx-plus-circle'></i>
              </a>
          </span>
          <span title="Segundo" style="--i:3;">
              <a href="#">
                  <i class='bx bxs-arrow-from-left'></i>
              </a>
          </span>
          <span title="Segundo" style="--i:2;">
              <a href="#">
                  <i class='bx bxs-arrow-from-left'></i>
              </a>
          </span>

          <span title="Segundo" style="--i:1;">
              <a href="#">
                  <i class='bx bxs-arrow-from-left'></i>
              </a>
          </span>
          
      </div>
  </nav>
</template>

<script>
import 'boxicons/css/boxicons.min.css';

import defaultConf from './default.conf';
import {initEvents} from './utils.js'
export default /*#__PURE__*/{
  name: 'VueCircularNavigator', // vue component name
  data() {
    return {
        localConf: defaultConf,
    };
  },
  props:['conf',],
  mounted() {
    const nav = this.$refs.nav;
    const toogleBtn = this.$refs.toggleBtn;

    initEvents(nav, toogleBtn);

    this.localConf = {
        ...this.localConf,
        ...this.conf,
    }    


  },
  computed: {
    centralIcon(){
        return this.localConf.centralIcon
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
  /* Inspiration from:https://www.youtube.com/watch?v=MtNpxdQ9DUo */

nav {
    position: fixed;
    top: 60%;
    right: 10px;
    width: 70px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
}


/** Full menu - Not compatible with drag **/


/* 
nav {
    position: absolute;
    top: 500px;
    right: 10px;
    width: 70px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    transition: all 0.6s ease;
}

nav.open {
    right: 120px;
    top: 430px;
}

*/

nav .nav-content {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
}

.nav-content .toggle-btn,
.nav-content span a {
    height: 60px;
    width: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 0 20 rgba(0, 0, 0, 0.2);
}

.nav-content .toggle-btn {
    font-size: 25px;
    color: #0e2431;
    z-index: 100;
    cursor: pointer;
    transform: rotate(-225deg);
    transition: all 0.6s ease;
}

nav.open .toggle-btn {
    transform: rotate(0deg);
}

.nav-content span {
    position: absolute;
    transition: all 0.6s ease;
    opacity: 0;
}

nav.open .nav-content span {
    transform: rotate(calc(var(--i) * (360deg / 8))) translateY(120px);
    opacity: 1;
}

.nav-content span a {
    text-decoration: none;
    transform: rotate(45deg);
}

.nav-content span a i {
    font-size: 24px;
    color: #0e2431;
    transform: rotate(calc(var(--i) * (360deg / -8)));
    opacity: 0.8;
    transition: 0.2s;
}

.nav-content span a i.active {
    color: #5f8e12
}

.nav-content span a:hover i {
    opacity: 1;
}
</style>
