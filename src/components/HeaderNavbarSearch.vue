<script>

export default {
  name: 'HeaderNavbarSearch',

};

</script>

<template>
  <form @submit.prevent class="search-box">
    <label for="searchbar">Search</label>
    <input type="search" id="searchbar" placeholder="Search..." />
    <button type="submit" class="search-button">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
  </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
.search-box {
        display: flex;
        width: 195px;
        
        label[for="searchbar"] {
          display: none;
        }

        #searchbar {
          background-color: $bg-primary;
          border: none;
          padding-left: 20px;
          line-height: 3.4;
          border-top-left-radius: $search-border-radius;
          border-bottom-left-radius: $search-border-radius;

          &:focus {
            outline: none;
          }
        }

        .search-button {
          color: $details-primary;
          font-size: 1rem;
          padding-left: 10px;
          padding-right: 16px;
          background-color: $bg-primary;
          border: none;
          cursor: pointer;
          border-top-right-radius: $search-border-radius;
          border-bottom-right-radius: $search-border-radius;
        }
      }
</style>