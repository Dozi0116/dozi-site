<template>
  <div class="page-welcome">
    <!-- 最新の記事取得して表示 -->
    <div v-if="!isFinishedRecentArticleFetch">
      <p>読込中...</p>
    </div>
    <div v-else class="top-wrapper">
      <div class="error" v-if="hasError">
        工事中だよ！
      </div>
      <div class="article-not-found" v-else-if="isArticleNotFound">
        まだなにもかいてないよ！
      </div>
      <BlogArticle
        :article="article"
        v-else
      />
    </div>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  computed: {
    isFinishedRecentArticleFetch() {
      return this.article
    },
    isArticleNotFound() {
      return !get(this.article, 'body', null)
    },
    hasError() {
      return this.error
    },
  },
  data() {
    return {
      ping: null,
      article: null,
      error: null,
    }
  },
  created() {
    this.axios.get('/ping-pub').then((res) => {
      this.article = res

    }).catch((error) => {
      this.article = {}
      this.error = error
    })
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/global-style";

.top-wrapper {
  margin: $spacing-large 0;
}
</style>
