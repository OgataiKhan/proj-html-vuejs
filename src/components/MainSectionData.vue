<script>
import MainSectionDataNumber from './MainSectionDataNumber.vue';

export default {
  name: 'MainSectionData',
  components: {
    MainSectionDataNumber,
  },
  data() {
    return {
      globalNumbers: [
        {
          number: '1.926',
          label: 'Finished sessions',
        },
        {
          number: '3.092+',
          label: 'Enrolled learners',
        },
        {
          number: '200',
          label: 'Online instructors',
        },
        {
          number: '100%',
          label: 'Satisfaction rate',
        },
      ],
    };
  },
};

</script>

<template>
  <section class="section-data">
    <div class="container">
      <h2>Let passion and determination be the guide along the way and develop at your own pace that's comfortable.</h2>
      <p class="quote-author">Fannie Moreno</p>
      <p class="author-title">/Founder & CEO</p>
      <ul class="global-numbers">
        <MainSectionDataNumber v-for="display in globalNumbers" :numberDisplay="display.number" :numberLabel="display.label" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-data {
  text-align: center;
  color: $font-primary;
  .container {
    @include container;
    h2 {
      padding: 207px 0 41px;
      max-width: 715px;
      margin: 0 auto;
      font-size: 2rem;
      line-height: 1.5;
    }
    .quote-author {
      text-transform: uppercase;
      font-weight: 700;
      padding-bottom: 10px;
    }
    .author-title {
      color: $font-secondary;
    }
    .global-numbers {
      display: flex;
      justify-content: space-around;
      padding: 150px 0;
    }
  }
}
</style>