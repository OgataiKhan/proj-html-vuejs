<script>
import MainSectionTestimonialsQuote from './MainSectionTestimonialsQuote.vue';

export default {
  name: 'MainSectionTestimonials',
  components: {
    MainSectionTestimonialsQuote,
  },
};

</script>

<template>
  <section class="section-testimonials">
    <div class="container">
      <h3 class="section-title">Why people talk about <span class="highlight">MaxCoach</span>?</h3>
      <MainSectionTestimonialsQuote />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-testimonials {
  text-align: center;
  padding-top: 83px;
  .container {
    @include container;
    .section-title {
      padding-bottom: 90px;
    }
  }
}

</style>