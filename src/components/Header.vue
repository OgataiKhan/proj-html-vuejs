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

header {
  background-color: $header-primary;
  color: $header-font;
  .container {
  @include container;
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
}
}

</style>