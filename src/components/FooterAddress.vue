<script>
import SocialLink from './SocialLink.vue';

export default {
  name: 'FooterAddress',
  components: {
    SocialLink,
  },
  data() {
    return {
      socials: [
        {
          name: 'Facebook',
          socialIcon: 'fa-brands fa-square-facebook',
        },
        {
          name: 'Twitter',
          socialIcon: 'fa-brands fa-twitter',
        },
        {
          name: 'Instagram',
          socialIcon: 'fa-brands fa-instagram',
        },
        {
          name: 'Linkedin',
          socialIcon: 'fa-brands fa-linkedin',
        },
      ],
    };
  },
};

</script>

<template>
  <div class="address-box">
    <h5 class="footer-title">Address</h5>
    <div class="address-text">
      <p class="address">382 NE 191st St # 87394 Miami, FL 33179-3899</p>
      <p class="tel">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
      <a class="email" href="#">support@maxcoach.com</a>
      <ul class="social-list">
        <SocialLink v-for="social in socials" :socialIcon="social.socialIcon" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.address-box {
  width: 50%;

  .address-text {
    font-size: 0.9rem;
    .address,
    .tel {
      padding-bottom: 13px;
    }
    .email {
      display: inline-block;
      margin-bottom: 30px;
    }
    .social-list {
      display: flex;
      gap: 30px;
      color: $font-secondary;
    }
  }
}
</style>