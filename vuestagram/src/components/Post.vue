<template>
   <div class="post" v-for="(a,i) in instadata" :key='i'>
    <div class="post-header">
      <div class="profile" :class="a.filter" :style="{'background-image':'url('+a.userImage+')'}"></div>
      <span class="profile-name">{{a.name}}</span>
    </div>
    <div class="post-body" :style="{'background-image':'url('+a.postImage+')'}" :class="a.filter"></div>
    <div class="post-content">
      <p>{{a.likes}} likes</p>
      <p><strong>{{a.name}}</strong> {{a.content}}</p>
      <p class="date">{{a.date}}</p>
    </div>
   </div> 
</template>

<script>

export default {
  name: 'Post',
  components: {

  },
  props:{
      instadata : Array
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>
