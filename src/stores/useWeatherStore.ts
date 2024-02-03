import { useGeolocation, usePermission } from '@vueuse/core';
import { defineStore } from 'pinia';
import { useDialog } from 'src/composables/useDialog';
import { defineApi } from 'src/utils/defineApi';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineStore('weather', () => {
  const { t } = useI18n();
  const data = ref<{
    weather: string;
    degree: number;
    humidity: number;
    country: string;
  }>();
  const {
    resume, pause, coords, error,
  } = useGeolocation({ immediate: false, enableHighAccuracy: true });
  const permission = usePermission('geolocation');

  const dialog = useDialog();
  const { api } = defineApi('/api/weather');
  const getWeather = async (params: {
    latitude: number;
    longitude: number;
  }) => {
    const queryStr = new URLSearchParams(params as any).toString();
    data.value = await api(`?${queryStr}`).get().json();
  };
  const getWeatherStatusInPlace = () => {
    resume();
    if (permission.value === 'denied') {
      const msg = t('need_browser_permission', { permission: 'geolocation' });
      dialog.alert(msg);
      return;
    }
    if (error.value) {
      return;
    }
    const intervalUntilReceiveGeoInfo = setInterval(() => {
      const { latitude, longitude } = coords.value;
      if (!latitude || latitude === Infinity) {
        return;
      }
      getWeather({ latitude, longitude }).then(pause);
      clearInterval(intervalUntilReceiveGeoInfo);
    }, 500);
  };

  return {
    value: computed(() => data.value && {
      ...data.value,
      degree: Math.floor(data.value.degree),
    }),
    getWeatherStatusInPlace,
  };
});
