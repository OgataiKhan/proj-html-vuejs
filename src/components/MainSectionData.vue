<script>
import MainSectionDataNumber from './MainSectionDataNumber.vue';
import MainSectionDataSubject from './MainSectionDataSubject.vue';
import Button from './Button.vue';

export default {
  name: 'MainSectionData',
  components: {
    MainSectionDataNumber,
    MainSectionDataSubject,
    Button,
  },
  data() {
    return {
      buttonText: 'Get started for free',
      globalNumbers: [
        {
          number: '1.926',
          label: 'Finished sessions',
        },
        {
          number: '3.092+',
          label: 'Enrolled learners',
        },
        {
          number: '200',
          label: 'Online instructors',
        },
        {
          number: '100%',
          label: 'Satisfaction rate',
        },
      ],
      subjects: [
        {
          title: 'Graphic Design',
          description: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.',
          img: 'home-6-service-image-01.png',
        },
        {
          title: 'Business Administration',
          description: 'Learners are encouraged to study the mechanism and structure of system administration.',
          img: 'home-6-service-image-02.png',
        },
        {
          title: 'Idea Discussion',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
          img: 'home-6-service-image-03.png',
        },
        {
          title: 'Web Development',
          description: 'Learn to study building a webpage from scratch. You decide your own pace, course and speed.',
          img: 'home-6-service-image-04.png',
        },
      ],
    };
  },
};

</script>

<template>
  <section class="section-data">
    <div class="container">
      <h2>Let passion and determination be the guide along the way and develop at your own pace that's comfortable.</h2>
      <p class="quote-author">Fannie Moreno</p>
      <p class="author-title">/Founder & CEO</p>
      <ul class="global-numbers">
        <MainSectionDataNumber v-for="display in globalNumbers" :numberDisplay="display.number" :numberLabel="display.label" />
      </ul>
      <div class="subjects-box">
        <div class="subjects-cards">
          <div class="cards-left">
            <MainSectionDataSubject :class="'text-first'" :title="subjects[0].title" :text="subjects[0].description" :img="subjects[0].img" />
            <MainSectionDataSubject :class="'img-first img-attached'" :title="subjects[2].title" :text="subjects[2].description" :img="subjects[2].img" />
          </div>
          <div class="cards-right">
            <MainSectionDataSubject :class="'text-first'" :title="subjects[1].title" :text="subjects[1].description" :img="subjects[1].img" />
            <MainSectionDataSubject :class="'img-first'" :title="subjects[3].title" :text="subjects[3].description" :img="subjects[3].img" />
          </div>
        </div>
        <div class="get-started">
          <p>Together we can create</p>
          <h3>Services we <span class="highlight">can provide</span> for my cients.</h3>
          <ul class="benefit-list">
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Select & customize courses to your preferences</li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Change the tutor and make arrangements</li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Participate in events to join others</li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Get the desired certificate delivered at house</li>
          </ul>
          <Button :class="'btntwo'" :text="buttonText" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-data {
  text-align: center;
  background-image: url(../../src/assets/img/background-pattern-grid-line.png);
  background-position: center;
  background-size: 420px;
  margin-top: -111px;
  padding-top: 111px;
  .container {
    @include container;
    h2 {
      padding: 207px 0 41px;
      max-width: 715px;
      margin: 0 auto;
      font-size: 2rem;
      line-height: 1.5;
    }
    .quote-author {
      text-transform: uppercase;
      font-weight: 700;
      padding-bottom: 10px;
    }
    .author-title {
      color: $font-secondary;
    }
    .global-numbers {
      display: flex;
      justify-content: space-around;
      padding: 150px 0;
    }
    .subjects-box {
      display: flex;
      justify-content: space-between;
      .subjects-cards {
        display: flex;
        gap: $cards-gap;
        .cards-left,
        .cards-right {
          display: flex;
          flex-direction: column;
          gap: $cards-gap;
        }
        .cards-right {
          padding-top: 70px;
        }
      }
      .get-started {
        padding-top: 200px;
        margin-right: 125px;
        width: 373px;
        text-align: left;
        p {
          text-transform: uppercase;
          color: $font-secondary;
          font-weight: 500;
          font-size: 0.8rem;
          padding-bottom: 20px;
        }
        h3 {
          font-size: 2.3rem;
          text-transform: capitalize;
          .highlight {
            color: $details-primary;
            font-weight: 400;
          }
        }
        .benefit-list {
          padding-top: 41px;
          padding-bottom: 20px;
          li {
            margin-bottom: 15px;
            .check {
              color: $details-primary;
              padding-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>