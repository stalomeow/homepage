<script setup lang="ts">
import { useHead } from "unhead"
import sponsorWechatSrc from "../assets/sponsor.png"
import { sponsors } from "../assets/data.json"

useHead({
  title: 'Sponsor | stalomeow'
})
</script>

<template>
  <p class="title">Thanks for your support!</p>
  <img class="qr-code" :src="sponsorWechatSrc" />
  <img class="qr-code" :src="sponsorWechatSrc" />

  <p class="title">Sponsors</p>
  <div class="timeline">
    <div v-for="s in sponsors" class="timeline-item">
      <div>
        <span class="timeline-time">{{ s.time }}</span>
        <span class="timeline-title">{{ s.name }}</span>
      </div>
      <p class="timeline-content">{{ s.msg }}</p>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}

.qr-code {
  height: 10rem;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  width: 1px;
  top: 0;
  left: 20px;
  bottom: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.87);
}
</style>