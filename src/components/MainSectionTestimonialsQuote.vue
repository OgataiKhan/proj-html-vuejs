<script>

export default {
  name: 'MainSectionTestimonialsQuote',

};

</script>

<template>
  <div class="quote-box">
    <div class="quote-image-box">
      <div class="quote-image">
        <img src="../../src/assets/img/testimonial-quotes/testimonial-avata-02.jpg" alt="Mina Hollace">
      </div>
    </div>
    <div class="quote-text">
      <h2 class="quote">I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great
        study portal for people like me.</h2>
      <p class="quote-author">Mina Hollace</p>
      <p class="author-title">/Freelancer</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.quote-box {
  display: flex;
  padding: 0 100px 0;

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