<template>
  <div :class="filterclass" :style="{'backgroundImage':'url('+uploadimage+')'}" class="filter-item" @click="fire(filterclass)">
      <slot></slot> 
  </div> 
  
</template>

<script>

export default {
  name: 'filterbox',
  components: {

  },
  props:{
      uploadimage : String,
      filterclass : String
  },
  methods: {
      fire(e){
         
        //   this.emitter.emit('이벤트명 작명','데이터')
        //this.emitter.emit('이벤트명 작명','데이터');
        // 수신하고 싶은 컴포넌트는 컴포넌트에가서
        // this.emitter.on(); 으로 수신

        this.emitter.emit('filter_choose',e);
      }
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>
