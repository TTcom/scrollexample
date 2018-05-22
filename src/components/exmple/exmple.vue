<template>
	<div class="exmple" >
		 <router-link tag="div" class="tab-item"  to="/Xscroll">
		 	<span class="tab-link">横向滚动</span>
		 </router-link>
		
	</div>
	
	
</template>

<script>
	export default{
		
	}
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.exmple
  text-align:center
  height:100px
  line-height:100px	
  .tab-item
    flex: 1
    text-align: center
  &.router-link-active
    .tab-link
      color: $color-theme
  
</style>