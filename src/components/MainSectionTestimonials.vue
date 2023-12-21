<script>
import MainSectionTestimonialsQuote from './MainSectionTestimonialsQuote.vue';
import MainSectionTestimonialsLogo from './MainSectionTestimonialsLogo.vue';

export default {
  name: 'MainSectionTestimonials',
  components: {
    MainSectionTestimonialsQuote,
    MainSectionTestimonialsLogo,
  },
  data() {
    return {
      quoteIndex: 0,
      autoplayVariable: null,
      logos: [
        'client-logo-colored-01.png',
        'client-logo-colored-02.png',
        'client-logo-colored-03.png',
        'client-logo-colored-04.png',
        'client-logo-colored-05.png',
        'client-logo-colored-06.png',
      ],
      quotes: [
        {
          author: 'Kevin O\'Connor',
          text: 'MaxCoach has transformed my learning experience. With personalized attention and expert guidance, I\'ve achieved more than I ever thought possible!',
          title: 'Entrepreneur',
          img: 'testimonial-avata-01.jpg',
        },
        {
          author: 'Mina Hollace',
          text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.',
          title: 'Freelancer',
          img: 'testimonial-avata-02.jpg',
        },
        {
          author: 'Daniel Taylor',
          text: 'A game-changer in education! The interactive lessons and personalized feedback have helped me excel in areas I previously struggled with. Highly recommended!',
          title: 'Marketing Manager',
          img: 'testimonial-avata-03.jpg',
        },
        {
          author: 'James Wilson',
          text: 'With expert tutors and a wide range of resources, MaxCoach is the perfect partner for anyone serious about their education. A truly exceptional learning experience!',
          title: 'Graphic Designer',
          img: 'testimonial-avata-04.jpg',
        },
      ],
    };
  },
  methods: {
    next() {
      this.quoteIndex++;
      if (this.quoteIndex > this.quotes.length - 1) {
        this.quoteIndex = 0;
      }
    },
    autoplay() {
      if (this.autoplayVariable) {
        clearInterval(this.autoplayVariable);
      }
      this.autoplayVariable = setInterval(this.next, 6000);
    },
  },
  mounted() {
    this.autoplay();
  },
};

</script>

<template>
  <section class="section-testimonials" id="features">
    <div class="container">
      <h3 class="section-title">Why people talk about <span class="highlight">MaxCoach</span>?</h3>
      <div class="carousel-box">
        <MainSectionTestimonialsQuote v-for="(quote, index) in quotes"
        :conditionalClass="{ 'visible': index === quoteIndex }" :author="quote.author" :text="quote.text"
        :title="quote.title" :img="quote.img" />
      </div>
      
      <ul class="testimonial-logo-list">
        <MainSectionTestimonialsLogo v-for="(logo, index) in logos" :logo="logo" :index="index" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/mixins.scss' as *;

.section-testimonials {
  text-align: center;
  padding-top: 83px;
  padding-bottom: 93px;

  .container {
    @include container;

    .section-title {
      padding-bottom: 90px;
    }
    .carousel-box {
      position: relative;
      height: 325px;
    }

    .testimonial-logo-list {
      padding-top: 60px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      row-gap: 10px;
    }
  }
}
</style>