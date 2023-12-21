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
      logos: [
        'client-logo-colored-01.png',
        'client-logo-colored-02.png',
        'client-logo-colored-03.png',
        'client-logo-colored-04.png',
        'client-logo-colored-05.png',
        'client-logo-colored-06.png',
      ],
    };
  },
};

</script>

<template>
  <section class="section-testimonials" id="features">
    <div class="container">
      <h3 class="section-title">Why people talk about <span class="highlight">MaxCoach</span>?</h3>
      <MainSectionTestimonialsQuote />
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