# mockserver

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
安装Json-Server：
    npm install -g json-server

# json-server --watch mock/db.json --port 9090

json-server + mockjs + jquery 

    http: //blog.csdn.net/biubiubiuzzz/article/details/78066621
    https: //www.cnblogs.com/aaron-pan/archive/2017/07/25/7234190.html
    https: //www.jianshu.com/p/81373d90f9f0
```

>- 在webpack.config.js（config—>index.js）文件里设置代理
```
proxyTable: {
    '/api': {
        target: 'http://hd.wows.kongzhong.com', //设置调用接口域名和端口号别忘了加http
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
                // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示
                // '/api/lanfe'
        }
    }
}
```