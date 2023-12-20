<script>

export default {
  name: 'MainJumboPlayer',

};

</script>

<template>
  <div class="player-box">
    <div class="video">
      <img src="../assets/img/home-6-hero-poster-final.jpg" alt="Jumbo Video">
      <div class="play">
        <img src="../assets/img/icon-youtube-play.png" alt="Youtube Play"> 
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
  .player-box {
    background-color: #FFFFFF;
    width: 770px;
    padding: 20px;
    margin: 78px auto 0;
    border-radius: 20px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 5;
    .video {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .play {
        width: 100px;
        position: absolute;
        cursor: pointer;
        transition: filter 0.4s;
        &:hover {
          filter: brightness(1.25);
        }
      }
    }
  }
</style>