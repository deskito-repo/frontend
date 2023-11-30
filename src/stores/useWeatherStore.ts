import { useGeolocation, usePermission, watchOnce } from '@vueuse/core';
import { defineStore } from 'pinia';
import { useDialog } from 'src/composables/useDialog';

export default defineStore('weather', () => {
  const {
    resume, pause, coords, error,
  } = useGeolocation({ immediate: false, enableHighAccuracy: true });
  const permission = usePermission('geolocation');

  const dialog = useDialog();
  const getWeatherStatusInPlace = () => {
    resume();
    if (permission.value === 'denied') {
      dialog.alert('브라우저에서 위치 권한을 허용해야 합니다.');
      return;
    }
    if (error.value) {
      return;
    }
    /** API가 시작한 시점을 탐지할 수 없어서 데이터가 들어온 걸 통해 감지함 */
    watchOnce(coords, ({ latitude, longitude }) => {
      console.log(latitude, longitude); /* @DELETE  */
      pause();
    });
  };

  return {
    getWeatherStatusInPlace,
  };
});
