# vue-home

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


项目介绍

加班 休假 ———— 基于我们这些上班族来写出来的项目  通过登录获取用户的名字在，再通过用户的操作获取信息，通过用户点击（加班/休假）进入详情页面，还有一些比较吸引用户眼光的动画效果，使用户有更好的体验


使用的技术

vue + vue-router(介于vue的路由) + vuex + ES6 + sass/scss() + flex(弹性盒) + element-ui (DatePicker/TimePicker(日期/时间)) + transition(动画) + icon(小图标库) + 正则验证 + （better-scroll）


项目运行

npm start / yarn start （没有yarn自己也可以npm i yarn -g 全局下载一个）
npm i
npm run build


目录结构

vue-dome
    src
        api
            index.js          //全部的接口(获取到后台数据)

        component
            header
                index.vue     //设置的全局的头部
            popUp.vue         //封装的遮罩动画效果

        plugins
            elui.js           //获取到封装的头部设置成 el-header（标签）
            
        router
            index.js          //封装成的路由表
            
        static                //静态资源
            font              // icon图标（运用在头部等其他的小图标）
            images            // 图片（图片的后缀：bmp,dib,emf,gif,jpg,jif,pcx,dcx,pic,png,tga）
            scss              // css样式

        store                 //用户信息
            modules
                user.js
            index.js

        utils
            computedTime.js   //封装好的加班休假
            request.js        //登录时触发的事件

        views
            commit
                index.vue    //加班/休假页面

            detail
                index.vue    //详情页面

            home
                components
                    tableMenu.vue  //(待处理,已发起,已处理)的切换
                    tableType.vue  //(加班/休假)的切换
                    todolist.vue   //调用todotime
                    todotime.vue   //(@click="$router.push)点击的时候跳转到详情（时间表（element-ui））
                                   //封装好的详情列表
                index.vue    //首页

            login
                index.vue    //登录页面

            order 
                index.vue    //排序页面              

        