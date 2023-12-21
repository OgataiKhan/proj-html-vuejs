<script>

export default {
  name: 'SocialLink',
  props: {
    socialIcon: String,
  },
};

</script>

<template>
  <li class="social-link">
    <a href="#">
      <font-awesome-icon :icon="socialIcon" />
    </a>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.social-link {
  font-size: 1.5rem;
}
</style>