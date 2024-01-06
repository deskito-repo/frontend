<script lang="ts" setup>
import { Bookmark, bookmarkType } from 'src/types/Bookmark';
import { ref } from 'vue';

const props = defineProps<Bookmark>();
defineEmits<{
  update: [],
  delete: [],
}>();
const onClick = () => {
  if (props.type === bookmarkType.FILE) {
    window.location.href = props.link || '';
  }
};
const contextmenu = ref();
</script>
<template>
  <div
    v-contextmenu:contextmenu
    class="host p-2 relative flex flex-col justify-center items-center gap-1 rounded-lg cursor-pointer transition-all hover:bg-text hover:bg-opacity-5 active:bg-text active:bg-opacity-20"
    :class="$style.host"
    @click="onClick"
  >
    <img
      class="w-full max-w-[60px] rounded-full"
      src="data:image/png;base64,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"
    >
    <div class="px-3 text-center w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {{ title }}
    </div>
    <div
      v-contextmenu:contextmenu="{ trigger: 'click' }"
      :class="$style.option"
      class="mobile:hidden absolute right-0 top-0 p-1 opacity-0 transition-all hover:rotate-90"
      @click.stop
    >
      <Icon
        icon="mi:options-vertical"
        width="22"
      />
    </div>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="$emit('update')">
        수정
      </v-contextmenu-item>
      <v-contextmenu-item @click="$emit('delete')">
        삭제
      </v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<style module>
.host:hover .option {
  @apply opacity-100
}
</style>
