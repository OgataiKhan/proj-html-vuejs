<script>

export default {
  name: 'MainSectionTestimonialsQuote',
  props: {
    author: String,
    text: String,
    title: String,
    img: String,
    conditionalClass: Object,
  },
};

</script>

<template>
  <div class="quote-box" :class="conditionalClass">
    <div class="quote-image-box">
      <div class="quote-image">
        <img :src="`../../src/assets/img/testimonial-quotes/${img}`" :alt="author">
      </div>
    </div>
    <div class="quote-text">
      <h2 class="quote">{{ text }}</h2>
      <p class="quote-author">{{ author }}</p>
      <p class="author-title">/{{ title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.quote-box {
  padding: 0 100px 0;
  display: flex;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: opacity 0.4s;
  &.visible {
    opacity: 1;
  }

  .quote-image-box {
    width: 400px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 60px;
    background-image: url(../../src/assets/img/maxcoach-shape-05-150x150.png);
    background-repeat: no-repeat;
    background-position: left calc(50% + 40px) top 130px;
    background-size: 125px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 80px;
      background-color: #D2A98E;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 80px);
      top: 0;
      z-index: -1;
    }

    .quote-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .quote-text {
    text-align: left;
    padding-top: 15px;

    .quote {
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 1.5;
      padding-bottom: 35px;
    }

    .quote-author {
      padding-bottom: 10px;
    }
  }
}</style>