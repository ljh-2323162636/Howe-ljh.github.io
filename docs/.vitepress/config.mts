import { defineConfig  } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Howe",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: '前端开发', link: '/markdown-examples' },
      {
        text: '前端开发',
        items: [
          {
            text: '数据结构与算法',
            link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
          },
          {
            text: 'Vue3源码',
            link: '/column/Algorithm/vue3.md' // 对应docs/column/Algorithm下的idnex.md文件
          },
          {
            text: 'Element-ui遇到的问题',
            link: '/column/Algorithm/element-ui.md' // 对应docs/column/Algorithm下的idnex.md文件
          },
          {
            text: '读书日记-平凡的世界',
            link: '/column/Algorithm/pfdsj.md' // 对应docs/column/Algorithm下的idnex.md文件
          }
        ]
      }
    ],

    sidebar: [
    //   // 第一部分
    //  {
    //    text: '栈和队列',
    //    items: [
    //      {
    //        text: '栈-深拷贝和浅拷贝',
    //        link: '/column/Algorithm/001_Stack'
    //      },
    //      {
    //        text: '队列-事件循环',
    //        link: '/column/Algorithm/002_Queue'
    //      }
    //    ]
    //  },
    //  // 第二部分
    //  {
    //    text: '字典和树',
    //    items: [
    //      {
    //        text: '字典和集合-Set和Map',
    //        link: '/column/Algorithm/003_Dictionary'
    //      },
    //      {
    //        text: '树-深/广度优先遍历',
    //        link: '/column/Algorithm/004_Tree'
    //      }
    //    ]
    //  }
   ],
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [2, 6],
      label: '目录'
    },
    logo:'./logo.svg',
    footer:{
      copyright:'Copyright@ 2024 Howe'
    }
  },
  base:'/Howe-ljh.github.io'
})

