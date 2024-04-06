<script setup lang="ts">
defineProps<{
  links: {
    url: string
    title: string
    icon: string
  }[]
}>()
</script>

<template>
  <div class="buttons">
    <a
      v-for="link in links"
      :key="link.url"
      :href="link.url"
      :title="link.title"
      class="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <!-- TODO https://github.com/FortAwesome/vue-fontawesome/issues/394 -->
      <ClientOnly>
        <font-awesome-icon class="icon" :icon="link.icon" />
      </ClientOnly>
    </a>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.button {
  display: block;
  color: rgba(255, 255, 255, 0.87);
  line-height: 1;
  margin: 1rem;
  transition: transform 0.2s;
}

.button:hover {
  transform: scale(1.25);
}

.button .icon {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
}
</style>