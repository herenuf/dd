<template>
	<nav class="tabs"> 
		<route-link class="tab" v-for="(tabItem,index) in tabsData" :key='index' :to="tabItem.path">
			{{tabItem.title}}
		</route-link>
	</nav>
</template>

<script>
	exports default{
		name:'tabs',
		data(){
			return {
				tabsData:[
					{title:'首页',path:'/home'},
					{title:'发现',path:'/discover'},
					{title:'订单',path:'/order'},
					{title:'我的',path:'/mine'},
				]
			}
		}
	}
</script>

<style>
</style>