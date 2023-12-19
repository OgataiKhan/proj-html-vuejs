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
  </footer>
</template>

<style lang="scss" scoped>

</style>