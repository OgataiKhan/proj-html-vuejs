<script>

export default {
  name: 'HeaderNavbarIcons',

};

</script>

<template>
  <div class="navbar-icons">
    <a href="#" class="icon-box cart-box">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <div class="cart-items">
        0
      </div>
    </a>
    <a href="#" class="icon-box">
      <font-awesome-icon icon="fa-solid fa-circle-user" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.navbar-icons {
  display: flex;
  gap: 20px;
  padding-left: 7px;
  padding-right: 20px;

  .icon-box {
    display: flex;
    align-items: center;
    position: relative;
    .cart-items {
      position: absolute;
      left: calc(50% + 2px);
      top: calc(50% - 20px);
      background-color: $header-font;
      color: $header-primary;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.6rem;
    }
  }
}
</style>