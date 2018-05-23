<template>
  <div class="recommend">
  	<div class="back" @click="back">
  		返回
  	</div>
  	<div class="title">
  		轮播图
  	</div>
  	<div class="slider-wrapper">
  	   <div class="slider-content">
  	
		  	<slider>
		  		<div><img  src="./1-2.png" /></div>
		  		<div><img  src="./2-2.png" /></div>
		  		<div><img  src="./1-2.png" /></div>
		  		<div><img  src="./4-1.png" /></div>
		  	</slider>
	    </div>
	</div>
  </div>
	
</template>

<script>
	import Slider from 'base/slider/slider'

	export default{

		methods:{
			back(){
				this.$router.back()
			}
		},
		components:{
		
			Slider
		
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
.back
  text-align:left
  padding:0 0 0 10px
.slider-wrapper
  position: relative
  width: 100%
  overflow: hidden
  height:0
  padding-top:40%
.slider-content
  position: absolute
  top:0
  left:0
  width:100%
  height:100%
  
</style>