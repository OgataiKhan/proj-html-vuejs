<script>
import FooterAddress from './FooterAddress.vue';
import FooterLinks from './FooterLinks.vue';


export default {
  name: 'Footer',
  components: {
    FooterAddress,
    FooterLinks,
  },
};

</script>

<template>
  <footer>
    <div class="container">
      <FooterAddress />
      <FooterLinks />
    </div>
    <!-- Copyright -->
    <p class="copyright">&copy; 2020 Maxcoach. All Rights Reserved</p>
    <!-- Home button -->
    <button class="go-up">
      <a href="#home">
        &uarr;
      </a>
    </button>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

footer {
  background-color: $bg-secondary;
  padding-top: 65px;
  padding-bottom: 55px;
  position: relative;
  .container {
    @include container;
    display: flex;
  }
  .copyright {
    text-align: center;
    color: $font-secondary;
    font-size: 0.8rem;
    font-weight: 500;
    padding-top: 75px;
  }
  .go-up {
    background-color: $details-primary;
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    color: $header-font;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
}

</style>