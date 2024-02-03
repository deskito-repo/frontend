<script lang="ts" setup>
import Button from 'src/components/common/Button.vue';
import Input from 'src/components/common/Input.vue';
import type { Props } from './BookmarkRow.vue';

export type {
  Props,
};

const model = defineModel<Props>({ required: true });
defineEmits<{
  submit: []
}>();

const detail = {
  src: {
    label: 'src',
    placeholder: 'src',
  },
  title: {
    label: 'src',
    placeholder: 'title',
  },
} satisfies Record<keyof Props, {
  label: string;
  placeholder: string;
}>;
</script>
<template>
  <form
    class="flex flex-col gap-2"
    @submit.prevent="$emit('submit')"
  >
    <Input
      v-for="attrs, key of detail"
      :key="key"
      v-bind="{ attrs, ...attrs }"
      v-model="model[key]"
    />
    <Button type="submit">
      저장하기
    </Button>
  </form>
</template>
<style lang="scss" scoped>
</style>
