<template>
  <div id="app">
    <!--router-view装载路由页面-->
    <router-view></router-view>
    
  </div>
</template>

<script>
import Tabs from './common/Tabs.vue'	
console.log(Tabs)
export default {
	components:{
		'tabs':Tabs
	}
}
</script>

<style>
#app {
	
}
</style>
