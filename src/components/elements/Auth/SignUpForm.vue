<script lang="ts" setup>
import Button from 'src/components/common/Button.vue';
import Input from 'src/components/common/Input.vue';
import { useDialog } from 'src/composables/useDialog';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',

  // optional
  name: '',
  phoneNumber: '',
});
const dialog = useDialog();
const submit = () => {
  dialog.alert(JSON.stringify(form));
};
</script>
<template>
  <form
    class="max-w-full w-[370px] flex flex-col gap-3"
    @submit.prevent="submit"
  >
    <template
      v-for="_, key in form"
      :key="key"
    >
      <Input
        v-model="form[key]"
        :label="key"
        :focusOnInit="key === 'email'"
        :attrs="{
          placeholder: key,
          type: ['password', 'email'].includes(key) ? key : 'text'
        }"
      />
    </template>
    <Button>Sign Up</Button>
  </form>
</template>
<style lang="scss" scoped>
</style>
