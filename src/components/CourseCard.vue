<script>

export default {
  name: 'CourseCard',
  props: {
    name: String,
    img: String,
    price: String,
    priceDecimals: String,
    lessons: String,
    students: String,
  },
};

</script>

<template>
  <li class="course-card">
    <div class="course-img">
      <img :src="`../../src/assets/img/courses/${img}`" :alt="name">
    </div>
    <div class="course-details">
      <p class="course-price">{{ price }}<span class="course-price-decimals">{{ priceDecimals }}</span></p>
      <h5 class="course-title">{{ name }}</h5>
      <div class="course-stats">
        <p class="stats-lessons"><font-awesome-icon class="stats-icon" icon="fa-regular fa-file-lines" />{{ lessons }} Lessons</p>
        <p><font-awesome-icon class="stats-icon" icon="fa-regular fa-user" />{{ students }} Students</p>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.course-card {
  width: calc((100% - $courses-gap) / 2);
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: left;
  border-radius: 6px;
  background-color: $bg-secondary;
  &:hover {
    background-color: $bg-primary;
    cursor: pointer;
  }

  .course-img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
    flex-shrink: 0;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .course-details {
    color: $details-primary;
    .course-price {
      font-weight: 900;
      font-size: 1.5rem;
      padding-bottom: 4px;
      .course-price-decimals {
        font-size: 1rem;
      }
    }
    .course-title {
      font-size: 1.2rem;
      line-height: 1.6;
      padding-bottom: 13px;
      color: $header-primary;
    }
    .course-stats {
      display: flex;
      color: $font-secondary;
      font-size: 0.9rem;
      .stats-lessons {
        padding-right: 30px;
      }
      .stats-icon {
        padding-right: 10px;
      }
    }
  }
}
</style>