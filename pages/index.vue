<script setup lang="ts">
import { useHead } from "unhead";
import ButtonGroup from "../components/ButtonGroup.vue";
import { profile } from "../assets/data.json";

useHead({ title: `Home | ${profile.name}` });

const qrPanel = reactive({
  show: false,
  activeCodeUrl: "",
  codes: profile.sponsor.pays.map(config => Object.assign({}, config, { active: false })),
});

const activateQrCode = (index: number) => {
  qrPanel.activeCodeUrl = qrPanel.codes[index].url;
  qrPanel.codes.forEach(item => item.active = false);
  qrPanel.codes[index].active = true;
};

activateQrCode(0);
</script>

<template>
  <div class="home">
    <img class="avatar" :src="profile.avatar" :alt="`${profile.name} Avatar`" />

    <div class="info">
      <span class="name">{{ profile.name }}</span>
      <span class="user-id">@{{ profile.userId }}</span>
    </div>

    <ButtonGroup :links="profile.links" />

    <a class="sponsor-button" @click="qrPanel.show=true">
      <!-- TODO https://github.com/FortAwesome/vue-fontawesome/issues/394 -->
      <ClientOnly>
        <font-awesome-icon class="icon" :icon="profile.sponsor.icon" />
      </ClientOnly>
      <p>{{ profile.sponsor.prompt }}</p>
    </a>
  </div>

  <Transition name="qr-panel">
    <div v-if="qrPanel.show" class="qr-panel" @click.self="qrPanel.show=false">
      <p class="qr-thanks">{{ profile.sponsor.thanks }}</p>
      <div class="qr-code" :style="{ backgroundImage: `url(${qrPanel.activeCodeUrl})`}"></div>
      <ButtonGroup :links="qrPanel.codes" :on-click="activateQrCode" />
      <a class="sponsor-list-link" href="/sponsors">Sponsor List</a>
    </div>
  </Transition>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.avatar {
  border-radius: 9999px;
  outline: 25rem solid var(--bg-color-secondary);
  height: 12rem;
  vertical-align: middle;
  transition: outline-color 0.2s ease-in-out;
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
  color: var(--fg-color-secondary);
  font-size: 1.25rem;
  padding: 0.2rem;
}

.sponsor-button {
  line-height: 1;
  margin-top: 5rem;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.sponsor-button p {
  margin: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  transition: transform 0.2s;
}

.sponsor-button .icon {
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
}

.sponsor-button:hover p {
  transform: scale(1.1);
}

.sponsor-button:hover .icon {
  animation: tilt-shaking 0.2s 2;
}

@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.qr-panel-enter-active,
.qr-panel-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.qr-panel-enter-from,
.qr-panel-leave-to {
  opacity: 0;
}

.qr-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qr-thanks {
  font-weight: bold;
  font-size: 1.25rem;
  user-select: none;
}

.qr-code {
  width: 15rem;
  height: 15rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 0.5rem;
}

.sponsor-list-link {
  position: fixed;
  bottom: 0;
  font-size: 0.75rem;
  text-decoration: underline;
  margin: 1rem;
  color: var(--fg-color-secondary);
  transition: transform 0.2s ease-in-out;
}

.sponsor-list-link:hover {
  transform: scale(1.1);
}
</style>
