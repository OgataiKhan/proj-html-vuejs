<script>
import { store } from '../store';
import MainSectionHelpItem from './MainSectionHelpItem.vue';
import DecorativeCircle from './DecorativeCircle.vue';

export default {
  name: 'MainSectionHelp',
  components: {
    MainSectionHelpItem,
    DecorativeCircle,
  },
  data() {
    return {
      store,
      circles: [
        {
          size: '52px',
          borderColor: '#BCE6DF',
          innerColor: 'transparent',
          top: '590px',
          left: 'calc(50% - 510px)',
        },
        {
          size: '35px',
          borderColor: '#FA7D61',
          innerColor: '#FA7D61',
          top: '980px',
          left: 'calc(50% - 750px)',
        },
        {
          size: '46px',
          borderColor: '#BCE6DF',
          innerColor: '#BCE6DF',
          top: '630px',
          left: 'calc(50% + 580px)',
        },
        {
          size: '38px',
          borderColor: '#E28794',
          innerColor: '#E28794',
          top: '1070px',
          left: 'calc(50% + 460px)',
        },
        {
          size: '54px',
          borderColor: '#EBB860',
          innerColor: '#EBB860',
          top: '1230px',
          left: 'calc(50% - 740px)',
        },
        {
          size: '36px',
          borderColor: '#AAB8F1',
          innerColor: '#AAB8F1',
          top: '1230px',
          left: 'calc(50% + 690px)',
        },
      ],
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
    <DecorativeCircle v-for="circle in circles" :size="circle.size" :borderColor="circle.borderColor" :innerColor="circle.innerColor"
      :top="circle.top" :left="circle.left" />
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
  position: relative;
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