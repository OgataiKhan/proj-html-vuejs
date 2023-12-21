import { reactive } from 'vue';

export const store = reactive({
  subjects: [
    {
      title: 'Idea Discussion',
      description: 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
      img: 'home-6-service-image-03.png',
      faIcon: 'fa-regular fa-flag',
    },
    {
      title: 'Web Development',
      description: 'Learn to study building a webpage from scratch. You decide your own pace, course and speed.',
      img: 'home-6-service-image-04.png',
      faIcon: 'fa-solid fa-gear',
    },
    {
      title: 'System Administration',
      description: 'Learners are encouraged to study the mechanism and structure of system administration.',
      img: 'home-6-service-image-02.png',
      faIcon: 'fa-solid fa-life-ring',
    },
    {
      title: 'Graphic Design',
      description: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.',
      img: 'home-6-service-image-01.png',
      faIcon: 'fa-solid fa-display',
    },
  ],
});