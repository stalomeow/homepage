<script setup lang="ts">
withDefaults(defineProps<{
  buttons: {
    title: string;
    icon: string[];
    href?: string;
  }[];
  toggleMode?: boolean;
}>(), {
  toggleMode: false
});

const activeIndex = ref(0);

defineExpose({
  activeIndex
});
</script>

<template>
  <div class="buttons">
    <a
      target="_blank"
      rel="noopener noreferrer"

      v-for="(btn, i) in buttons"
      :key="btn.title"
      :href="btn.href"
      :title="btn.title"
      :class="['button', (toggleMode && i === activeIndex) && 'active']"
      @click="activeIndex = i"
    >
      <font-awesome-icon class="icon" :icon="btn.icon" />
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
