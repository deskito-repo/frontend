<script lang="ts" setup>
import { useFocus } from '@vueuse/core';
import { onMounted, ref, InputHTMLAttributes } from 'vue';

const model = defineModel();
// const props = defineProps<{
//     label?: string;
//     placeholder?: string;
//     type?: InputHTMLAttributes['type']
// }>();
const inputRef = ref<HTMLInputElement>();
const props = defineProps<{
    label?: string;
    focusOnInit?: boolean;
    attrs?: InputHTMLAttributes;
}>();
const { focused } = useFocus(inputRef);
onMounted(() => {
  if (props.focusOnInit) {
    inputRef.value?.focus();
  }
});
</script>
<template>
  <div>
    <label
      v-if="label"
      :class="focused ? ['text-opacity-100'] : ['text-opacity-50']"
      class="block text-sm font-medium text-primary transition-all"
    >{{ label }}</label>
    <input
      ref="inputRef"
      v-model="model"
      v-bind="props.attrs"
      :class="focused ? ['border-opacity-30'] : ['border-opacity-10']"
      class="transition-all bg-primary bg-opacity-10 border border-primary text-primary placeholder:text-primary placeholder:text-opacity-40 text-sm rounded-lg ring-primary block w-full p-2.5"
      required
    >
  </div>
</template>
<style lang="scss" scoped>
</style>
