<script lang="ts" setup>
import Button from 'src/components/common/Button.vue';
import Input from 'src/components/common/Input.vue';
import { useDialog } from 'src/composables/useDialog';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  nickname: '',
  password: '',
  // passwordConfirm: '',

  // optional
  // name: '',
  // phoneNumber: '',
});
const dialog = useDialog();
const submit = () => {
  dialog.alert(JSON.stringify(form));
};
</script>
<template>
  <form
    class="max-w-full w-[370px] flex flex-col gap-2"
    @submit.prevent="submit"
  >
    <template
      v-for="_, key in form"
      :key="key"
    >
      <Input
        v-model="form[key]"
        :label="$t('general.' + (form[key as keyof typeof form] || key))"
        :focusOnInit="key === 'email'"
        :attrs="{
          placeholder: $t('general.' + (form[key as keyof typeof form] || key)),
          type: ['password', 'email'].includes(key) ? key : 'text'
        }"
      />
    </template>
    <div class="mt-6">
      <Button>{{ $t('general.signup') }}</Button>
    </div>
  </form>
</template>
<style lang="scss" scoped>
</style>
