<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core';
import Button from 'src/components/common/Button.vue';
import Input from 'src/components/common/Input.vue';
import Modal from 'src/components/common/Modal.vue';
import { useDialog } from 'src/composables/useDialog';
import { useBookmarkStore } from 'src/stores/useBookmarkStore';
import { Bookmark, bookmarkType } from 'src/types/Bookmark';
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const bookmarkStore = useBookmarkStore();
export interface Props {
  id: number;
}
defineProps<Props>();
const emit = defineEmits<{
  close: [],
}>();
const defaultForm = {
  link: '',
  title: '',
  type: bookmarkType.FILE,
};
const form = reactive<Bookmark>({
  ...defaultForm,
  atUpdated: new Date(),
});
const { t } = useI18n();
const dialog = useDialog();
const submit = useThrottleFn(async () => {
  if (form.title === '') {
    const msg = t('sentence.not_exist');
    await dialog.alert(msg);
    return;
  }
  bookmarkStore.insertOne({
    ...form,
    atUpdated: new Date(),
  });
  Object.assign(form, defaultForm);
  emit('close');
}, 1000);
</script>
<template>
  <Modal>
    <form
      class="flex flex-col gap-3"
      @submit.prevent="submit"
    >
      <Input
        v-model="form.title"
        :label="$t('general.name')"
        focusOnInit
      />
      <Input
        v-model="form.link"
        :label="$t('general.address')"
      />
      <Button @click.prevent="submit">
        등록하기
      </Button>
    </form>
  </Modal>
</template>
<style lang="scss" scoped>
</style>
