<script setup lang="ts">
import { useHead } from "unhead"

const { profile, sponsors } = useAppConfig();

useHead({ title: `Sponsors | ${profile.name}` });
</script>

<template>
  <div class="sponsor-list">
    <p class="title">Sponsors</p>

    <div class="timeline">
      <div
        v-for="s in sponsors"
        :key="`${s.time}-${s.name}-${s.money}-${s.msg}`"
        class="timeline-item"
      >
        <div class="timeline-blank"></div>
        <div class="timeline-text">
          <span>
            <p class="timeline-time">{{ s.time }} · {{ s.name }} · {{ s.money }}</p>
            <p v-if="s.msg">{{ s.msg }}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-list {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  margin-left: 3rem;
  margin-right: 3rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 2px;
  background: #efa22f;
  top: 0.5rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.timeline-item:nth-child(even) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.timeline-blank {
  width: 50%;
}

.timeline-text {
  width: 50%;
  padding-left: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(even) .timeline-text {
  padding-left: 0;
  padding-right: 30px;
  text-align: right;
}

.timeline-text .timeline-time {
  font-weight: bold;
  display: inline-block;
  font-size: 1rem;
  position: relative;
  margin: 0;
}

.timeline-text .timeline-time::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: -36px;
  background: #efa22f;
  border-radius: 50%;
  box-shadow: 0 0 0 5px var(--bg-color-primary);
  transform: translateY(50%);
}

.timeline-item:nth-child(even) .timeline-text .timeline-time::before {
  right: -36px;
  left: unset;
}

.timeline-text span {
  display: block;
  width: 100%;
}

.timeline-item:nth-child(even) .timeline-text span {
  text-align: right;
}

@media all and (max-width: 550px) {
  .timeline::before {
    right: unset;
    left: -1px;
  }

  .timeline-blank {
    display: none;
  }

  .timeline-text {
    width: 100%;
  }

  .timeline-item:nth-child(even) .timeline-text {
    padding-left: 30px;
    padding-right: 0;
    text-align: left;
  }

  .timeline-item:nth-child(even) .timeline-text .timeline-time::before {
    left: -36px;
    right: unset;
  }

  .timeline-item:nth-child(even) .timeline-text span {
    text-align: left !important;
  }
}
</style>
