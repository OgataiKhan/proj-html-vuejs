<script>

export default {
  name: 'MainSectionTestimonialsLogo',
  props: {
    logo: String,
    index: Number,
  },
};

</script>

<template>
  <li>
    <a href="#">
      <img :src="`../../src/assets/img/testimonial-logos/${logo}`" :alt="`Testimonial Logo ${index + 1}`">
    </a>
  </li>
</template>

<style lang="scss" scoped>
li {
  a {
    display: block;
    max-width: 160px;
    height: 84px;

    img {
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>