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
    <p class="copyright">&copy; 2020 Maxcoach. All Rights Reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

footer {
  background-color: $bg-secondary;
  padding-top: 65px;
  padding-bottom: 55px;
  .container {
    @include container;
    display: flex;
  }
  .copyright {
    text-align: center;
    color: $font-secondary;
    font-size: 0.8rem;
    font-weight: 500;
  }
}

</style>