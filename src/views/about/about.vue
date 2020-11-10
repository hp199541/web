<template>
  <div class="about">
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer/footer.vue'
export default {
  name:'about',
  components:{
    Footer
  },
}
</script>
<style lang="scss">
.about{
  width: 90vw;
  margin: 0 auto;
  text-align: right;
  font-weight: bolder;
.footer{
      .item1{
        color:#ec5f3a ;
      }
      span{
        display: inline-block;
        margin-bottom: 5vw;
        border-bottom: 1px solid #ccc;
      }
}

}
@media screen and (min-width:768px) {
  .about{
      .footer{
        li{
          height: 5vw;
          line-height: 5vw;
          span{
            font-size: 1.6vw;
          }
        }
      }     
  }
}
</style>