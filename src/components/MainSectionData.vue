<script>
import { store } from '../store';
import MainSectionDataNumber from './MainSectionDataNumber.vue';
import MainSectionDataSubject from './MainSectionDataSubject.vue';
import Button from './Button.vue';
import DecorativeCircle from './DecorativeCircle.vue';

export default {
  name: 'MainSectionData',
  components: {
    MainSectionDataNumber,
    MainSectionDataSubject,
    Button,
    DecorativeCircle,
  },
  data() {
    return {
      store,
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
      circles: [
        {
          size: '52px',
          borderColor: '#8FD6CA',
          innerColor: 'transparent',
          top: '180px',
          left: 'calc(50% - 650px)',
        },
        {
          size: '46px',
          borderColor: '#BCE6DF',
          innerColor: '#BCE6DF',
          top: '90px',
          left: 'calc(50% + 600px)',
        },
        {
          size: '28px',
          borderColor: '#BC71FE',
          innerColor: '#BC71FE',
          top: '240px',
          left: 'calc(50% - 150px)',
        },
        {
          size: '35px',
          borderColor: '#FF8265',
          innerColor: '#FF8265',
          top: '400px',
          left: 'calc(50% - 620px)',
        },
        {
          size: '54px',
          borderColor: '#EBB860',
          innerColor: '#EBB860',
          top: '620px',
          left: 'calc(50% - 740px)',
        },
        {
          size: '38px',
          borderColor: '#E88C98',
          innerColor: '#E88C98',
          top: '340px',
          left: 'calc(50% + 630px)',
        },
        {
          size: '36px',
          borderColor: '#AAB8F1',
          innerColor: '#AAB8F1',
          top: '500px',
          left: 'calc(50% + 440px)',
        },
        {
          size: '70px',
          borderColor: '#F6B9AA',
          innerColor: 'transparent',
          top: '610px',
          left: 'calc(50% + 620px)',
        },
      ],
    };
  },
};

</script>

<template>
  <section class="section-data" id="pages">
    <div class="container">
      <!-- CEO quote -->
      <h2 class="quote">Let passion and determination be the guide along the way and develop at your own pace that's
        comfortable.</h2>
      <p class="quote-author">Fannie Moreno</p>
      <p class="author-title">/Founder & CEO</p>
      <!-- Global numbers describing the business -->
      <ul class="global-numbers">
        <MainSectionDataNumber v-for="display in globalNumbers" :numberDisplay="display.number"
          :numberLabel="display.label" />
      </ul>
      <!-- Subjects & Services -->
      <div class="subjects-box">
        <div class="subjects-cards">
          <div class="cards-left">
            <MainSectionDataSubject :class="'text-first'" :title="store.subjects[3].title"
              :text="store.subjects[3].description" :img="store.subjects[3].img" />
            <MainSectionDataSubject :class="'img-first img-attached'" :title="store.subjects[0].title"
              :text="store.subjects[0].description" :img="store.subjects[0].img" />
          </div>
          <div class="cards-right">
            <MainSectionDataSubject :class="'text-first'" :title="store.subjects[2].title"
              :text="store.subjects[2].description" :img="store.subjects[2].img" />
            <MainSectionDataSubject :class="'img-first'" :title="store.subjects[1].title"
              :text="store.subjects[1].description" :img="store.subjects[1].img" />
          </div>
        </div>
        <div class="get-started">
          <p class="section-subtitle">Together we can create</p>
          <h3 class="section-title">Services we <span class="highlight">can provide</span> for my cients.</h3>
          <ul class="benefit-list">
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Select & customize courses to your preferences
            </li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Change the tutor and make arrangements</li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Participate in events to join others</li>
            <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Get the desired certificate delivered at house
            </li>
          </ul>
          <Button :class="'btntwo'" :text="buttonText" />
        </div>
      </div>
    </div>
    <DecorativeCircle v-for="circle in circles" :size="circle.size" :borderColor="circle.borderColor" :innerColor="circle.innerColor"
      :top="circle.top" :left="circle.left" />
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

.section-data {
  background-image: url(../../src/assets/img/background-pattern-grid-line.png);
  background-position: center;
  background-size: 420px;
  margin-top: -111px;
  padding-top: 111px;
  padding-bottom: 100px;
  position: relative;

  .container {
    @include container;

    .quote {
      padding: 207px 0 41px;
      max-width: 715px;
      margin: 0 auto;
      font-size: 2rem;
      line-height: 1.5;
    }

    .quote-author {
      padding-bottom: 10px;
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
          padding-bottom: 20px;
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