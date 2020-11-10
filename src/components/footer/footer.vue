<template>
  <div class="footer">
      <li v-for="(item,index) of footerlist" :key="index" :class="'item'+index" @click="linkways(index)">
        <span>{{item.name}}</span>
      </li>
  </div>
</template>
<script>
export default {
  name:'footers',
  data () {
    return {
      footerlist:[
        {name:'联系我们 connect us'},
        {name:'关于 about'}
      ]
    }
  },
  methods:{
    linkways(index){
      if(index == 0 ) {
        this.$router.push('/link')
      }
      if(index == 1 ) {
        this.$router.push('/about')
      }
    }
  }
}
</script>