<template>
	<div class="exmple" >
		 <router-link tag="div" class="tab-item"  to="/Xscroll">
		 	<span class="tab-link">横向滚动</span>
		 </router-link>
		 <router-link tag="div" class="tab-item"  to="/Yscroll">
		 	<span class="tab-link">纵向滚动</span>
		 </router-link>
		 <router-link tag="div" class="tab-item"  to="/banners">
		 	<span class="tab-link">轮播图</span>
		 </router-link>
		
	</div>
	
	
</template>

<script>
	export default{
		
	}
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.exmple
  text-align:center
  height:60px
  line-height:60px	
  .tab-item
    flex: 1
    text-align: center
    background-color:black
    color: $color-text
    border-bottom:1px solid white
  &.router-link-active
    .tab-link
      color: black
      background-color:white
      
  
</style>