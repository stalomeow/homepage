<script setup lang="ts">
import ButtonGroup from "../components/ButtonGroup.vue";

const appConfig = useAppConfig();
const route = useRoute();

useHead({ title: `Home | ${appConfig.profile.name}` });

const qrToggle = ref<InstanceType<typeof ButtonGroup> | null>(null);
const showQrPanel = ref(false);
const qrCodeData = computed(() => {
  const index = qrToggle.value?.activeIndex || 0;
  return appConfig.profile.sponsor.pays[index].qrCodeData;
});

// 直接打开二维码支付面板
watchPostEffect(() => {
  if (route.hash === "#coffee") {
    showQrPanel.value = true;
  }
});
</script>

<template>
  <div class="home">
    <img class="avatar" :src="appConfig.profile.avatar" :alt="`${appConfig.profile.name} Avatar`" />

    <div class="info">
      <span class="name">{{ appConfig.profile.name }}</span>
      <span class="user-id">@{{ appConfig.profile.userId }}</span>
    </div>

    <ButtonGroup :buttons="appConfig.profile.links" />

    <a class="sponsor-button" @click="showQrPanel=true">
      <font-awesome-icon class="icon" :icon="appConfig.profile.sponsor.icon" />
      <p>{{ appConfig.profile.sponsor.prompt }}</p>
    </a>
  </div>

  <Transition name="qr-panel">
    <div v-if="showQrPanel" class="qr-panel" @click.self="showQrPanel=false">
      <p class="qr-thanks">{{ appConfig.profile.sponsor.thanks }}</p>
      <vue-qrcode class="qr-code" tag="svg" :value="qrCodeData" />
      <ButtonGroup ref="qrToggle" :buttons="appConfig.profile.sponsor.pays" :toggle-mode="true" />
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
  width: 12rem;
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
  transition: transform 0.2s ease-in-out;
  user-select: none;
}

.sponsor-button .icon {
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
  transition: transform 0.2s ease-in-out;
}

.sponsor-button:hover p,
.sponsor-button:hover .icon {
  transform: scale(1.1);
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
  backdrop-filter: blur(40px);
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
  user-select: none;
}

.sponsor-list-link:hover {
  transform: scale(1.1);
}
</style>
