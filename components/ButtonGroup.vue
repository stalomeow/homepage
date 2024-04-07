<script setup lang="ts">
type ButtonLink = {
  url: string;
  title: string;
  icon: string;
  active?: boolean;
};

defineProps<{
  links: ButtonLink[];
  onClick?: (index: number) => void;
}>();
</script>

<template>
  <div class="buttons">
    <a
      target="_blank"
      rel="noopener noreferrer"

      v-for="(link, index) in links" :key="link.url"
      v-bind="onClick ? {} : { href: link.url }"
      @click="onClick?.(index)"
      :title="link.title"
      :class="['button', (link.active === true) && 'active']"
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
  color: var(--fg-color-primary);
  text-decoration: none;
  line-height: 1;
  margin: 0.25rem;
  padding: 0.75rem;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
}

.button.active {
  box-shadow: inset 0 -0.3rem var(--fg-color-primary);
}

.button .icon {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
  transition: transform 0.2s ease-in-out;
}

.button:hover .icon,
.button.active .icon {
  transform: scale(1.25);
}
</style>
