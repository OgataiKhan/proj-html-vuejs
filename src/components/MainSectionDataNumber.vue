<script>

export default {
  name: 'MainSectionDataNumber',
  props: {
    numberDisplay: String,
    numberLabel: String,
  },
};

</script>

<template>
  <li>
    <div class="number-display">{{ numberDisplay }}</div>
    <p class="number-label">{{ numberLabel }}</p>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
  .number-display {
    color: $details-primary;
    font-weight: 900;
    font-size: 2rem;
    padding-bottom: 13px;
  }
  .number-label {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8rem;
  }
</style>