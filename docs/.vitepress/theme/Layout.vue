<script setup>
import DefaultTheme from 'vitepress/theme'
import PageViews from './PageViews.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- doc-after 插槽：内容渲染在每篇文档正文之后（仅文档页生效，首页不显示） -->
    <template #doc-after>
      <PageViews />
    </template>
  </Layout>
</template>
