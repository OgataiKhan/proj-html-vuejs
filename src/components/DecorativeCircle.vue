<script>

export default {
  name: 'DecorativeCircle',
  props: {
    size: String,
    borderColor: String,
    innerColor: String,
    top: String,
    left: String,
  },
};

</script>

<template>
  <div class="decorative-circle" :style="{ width: size, height: size, borderColor: borderColor, backgroundColor: innerColor, top: top, left: left }"></div>
</template>

<style lang="scss" scoped>
.decorative-circle {
  border-radius: 50%;
  border-width: 7px;
  border-style: solid;
  position: absolute;
}
</style>