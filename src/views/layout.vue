<template>
    <router-view :video ='video'></router-view>
</template>
<script>
export default {
  name:'layout',
  props:{
    video:Array
  },
  data () {
    return {
    }
  },
}
</script>