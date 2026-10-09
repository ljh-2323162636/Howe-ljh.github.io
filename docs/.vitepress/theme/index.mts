// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
// @ts-ignore
import './custom.css'
// @ts-ignore
import './memory.css'

export default {
  ...DefaultTheme,
  // 使用自定义 Layout：通过 doc-after 插槽在每篇文章底部注入不蒜子访问量
  Layout,
// @ts-ignore
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */);
  }
};
