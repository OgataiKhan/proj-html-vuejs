<script>
import HeaderNavbarMenu from './HeaderNavbarMenu.vue';
import HeaderNavbarIcons from './HeaderNavbarIcons.vue';
import HeaderNavbarSearch from './HeaderNavbarSearch.vue';


export default {
  name: 'HeaderNavbar',
  components: {
    HeaderNavbarMenu,
    HeaderNavbarIcons,
    HeaderNavbarSearch,
  },
};

</script>

<template>
  <nav>
    <HeaderNavbarMenu />
    <HeaderNavbarIcons />
    <HeaderNavbarSearch />
  </nav>
</template>

<style lang="scss" scoped>

</style>