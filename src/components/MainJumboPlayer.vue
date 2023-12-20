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
    margin: 78px auto 21px;
    border-radius: 20px;
    // border: 1px solid black;
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