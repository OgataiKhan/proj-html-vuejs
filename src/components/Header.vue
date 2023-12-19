<script>
import HeaderLogo from './HeaderLogo.vue';
import HeaderNavbar from './HeaderNavbar.vue';

export default {
  name: 'Header',
  components: {
    HeaderLogo,
    HeaderNavbar,
  },
};

</script>

<template>
  <header>
    <div class="container">
      <HeaderLogo />
      <HeaderNavbar />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.container {
  @include container;
}

</style>