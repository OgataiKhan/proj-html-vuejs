<script>

export default {
  name: 'MainSectionHelpItem',
  props: {
    title: String,
    faIcon: String,
    description: String,
  },
};

</script>

<template>
  <li class="help-item">
    <div class="help-icon">
      <font-awesome-icon :icon="faIcon" />
    </div>
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.help-item {
  width: calc((100% - (3 * $help-items-gap)) / 4);
  text-align: left;
  .help-icon {
    font-size: 3rem;
    padding-bottom: 15px;
  }
  h5 {
    font-size: 1.2rem;
    padding-bottom: 10px;
  }
  p {
    color: $font-secondary;
    line-height: 1.7;
  }
}
</style>