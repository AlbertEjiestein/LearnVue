### vue介绍
+ vue是一个渐进式的框架：比如与jquery业面共存并逐渐取代
+ 全家桶：core+vue-router+vuex 满足更加复杂的业务逻辑

### 命令式编程 -> 声明式编程
+ 创建vue对象
+ 传入参数options:{}
    - el:要挂在的元素位置
    - data:可以是自己定义的，也可以是从服务器请求的
+ 响应式：js和UI完全分离，不需要用js操作dom元素

### 指令
+ v-for：用于遍历
+ v-on:click或者@click(@是v-on的语法糖，即简写)：用于监听某个元素的点击事件
+ methods：定义方法属性

### 1.vue中的MVVM
+ view:DOM元素
+ model:js
+ viewmodel:中间介

### 2.vue中的options
+ el:string|HTMLElement
+ data:Object|Function
+ methods:[[key:string]:function]

### 3.vue的生命周期
+ options中定义的方法会在vue的生命周期中被依次调用

### 4.Mustache的使用
+ 双大括号又叫Mustache语法，{{}}里面可以方变量，也可以放表达式
+ 比如{{counter1 + counter2}}、{{counter * 2}}

### 5.v-once(不常用)
+ 该指令不需要跟任何表达式
+ 该指令表示元素和组件只渲染一次，不会随着数据的改变而改变

### 6.v-html="url"
+ 解析html中的url元素

### 7.v-text、v-pre
+ v-text类似mustache，但有点鸡肋
+ v-pre作用是原封不动的将标签内的元素按照原格式展示出来

### 8.v-cloak
+ 遮挡住浏览器中可能显示的未编译的标签

### 9.v-bind
+ 上边的Mustache操作都是插入到内容之中，v-bind是绑定元素的属性，比如src，可以动态修改属性
+ v-bind:src="imgURL"  v-bind:属性="值"
+ 语法糖：:src="url"  :href="url"