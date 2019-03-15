<template>
      <div class="container">
            <div class="banner">
                  <swiper :images="banner"></swiper>
                  12311444444444447777777777777777733
            </div>
      </div>
</template>
<script>
      import api from "./../../utils/api.js";
      import swiper from "./../../components/swiper";
      export default {
            components: { swiper },
            data () {
                  return {
                        logs: [],
                        topicList: [],
                        goodsList: [],
                        banner:[],
                        page: 1,
                        size: 10,
                        count: 0,
                        scrollTop:0,
                        showPage: false,
                        nomore: false,
                        isShow: false,
                        scrolltop: 0,
                        totalPages: 1,
                        loadmoreText: '正在加载更多数据',
                        nomoreText: '全部加载完成',
                        topic_tag_id: 0,
                  }
            },

            methods: {
                  getBannerData(){
                        var that = this;
                        this.$http.post(api.IndexUrlBanner).then((d)=>{
                              //输出请求数据
                              that.banner = d.data.data.banner
                              console.log(that.banner)
                              
                              
                        }).catch(err=>{
                              console.log(err.status,err.message)
                  });
                       
                  },
            },
            mounted(){
                 
            },
            onLoad() {
                  this.getBannerData();
                  console.log(this.banner)
            },
}
</script>
<style>
      
</style>