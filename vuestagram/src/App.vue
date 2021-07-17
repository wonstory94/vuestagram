<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :instadata="인스타데이터" :step="step"/>
  <button @click="more">더보기</button>
  
  <Footer></Footer>

<div v-if="step == 0">내용0</div>
<div v-if="step == 1">내용1</div>
<div v-if="step == 2">내용2</div>
<button @click="step=0">버튼0</button>
<button @click="step=1">버튼1</button>
<button @click="step=2" >버튼2</button>
<div style="margin-top:500px;"></div>

</template>

<script>
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'
import Data from './instadata.js'
import axios from 'axios'



export default {
  name: 'App',
  data(){
    return {
      인스타데이터 : Data,
      버튼누른횟수 : 0,
      step : 0
    }
  },
  methods: {
    more(){
        var url = 'https://codingapple1.github.io/vue/more'+this.버튼누른횟수+'.json';
        axios.get(url).then((결과)=>{
        this.인스타데이터.push(결과.data);
        this.버튼누른횟수++;
      }).catch((err)=>{
        alert(err);
      });

      // post 요청은 url로 두번째파라미터를 전송함
      // 요청 성공시 then, 실패시 catch
      // axios.post('URL',{name:'kim'}).then().catch();


      // get요청이 성공했을때, 코드를 실행하고 싶으면 then 사용 
      // axios.get('https://codingapple1.github.io/vue/more0.json').then((결과)=>{
        // 요청성공시 실행할 코드
        // 콜백함수할때 function 말고 에로우함수 ()=> 로 사용하는게 좋음
        // this함수를 잘 활용할 수 있음
        //  에로우 함수사용할때 파라미터가 하나면  (결과)=> 대신 결과=>로 사용할 수 잇음
        // console.log(결과.data)
        // this.인스타데이터.push(결과.data)
      // });
    },
  },
  components: {
    Footer,
    Container
  }
}
</script>

<style>
@import 'style.css';

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
