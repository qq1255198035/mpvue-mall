<template>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.image_url" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper> 
</template>

<script>
      
      export default {
            props: {
                  images: {
                        type: Array
                  }
            },
            data() {
                  return {
                    indicatorDots: true,
                    autoplay: true,
                    interval: 3000,
                    duration: 500,    
                  };
            },
           
      };
      
</script>

<style scoped>
      .swiper {
            height: 376rpx !important;
      }
      image {
            height: 100%;
            width: 100%;
      }
</style>
