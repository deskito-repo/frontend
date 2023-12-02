import { useIntervalFn } from '@vueuse/core';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCurrentDateStore = defineStore('currentDate', () => {
  const getDate = (date = new Date()) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: date.getDay(),
    hour: date.getHours() || 12,
    minute: date.getMinutes(),
    sec: date.getSeconds(),
  });
  const date = reactive(getDate());
  useIntervalFn(() => Object.assign(date, getDate()), 1000);

  return {
    date,
  };
});
