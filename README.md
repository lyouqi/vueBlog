---
title: 任亚楠博客首页
description: 任亚楠个人网站首页
lang: en-US
head: [link, { rel: icon, href: /renblog_favicon.ico }]
meta: 
    - name: 博客
      content: 内容部分
---

### 2018-04，使用vuepress搭建博客

![首页题图](http://renblog.renyanan.com/blog/index/%E7%BE%8E%E5%A5%B3.jpg)

先放上一张图，表明自己的喜好！

入职了新公司，由于之前自己的知识储备感觉还是存在一些相应的问题，所以就想着能够在工作中让自己的能力以及项目得到充实，自然，每天工作肯定会很忙，但是也要抽出一定的时间进行相应的知识储备，这样才能够让自己不断提升，总结相应的问题，举一反三，在后续工作中能够更高效的解决问题，当然既然是个人博客，自然会有一些个人生活以及一些想法的产出，忽略即可！希望自己的内容以及东西可以对大家有所帮助！立此贴表明建立时间。

### 对于博客的源码

当然，由于自己对于vue的项目以及markdown的使用比较热衷，然后尤大大又最新推出了基于vue以及markdown的博客系统，名字是vuepress，这里自然而然就拿来使用了，真的特别好用，然后我把自己的源码也放到github上提供大家使用，希望能够对大家有所帮助！看反馈，如果有需要的话会给出对应的教程！

### 克隆下代码后的流程

npm install -g vuepress

npm install

npm run dev

npm run build

这套流程相信大家肯定会很熟悉，这就是一套完整的构建体系，当然想要更改默认的vue主题可以在.vuepress/theme/下进行对应的修改即可

### 配置文件

.vuepress/config.js 是博客的配置目录，进去之后就能够按照自己的所需来搭配不同的页面

### 服务器环境

服务器采用express搭建，PM2持续集成，但是总有一点小问题调整，我的webpack使用真的有问题，得多看看文档了。