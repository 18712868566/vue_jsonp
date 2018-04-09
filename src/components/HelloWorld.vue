<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showYzm()"> 按钮 </button>
    <p>{{this.userData}}</p>
    <div v-for="item in arrNews" :key="item.id">
        <h3 class="newsTitle"><i>{{item.id+1}}</i>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <span class="tag">{{item.tag}}</span>
        <!-- <img alt="newsimg" :src="item.images[0]"> -->
    </div>
  </div>
</template>

<script>
var jsonp = require("jsonp");

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arrNews: [],
      userData: {},
      yzmUrl: ""
    };
  },
  created() {
    // alert("aaa");
    // this.fn2();
  },
  methods: {
    fn1() {
      console.log("abc");
    },
    fn2() {
      //   alert("按钮被按下");
      var _thit = this;
      this.$http
        .get("https://www.easy-mock.com/mock/5ab9ec2b7f0aed1e45c3e83f/API/news")
        .then(function(response) {
          //   console.log(response);
          _thit.arrNews = response.data;
          //   console.log(_thit.arrNews);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showYzm() {
      var _thit = this;
      //   var _url = "https://www.easy-mock.com/mock/5ab9ec2b7f0aed1e45c3e83f/API/";
      // var _url = "http://hd.wows.kongzhong.com/lanfe";
      this.$http
        .get("/InsideWows/signact/signinfo", {
          params: {
            jsonpcallback: jQuery18308533249172893738_1523174026629,
            useraccount: 1525545409,
            login: ZGVubmlzMTM1QHNpbmEuY29t,
            zoneid: 6700100
          }
        })
        .then(function(response) {
          console.log(response);
          console.log();
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
