// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import './custom.css'
// @ts-ignore
import './memory.css'

export default {
  ...DefaultTheme,
// @ts-ignore
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */);
  }
};
