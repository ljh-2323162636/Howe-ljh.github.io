---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: web前端-刘俊豪
titleTemplate:
editLink: true
lastUpdated: true

hero:
    name: 刘俊豪
    text: Web前端开发工程师
    tagline: /斜杠青年/人间清醒/工具控/终身学习者/
    image:
        src: /background.png
        alt: 背景图
    actions:
    - theme: brand
      text: 🚀 快速开始
      link: /column/Algorithm/
    - theme: alt
      text: 📖 查看文章
      link: /column/Algorithm/
    - theme: alt
      text: 🌟 关于我
      link: /column/Algorithm/

features:
  - icon: 🎯
    title: 精通前端技术栈
    details: 熟练掌握Vue、React、TypeScript等现代前端技术，专注于构建高性能、用户体验优秀的Web应用。
    link: /column/Algorithm/
    linkText: 了解更多 →
  - icon: 💡
    title: 热爱分享
    details: 坚持技术写作，分享开发经验和学习心得，帮助更多开发者成长。已撰写50+篇技术文章。
    link: /column/Algorithm/
    linkText: 查看文章 →
  - icon: 🎨
    title: 追求美学
    details: 热爱一切美学，擅长使用各种设计工具创造精美的用户界面，注重细节和用户体验。
  - icon: 📚
    title: 持续学习
    details: 保持对新技术的敏感度，持续学习和探索，紧跟前端技术发展趋势，不断提升自己。
  - icon: 🎵
    title: 音乐爱好者
    details: 重度音乐患者，相信音乐能给编程带来灵感。在工作之余，我喜欢听各种类型的音乐。
  - icon: ☕
    title: 咖啡驱动
    details: 依靠咖啡因驱动开发，每一杯咖啡都是灵感的源泉。让我们一起用代码改变世界！
---

<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />
