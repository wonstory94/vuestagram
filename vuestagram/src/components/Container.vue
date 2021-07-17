<template>
    <div>
        <div id="list" v-if="step==0">
            <Post :instadata='instadata'></Post>
        </div>
        
        <!-- 필터선택페이지 -->
        <div id="filter" v-if="step==1">
            <!-- <div class="upload-image" :style="`background:url(${uploadimage})`></div>-->
            <div class="upload-image" :style="{'backgroundImage':'url('+uploadimage+')'}" ></div>
            <div class="filters">
                <FilterBox :uploadimage="uploadimage" v-for="(a,i) in 인스타필터들" :key='i' :filterclass="a">
                    <!-- 컴포넌트 사이에 있는 데이터는 하위컴포넌트의 slot으로 들어감 -->
                    <template v-slot:a> <p>data1</p></template>
                    <template v-slot:b>data2</template>
                </FilterBox>
            </div>
        </div>
        
        <!-- 글작성페이지 -->
        <div id="write" v-if="step==2">
            <div class="upload-image"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
            </div>  
        </div>
        
        
    </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
  name: 'Container',
  data(){
      return{
          인스타필터들:[ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      }
  },
  components: {
    Post,FilterBox
  },
  props:{
      instadata : Array,
      step : Number,
      uploadimage : String
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
background-position: center;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
