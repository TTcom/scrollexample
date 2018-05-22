<template>
  <div class="recommend">
  	<div class="back" @click="back">
  		返回
  	</div>
  	<div class="title">
  		横向滚动
  	</div>
  	<scroll>
  		<div><img  src="./1-2.png" /></div>
  		<div><img  src="./2-2.png" /></div>
  		<div><img  src="./1-2.png" /></div>
  		<div><img  src="./4-1.png" /></div>
  	</scroll>
  </div>
</template>

<script>
	import Scroll from 'base/xscroll/xscroll'

	export default{

		methods:{
			back(){
				this.$router.back()
			}
		},
		components:{
		
			Scroll
		
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
  padding: 0 10px;width: 120px;
.back
  text-align:left
  padding:0 0 0 10px
</style>