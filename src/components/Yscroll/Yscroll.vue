<template>
  <div class="recommend">
  	<div class="back" @click="back">
  		返回
  	</div>
  	<div class="title">
  		纵向滚动
  	</div>
  	<div class="remain">
  	<yscroll class="content">
  		<div>
  		<div><img  src="./1-2.png" /></div>
  		<div><img  src="./2-2.png" /></div>
  		<div><img  src="./1-2.png" /></div>
  		<div><img  src="./4-1.png" /></div>
  		</div>
  	</yscroll>
  	</div>
  </div>
</template>

<script>
	import Yscroll from 'base/yscroll/yscroll'

	export default{

		methods:{
			back(){
				this.$router.back()
			}
		},
		components:{
		
			Yscroll
		
		}
	}
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.title
  text-align:center
  font-size:15px
  padding:10px 0
  width:100%
  height:70px
  line-height:70px
.recommend
  position: fixed
  top:10px
  bottom: 0
  height: 100%
  overflow: hidden
  width: 100%	
  z-index:111
img
  width: 120px;
.back
  text-align:left
  padding:0 0 0 10px
.remain
  height:200px
  overflow:hidden
  width:100%
  display:flex
  flex-direction:row
  justify-content:space-around  
.content
  height:100%
  overflow: hidden
</style>