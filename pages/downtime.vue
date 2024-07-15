<script setup lang="ts">
useHead({ title: 'Maintenance...' })
</script>

<template>
  <div class="main-area center-text" style="background-image:url('/downtime-background.jpg');">
    <div class="display-table">
      <div class="display-table-cell">
        <h1 class="title font-white"><b>En maintenance</b></h1>
        <p class="desc font-white">
          Le site est actuellement en maintenance pour inclure de nouvelles fonctionnalités.
          Nous devrions être de retour prochainement.<br>
          Merci pour votre patience.
        </p>
        <ul class="social-btn font-white">
          <li>
            <NuxtLink to="https://youtube.com/@Apokalypt" external target="_blank">YouTube</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://discord.gg/glitchgtafrance" external target="_blank">Discord</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://twitter.com/ApokalyptYT" external target="_blank">Twitter</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.instagram.com/apokalyptyt/" external target="_blank">Instagram</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.twitch.tv/apokalypttv" external target="_blank">Twitch</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, p, a, ul, li {
  margin: 0;
  padding: 0
}

h1 {
  font-weight: inherit;
  font-size: 3.5em;

  line-height: 1;
}

h1, p, a {
  font-family: poppins, sans-serif
}

p {
  line-height: 1.6;
  font-size: 1.05em;
  font-weight: 400;
  color: #555
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: all .3s;
  line-height: 1;
}

a:focus, a:active, a:hover {
  text-decoration: none;
  color: #e10000;
}

li {
  list-style: none;
  display: inline-block;
}

*, *::before, *::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

*, *::before, *::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

.center-text {
  text-align: center;
}

.display-table {
  display: table;
  height: 100%;
  width: 100%;
}

.display-table-cell {
  display: table-cell;
  vertical-align: middle;
}

::-webkit-input-placeholder {
  font-size: .9em;
  letter-spacing: 1px;
}

::-moz-placeholder {
  font-size: .9em;
  letter-spacing: 1px;
}

:-ms-input-placeholder {
  font-size: .9em;
  letter-spacing: 1px;
}

:-moz-placeholder {
  font-size: .9em;
  letter-spacing: 1px;
}

.font-white {
  color: #fff;
}

.main-area {
  position: relative;
  height: 100vh;
  z-index: 1;
  padding: 0 20px;
  background-size: cover;
  color: #fff;
}

.main-area:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: .85;
  background: #000;
}

.main-area .desc {
  margin: 20px auto;
  max-width: 500px;
}

.main-area .social-btn {
  position: absolute;
  bottom: 40px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.main-area .social-btn > li > a {
  margin: 0 10px;
  padding-bottom: 7px;
  position: relative;
  overflow: hidden;
}

.main-area .social-btn > li > a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .2s;
  height: 2px;
  background: #e10000;
}

.main-area .social-btn > li > a:hover:after {
  transform: translateX(100%);
}

</style>
