<script>
import CourseCard from './CourseCard.vue';

export default {
  name: 'MainSectionCourses',
  components: {
    CourseCard,
  },
  data() {
    return {
      // Number of lessons and students is registered as a string rather than a number in case we want to register a "None" value representing "0"
      courses: [
        {
          name: 'Learning to Write as a Professional Author',
          img: 'course-01-480x298.jpg',
          price: '$40',
          priceDecimals: '.00',
          lessons: '20',
          students: '50',
        },
        {
          name: 'Customer-centric Info-Tech Strategies',
          img: 'course-02-480x298.jpg',
          price: 'Free',
          priceDecimals: '',
          lessons: '24',
          students: '769',
        },
        {
          name: 'Open Programming Courses for Everyone: Python',
          img: 'course-03-480x298.jpg',
          price: '$19',
          priceDecimals: '.00',
          lessons: '17',
          students: '62',
        },
        {
          name: 'Academic Listening and Note-taking',
          img: 'course-04-480x298.jpg',
          price: '$26',
          priceDecimals: '.00',
          lessons: '14',
          students: '67',
        },
        {
          name: 'Master jQuery in a Short Period of Time',
          img: 'course-05-480x298.jpg',
          price: '$39',
          priceDecimals: '.00',
          lessons: '6',
          students: '51',
        },
        {
          name: 'Introduction to Javascript for Beginners',
          img: 'course-06-480x298.jpg',
          price: '$59',
          priceDecimals: '.00',
          lessons: '14',
          students: '76',
        },
      ],
    };
  },
};

</script>

<template>
  <section class="section-courses">
    <div class="container">
      <p class="section-subtitle">Choose a course to get started</p>
      <h3 class="section-title">Latest featured <span class="highlight">courses</span></h3>
      <ul class="course-list">
        <CourseCard v-for="course in courses" :name="course.name" :img="course.img" :price="course.price" :priceDecimals="course.priceDecimals" :lessons="course.lessons" :students="course.students" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-courses {
  background-color: $bg-secondary;
  text-align: center;

  .container {
    @include container;

    .section-subtitle {
      padding-top: 100px;
      padding-bottom: 20px;
    }
    .section-title {
      padding-bottom: 60px;
    }
    .course-list {
      display: flex;
      gap: $courses-gap;
      flex-wrap: wrap;
      padding-bottom: 40px;
    }
  }
}
</style>