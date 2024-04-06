<script setup lang="ts">
import { faEnvelope, faBlog, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBilibili, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buttons from "../../components/Buttons.vue";

const links = [
  {
    url: 'https://github.com/stalomeow',
    title: 'GitHub',
    icon: faGithub,
  },
  {
    url: 'https://space.bilibili.com/456366858',
    title: 'Bilibili',
    icon: faBilibili,
  },
  {
    url: 'mailto:stalowork@163.com',
    title: 'E-Mail',
    icon: faEnvelope
  },
  {
    url: 'https://t.me/StaloMeow',
    title: 'Telegram',
    icon: faTelegram,
  },
  {
    url: 'https://note.stalomeow.com/blog',
    title: 'Blog',
    icon: faBlog,
  },
]
</script>

<template>
  <img src="https://avatars.githubusercontent.com/u/47203031?v=4" class="logo" alt="Vite logo" />

  <div class="info">
    <span class="name">Stalo</span>
    <span class="user-id">@stalomeow</span>
  </div>

  <Buttons :links="links" />

  <a class="sponsor-button" href="/sponsor">
    <FontAwesomeIcon class="icon" :icon="faMugSaucer" />
    <p>Buy Me a Coffee</p>
  </a>
</template>

<style scoped>
.logo {
  border-radius: 50%;
  outline: 25rem solid #1f1f1f;
  height: 12rem;
  vertical-align: middle;
}

.info {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
}

.user-id {
  color: #888;
  font-size: 1.25rem;
  padding: 0.2rem;
}

.sponsor-button {
  display: block;
  color: rgba(255, 255, 255, 0.87);
  line-height: 1;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.sponsor-button p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  transition: transform 0.2s;
}

.sponsor-button .icon {
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
}

.sponsor-button:hover .icon {
  animation: tilt-shaking 0.2s 2;
}

.sponsor-button:hover p {
  transform: scale(1.1);
}

@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}
</style>
