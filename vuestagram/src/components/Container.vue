<template>
    <div>
        <Post :instadata='instadata'></Post>
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
  name: 'Container',
  components: {
    Post
  },
  props:{
      instadata : Array
  }
}
</script>

<style>

</style>
