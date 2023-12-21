<script>
import MainSectionBlogArticle from './MainSectionBlogArticle.vue';

export default {
  name: 'MainSectionBlog',
  components: {
    MainSectionBlogArticle,
  },
  data() {
  return {
      articles: [
        {
          title: 'Brush strokes energize trees in paintings',
          img: 'artist-blog-01-480x325.jpg',
          artist: 'Artist',
          date: 'May 15, 2020',
          views: '688',
        },
        {
          title: 'Pocket-sized notebooks hold miniature paintings',
          img: 'artist-blog-02-480x325.jpg',
          artist: 'Artist',
          date: 'May 15, 2020',
          views: '603',
        },
        {
          title: 'Connection between self-portraits and identity',
          img: 'artist-blog-03-480x325.jpg',
          artist: 'Artist',
          date: 'May 15, 2020',
          views: '397',
        },
      ],
    };
  },
};

</script>

<template>
  <section class="section-blog" id="blog">
    <div class="container">
      <p class="section-subtitle">Enjoy reading on MaxCoach</p>
      <h3 class="section-title">Latest on <span class="highlight">our blogs</span></h3>
      <ul class="articles">
        <MainSectionBlogArticle v-for="article in articles" :title="article.title" :img="article.img" :artist="article.artist" :date="article.date" :views="article.views" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-blog {
  background-color: $bg-secondary;
  padding-top: 110px;
  padding-bottom: 100px;
  .container {
    @include container;
    .section-subtitle {
      padding-bottom: 20px;
    }
    .section-title {
      padding-bottom: 60px;
    }
    .articles {
      display: flex;
      gap: $articles-gap;
    }
  }
}
</style>