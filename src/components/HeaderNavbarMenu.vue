<script>
import HeaderNavbarMenuItem from './HeaderNavbarMenuItem.vue';

export default {
  name: 'HeaderNavbarMenu',
  components: {
    HeaderNavbarMenuItem,
  },
  data() {
    return {
      navbarMenu: [
        'home',
        'pages',
        'courses',
        'features',
        'blog',
        'shop',
      ],
    };
  },
};

</script>

<template>
  <ul>
    <HeaderNavbarMenuItem v-for="item in navbarMenu" :item="item" />
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    display: flex;
    gap: 40px;
    align-items: center;
  }
</style>