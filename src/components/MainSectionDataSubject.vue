<script>

export default {
  name: 'MainSectionDataSubject',
  props: {
    title: String,
    text: String,
    img: String,
  },
};

</script>

<template>
  <div class="card">
    <div class="text">
      <!-- <h6>Graphic Design</h6> -->
      <h6>{{ title }}</h6>
      <p>{{ text }}</p>
    </div>
    <div class="image">
      <img :src="`../../src/assets/img/${img}`" :alt="title">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.card {
  width: 270px;
  height: 375px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  .text {
    padding-left: 25px;
    padding-right: 25px;

    h6 {
      font-size: 1.2rem;
      color: $header-primary;
      padding-bottom: 7px;
    }

    p {
      line-height: 28px;
    }
  }

  .image {
    max-width: 90%;
  }

  .image img {
    object-fit: contain;
    height: 190px;
  }
}

.text-first {
  flex-direction: column;
  padding-top: 35px;
}

.img-first {
  flex-direction: column-reverse;
  padding-top: 15px;
  padding-bottom: 20px;
  .image {
    padding-left: 25px;
  }
}

.img-attached .image {
  padding-left: 0;
  img {
    object-position: left;
  }
}
</style>