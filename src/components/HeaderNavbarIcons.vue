<script>

export default {
  name: 'HeaderNavbarIcons',

};

</script>

<template>
  <div class="navbar-icons">
    <a href="#" class="icon-box cart-box">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    </a>
    <a href="#" class="icon-box">
      <font-awesome-icon icon="fa-solid fa-circle-user" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.navbar-icons {
  display: flex;
  gap: 20px;
  padding-left: 7px;
  padding-right: 20px;

  .icon-box {
    display: flex;
    align-items: center;
  }
}
</style>