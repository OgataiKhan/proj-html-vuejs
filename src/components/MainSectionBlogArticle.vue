<script>

export default {
  name: 'MainSectionBlogArticle',
  props: {
    title: String,
    img: String,
    artist: String,
    date: String,
    views: String,
  },
};

</script>

<template>
  <li class="article">
    <div class="article-img">
      <img :src="`../../src/assets/img/blog-thumbnails/${img}`" :alt="title">
    </div>
    <div class="article-details">
      <p class="author">{{ artist }}</p>
      <h5 class="article-title">{{ title }}</h5>
      <div class="article-stats">
        <p class="stats-date"><font-awesome-icon class="stats-icon" icon="fa-regular fa-calendar" />{{ date }}</p>
        <p><font-awesome-icon class="stats-icon" icon="fa-solid fa-eye" />{{ views }} Views</p>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.article {
  width: calc((100% - ($articles-gap * 2)) / 3);
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: $bg-secondary;
  &:hover {
    background-color: $bg-primary;
    cursor: pointer;
  }
  .article-img {
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 25px;
  }
  .article-details {
    text-align: left;
    .author {
      color: $font-secondary;
      text-transform: uppercase;
    }
    .article-title {
      font-size: 1.2rem;
      line-height: 1.6;
      padding-bottom: 13px;
      text-transform: capitalize;
    }
    .article-stats {
      display: flex;
      color: $font-secondary;
      font-size: 0.9rem;
      .stats-date {
        padding-right: 30px;
      }
      .stats-icon {
        padding-right: 10px;
      }
    }
  }
}

</style>