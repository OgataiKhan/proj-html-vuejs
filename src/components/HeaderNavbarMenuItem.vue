<script>

export default {
  name: 'HeaderNavbarMenuItem',
  props: {
    item: String,
  },
};

</script>

<template>
  <li>
    <a class="test" href="#">{{ item }}</a> <font-awesome-icon class="chevron" icon="fa-solid fa-chevron-down" />
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;

  .chevron {
    padding-left: 5px;
    font-size: 0.5rem;
  }
}
</style>