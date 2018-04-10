<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showYzm()"> 按钮 </button>

    <div v-for="item in arrNews" :key="item.id">
        <h3 class="newsTitle"><i>{{item.id+1}}</i>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <span class="tag">{{item.tag}}</span>
        <!-- <img alt="newsimg" :src="item.images[0]"> -->
    </div>

  </div>
</template>

<script>
var thisisjsonp = require("jsonp");

export default {
  name: "MarkData",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arrNews: [],
      yzmUrl: ""
    };
  },
  created() {
    // alert("aaa");
    this.fn2();
  },
  methods: {
    fn1() {
      console.log("abc");
    },
    fn2() {
      //   alert("按钮被按下");
      var _thit = this;
      this.$axios
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
      let that = this;
      //axios GET请求
      that.$axios
        .get("api/mock/5ab9ec2b7f0aed1e45c3e83f/API/mock_data1", {
          params: {
            id: "0",
            name: "lixuefeng"
          }
        })
        .then(response => {
          console.log("获取成功!");
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
