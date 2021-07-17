<template>
  <div :class="filterclass" :style="{'backgroundImage':'url('+uploadimage+')'}" class="filter-item">
      <slot name="a"></slot> 
      <slot name="b"></slot> 
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
  }
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
