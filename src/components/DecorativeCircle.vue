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
  transition: transform 0.4s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.3);
  }
}
</style>