<template>
  <div class="Header">
    <div class="left">
      <i class='menu' :class="isshow?'showtab':''" @click="showtab"></i>
      <div class="tablist">
        <li v-show="isshow" v-for="(item,index) of navlist" :key="index" :class='{active:index===mark}' @click.stop="changeActive(index,item)">
          <p class="navname">{{item.name}}</p>
          <p class="englishname">{{item.Englishname}}</p>
          <!-- <div class="childern" v-for="(itm,idx) of item.children" :key="idx" @click="getmore(idx,itm.path)">{{itm.name}}</div> -->
        </li>
      </div>
    </div>
    <div class="center"></div>
    <div class="right">
      <i class="search" :class="showsearch?'showsearch':''" @click="search"></i>
      <span class="user" :class="showuser?'showuser':''" @click="user"></span>
    </div>
  </div>
</template>
<script>
export default {
  name:'Header',
  data(){
    return {
      navlist:[],
      mark:0,
      activeindex:0,
      isshow:false,
      showuser:false,
      showsearch:false
    }
  },
  computed:{
    tab () {
      return this.$store.state.tab.active
    }
  },
  watch:{
  $route(to,from){
    const whitelist = ['/longvideo/index','/audio/typeone','/shortvideo/index']
    console.log(to.path);
    whitelist.map(item => {
        if(to.path.includes(item)){
            this.isshow = false
    }
    })

  }
},
  created () {
    // console.log(this.$router.options)
    this.mark = sessionStorage.getItem('currenttab')*1
    this.navlist = this.$router.options.routes.slice(10)

  },
  methods : {
    search(){
      this.showsearch = true
      this.showuser = false
      this.isshow = false
      this.$router.push('/search')
    },
    user(){
      this.showsearch = false
      this.isshow = false
      this.showuser = true
      this.$router.push('/user')
    },
    showtab(){
      this.showsearch = false
      this.showuser = false
      this.isshow = !this.isshow
      switch (this.mark) {
        case 0:
          this.$router.push({name:'短视频'})
          break;
        case 1:
          this.$router.push({name:'音频'})         
          break;
        case 2:
          this.$router.push({name:'纪录片'})         
          break;      
        default:
          this.$router.push({name:'短视频'})
          break;
      }
    },
    changeActive(index,item){
      sessionStorage.setItem('currenttab',index)
      this.mark = index
      // console.log(item)
      this.$router.push({name:item.name})
    },
  }
}
</script>
<style lang="scss">
  .Header {
    box-sizing: border-box;
    // position: fixed;
    height: 10vw;
    // background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 4vw;
    padding: 0 20px;
    .left {
      flex: 1;
      i {
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url('../../assets/images/menu.png');
        background-size: 100% 100%;
      }
      .showtab {
        background-image: url('../../assets/images/menu1.png');
        background-size: 100% 100%;
      }
      .tablist {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        z-index: 2;
        position: absolute;
        top: 10vw;
        left: 0;
        background-color: white;
        width: 100vw;
        transition-timing-function: ease-in-out;
        padding: 0 5vw;
        // border-bottom: 1px solid #ccc;
        li {
          position: relative;
          width: 20vw;
          margin: 0 auto;
          color: black;
          // height: 7vw;
          // height: 10vw;
          // line-height: 10vw;
          font-size: 4vw;
          // border-bottom: 1px solid #ccc;
          &:nth-child(1)::after {
          }
          .navname {
            text-align: center;
            // line-height: 10vw;
            font-size: 4vw;
            font-family: 'Arial';
          }
          .englishname {
            font-size: 12px;
            text-align: center;
          }
          .childern {
            padding-left: 5vw;
            display: none;
          }
        }
        li.active {
          .navname {
            color: #ec5f3a;
            height: 7vw;
          }
          .englishname {
            color: #ec5f3a;
            height: 7vw;
            text-align: center;
          }
        }
        li.active > .navname::after {
          content: '';
          background-color: #ec5f3a;
          display: inline-block;
          width: 100%;
          height: 2px;
          position: relative;
          top: -3vw;
        }
      }
    }
    .center {
      flex: 6;
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 2;
      .search {
        margin: 0;
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url('../../assets/images/search.png');
        background-size: 100% 100%;
      }
      .user {
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url('../../assets/images/user.png');
        background-size: 100% 100%;
      }
      i.search.showsearch {
        margin: 0;
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url('../../assets/images/search1.png');
        background-size: 100% 100%;
      }
      .user.showuser {
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url('../../assets/images/user1.png');
        background-size: 100% 100%;
      }
    }
    // li.active{
    //   color: red;
    // }
  }
  @media screen and (min-width: 768px) {
    .Header{
      border-bottom: 2px solid #ccc;
      height: 5vw;
      .left{
        .menu{
          width: 2vw;
          height: 2vw;
        }
        .tablist{
          width: 54vw;
          left: 23vw;
          li{
            width:15vw ;
            .navname{
              height: 4vw;
              font-size: 2.5vw;
            }
            .englishname{
              font-size: 1vw;
            }
            &.active{
              width:8vw ;
              .navname{
                height: 4vw;
                font-size: 2.5vw;
              }
            }
          }
          .active{
          }
        }
      }
      .rigth{
        .user{
          width: 2vw;
          height: 2vw;
        }
        .user.showuser{
          width: 2vw;
          height: 2vw;            
        }
        .search{
          width: 2vw;
          height: 2vw;          
        }
        i.search.showsearch{
          width: 2vw;
          height: 2vw;
        }
      }
    }
  }
</style>
<style lang='scss' src='@/css/index.scss'></style>
