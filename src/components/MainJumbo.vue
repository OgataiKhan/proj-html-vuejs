<script>
import Button from './Button.vue';
import MainJumboPlayer from './MainJumboPlayer.vue';

export default {
  name: 'MainJumbo',
  components: {
    Button,
    MainJumboPlayer,
  },
  data() {
    return {
      buttonText: 'Get started for free',
    };
  },
};

</script>

<template>
  <div class="jumbo">
    <div class="container">
      <h1>Learn at your own pace!</h1>
      <p class="subtitle">Get teamed up with people of the same will.</p>
      <Button :class="'btnone'" :text="buttonText" />
      <MainJumboPlayer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.jumbo {
  background-color: $header-primary;
  background-image: url(../assets/img/home-6-hero-left-person.png), url(../assets/img/home-6-hero-right-person.png), linear-gradient(to top, $bg-primary 110px, $header-primary 110px);
  background-position: left calc(50% - 530px) bottom, right calc(50% - 505px) bottom -165px, 0 0;
  background-repeat: no-repeat;
  color: $header-font;
  padding-bottom: 21px;
  .container {
    @include container;
    h1 {
      text-transform: capitalize;
      font-size: 2.9rem;
      padding: 88px 0 12px;
    }
    .subtitle {
      font-size: 1.2rem;
      padding-bottom: 24px;
    }
    
  }
}
</style>