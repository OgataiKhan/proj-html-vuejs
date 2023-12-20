<script>
import Button from './Button.vue';
import MainJumboPlayer from './MainJumboPlayer.vue';

export default {
  name: 'MainJumbo',
  components: {
    Button,
    MainJumboPlayer,
  },
};

</script>

<template>
  <div class="jumbo">
    <div class="container">
      <h1>Learn at your own pace!</h1>
      <p class="subtitle">Get teamed up with people of the same will.</p>
      <Button :class="'btnone'" />
      <MainJumboPlayer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.jumbo {
  background-color: $header-primary;
  background: linear-gradient(to top, $bg-primary 110px, $header-primary 110px);
  color: $header-font;
  text-align: center;

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