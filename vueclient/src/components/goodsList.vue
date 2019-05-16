<!--  -->
<template>
  <div>
      goodslist
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    };
  },
  components: {},
  mounted:function(){
      this.getGoods()
  },

  methods: {
      getGoods(){
          this.$reqs.get('/goods').then(Response=>{
              console.log(Response)
          })
      }
  }
}

</script>