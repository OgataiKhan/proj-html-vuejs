<script>
import FooterLinksItem from './FooterLinksItem.vue';


export default {
  name: 'FooterLinks',
  components: {
    FooterLinksItem,
  },
  data() {
    return {
      exploreLinks: [
        'Start here',
        'Blog',
        'About us',
        'Success story',
        'Courses',
        'Contact us',
      ],
      infoLinks: [
        'Membership',
        'Purchase guide',
        'Privacy policy',
        'Terms of service',
      ],
    };
  },
};

</script>

<template>
  <div class="links-box">
    <div class="explore">
      <h5 class="footer-title">Explore</h5>
      <ul class="explore-list">
        <FooterLinksItem v-for="link in exploreLinks" :item="link" />
      </ul>
    </div>
    <div class="info">
      <h5 class="footer-title">Information</h5>
      <ul class="info-list">
        <FooterLinksItem v-for="link in infoLinks" :item="link" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links-box {
  display: flex;
  width: 50%;

  .explore {
    width: calc((100% / 3) * 2);
    .explore-list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 120px;
    }
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