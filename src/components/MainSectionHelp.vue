<script>
import { store } from '../store';
import MainSectionHelpItem from './MainSectionHelpItem.vue';

export default {
  name: 'MainSectionHelp',
  components: {
    MainSectionHelpItem,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <section class="section-help">
    <div class="container">
      <p class="section-subtitle">Wanna transform your life?</p>
      <h3 class="section-title">Glad to <span class="highlight">Help You</span> Learn</h3>
      <ul class="help-list">
        <MainSectionHelpItem v-for="subject in store.subjects" :title="subject.title" :description="subject.description" :faIcon="subject.faIcon" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-help {
  background-color: orange;
  background-image: url(../../src/assets/img/home-6-services-image-1024x411.png), linear-gradient(to top, $bg-primary 28px, $bg-secondary 28px, $bg-primary 100%);
  background-repeat: no-repeat;
  background-position: center bottom 0;
  padding-top: 100px;
  min-height: 1088px;
  .container {
    @include container;
    .section-subtitle {
      padding-bottom: 20px;
    }
    .section-title {
      padding-bottom: 85px;
    }
    .help-list {
      display: flex;
      gap: $help-items-gap;
    }
  }
}
</style>