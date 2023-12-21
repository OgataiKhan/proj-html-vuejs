<script>

export default {
  name: 'FooterLinks',

};

</script>

<template>
  <div class="links-box">
    <div class="explore">
      <h5 class="footer-title">Explore</h5>
    </div>
    <div class="info">
      <h5 class="footer-title">Information</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links-box {
  display: flex;
  width: 50%;
  .explore {
    width: calc((100% / 3) * 2);
  }
  .info {
    width: calc(100% / 3);
  }
  .explore,
  .info {
    flex-shrink: 0;
  }
}
</style>