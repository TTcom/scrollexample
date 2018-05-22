<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
  
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll'

  export default {
     mounted() {
      setTimeout(() => {
        this._setSliderWidth()

        this._initSlider()
      }, 20)

      window.addEventListener('resize', () => {    //监听视图窗口大小发生改变时
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
      
    },
    methods: {
      _setSliderWidth(isresize) {     //初始化宽度
        this.children = this.$refs.sliderGroup.children
        let width = 0
      let sliderWidth = this.$refs.sliderGroup.children[0].clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {     //项目初始化
         this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,     //横向滚动
          scrollY: false,
          momentum: false    //惯性
          })

      },
    },
    
  }
</script>

<style>
  .slider{
    min-height: 1px;
    }
    .slider-group{
      position: relative;
      overflow: hidden;
      display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: nowrap;
      }
      
</style>