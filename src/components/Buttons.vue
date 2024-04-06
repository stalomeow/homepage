<script setup lang="ts">
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<{
  links: {
    url: string
    title: string
    icon: IconDefinition
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
      <FontAwesomeIcon class="icon" :icon="link.icon" />
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
