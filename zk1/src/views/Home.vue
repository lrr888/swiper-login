<template>
<!-- 首页 -->
  <div class="home">
    <Swiper/>
    <dl v-for="(item,index) in datalist" :key="index">
      <dt>
        <img :src="item.img"/>
      </dt>
        <dd>
          {{item.name}}
        </dd>
    </dl>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
export default {
  data() {
    return {
      datalist:[]
    }
  },
  created() {
    this.getaxios()
  },
  methods: {
    getaxios(){
     this.$http.get('/api/app').then(res=>{
      //  console.log(res.data.list.list)
       this.datalist=res.data.list.list
     })
    }
  },
  components: {
    Swiper
  }
}
</script>
