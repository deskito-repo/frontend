<template>
  <div class="clock shown text-primary">
    <b class="time">
      {{ date.hour }}
      <span class="colon">:</span>
      {{ formatWithPad(date.minute) }}
      <span class="colon">:</span>
      {{ formatWithPad(date.sec) }}
    </b>
    <div class="date">
      {{ getTodayDateInfo('en') }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCurrentDateStore } from 'src/stores/useCurrentDateStore';

const { date } = useCurrentDateStore();
const formatWithPad = (str: string | number) => String(str).padStart(2, '0');
const getTodayDateInfo = (locale: string, date = new Date()) => new Intl.DateTimeFormat(locale, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short',
}).format(date);
</script>
<style lang="scss" scoped>
.clock {
    margin-bottom: 15px;
    text-align: center;
    opacity: 80%;
    transition: opacity .15s;

    &:hover,
    &:active {
        opacity: 100%;
    }

    &.showed {
        animation-name: fade;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
}
.time {
    font-size: 50px;
    text-shadow: 0 0 8px var(--color-primary);
    white-space: nowrap;
    > .colon {
        animation-name: fade;
        animation-duration: .5s;
        animation-iteration-count: infinite;
        animation-fill-mode: backwards;
        animation-direction: alternate;
    }
}
.date {
    font-size: 14px;
    text-shadow: 0 0 3px #fff;
}
</style>
