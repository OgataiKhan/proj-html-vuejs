<script>

export default {
  name: 'FooterLinksItem',
  props: {
    item: String,
  },
};

</script>

<template>
  <li>
    <a class="test" href="#">{{ item }}</a>
  </li>
</template>

<style lang="scss" scoped>
li {
  padding-bottom: 15px;
}
</style>