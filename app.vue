<template>
  <nuxt-page />
</template>

<style>
:root {
  color-scheme: light;

  --bg-color-primary: #ffffff;
  --bg-color-secondary: #f4f4f5;
  --fg-color-primary: rgb(15, 23, 42, 1);
  --fg-color-secondary: rgb(15, 23, 42, 0.6);
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;

    --bg-color-primary: #121212;
    --bg-color-secondary: #1f1f1f;
    --fg-color-primary: rgba(255, 255, 255, 0.85);
    --fg-color-secondary: rgba(255, 255, 255, 0.45);
  }
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  color: var(--fg-color-primary);
  background-color: var(--bg-color-primary);
  transition: background-color 0.2s ease-in-out;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
