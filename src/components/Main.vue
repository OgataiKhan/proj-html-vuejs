<script>
import MainJumbo from './MainJumbo.vue';
import MainSectionData from './MainSectionData.vue';
import MainSectionCourses from './MainSectionCourses.vue';
import MainSectionTestimonials from './MainSectionTestimonials.vue';
import MainSectionBlog from './MainSectionBlog.vue';
import MainSectionHelp from './MainSectionHelp.vue';
import MainSectionStart from './MainSectionStart.vue';


export default {
  name: 'Main',
  components: {
    MainJumbo,
    MainSectionData,
    MainSectionCourses,
    MainSectionTestimonials,
    MainSectionBlog,
    MainSectionHelp,
    MainSectionStart,
  },
};

</script>

<template>
  <main>
    <MainJumbo />
    <MainSectionData />
    <MainSectionCourses />
    <MainSectionTestimonials />
    <MainSectionBlog />
    <MainSectionHelp />
    <MainSectionStart />
  </main>
</template>

<style lang="scss" scoped></style>