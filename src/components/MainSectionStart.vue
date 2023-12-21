<script>
import Button from './Button.vue';

export default {
  name: 'MainSectionStart',
  components: {
    Button,
  },
  data() {
    return {
      buttonText: 'Get started now',
    };
  },
};

</script>

<template>
  <section class="section-start" id="shop">
    <div class="container">
      <h5 class="start-subtitle">Start today for getting <span class="highlight">Online Certification</span></h5>
      <h4 class="start-title">You can be your own guiding star with our help!</h4>
      <Button :class="'btntwo xlarge'" :text="buttonText" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/mixins.scss' as *;

.section-start {
  padding-top: 90px;
  padding-bottom: 100px;
  .container {
    @include container;
    .start-subtitle {
      font-size: 1.2rem;
    }
    .start-title {
      font-size: 1.8rem;
      padding-bottom: 26px;
    }
  }
}
</style>