<script>
import HeaderNavbarMenuItem from './HeaderNavbarMenuItem.vue';

export default {
  name: 'HeaderNavbarMenu',
  components: {
    HeaderNavbarMenuItem,
  },
  data() {
    return {
      text: 'Template VueJS',
      navbarMenu: [
        'Home',
        'Pages',
        'Courses',
        'Features',
        'Blog',
        'Shop',
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