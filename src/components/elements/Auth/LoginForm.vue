<script lang="ts" setup>
import Button from 'src/components/common/Button.vue';
import CheckBox from 'src/components/common/CheckBox.vue';
import Input from 'src/components/common/Input.vue';
import { useDialog } from 'src/composables/useDialog';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  password: '',
});
const dialog = useDialog();
const submit = () => {
  dialog.alert(JSON.stringify(form));
};
</script>
<template>
  <form
    class="max-w-md flex flex-col gap-3"
    @submit.prevent="submit"
  >
    <Input
      v-model="form.email"
      label="email"
      :attrs="{
        placeholder: 'email',
        type: 'email'
      }"
      focusOnInit
    />
    <Input
      v-model="form.password"
      label="password"
      :attrs="{
        placeholder: 'password',
        type: 'password'
      }"
    />
    <div class="flex justify-between items-center gap-3">
      <CheckBox>Remember Me</CheckBox>
      <a class="text-primary text-opacity-70 hover:text-opacity-100 transition-all">
        Forgot password?
      </a>
    </div>
    <Button
      :attrs="{
        type: 'primary',
        attrType: 'submit',
      }"
    >
      Login
    </Button>
    <div>
      Don't have an account yet?
      <a class="text-[1.05rem] text-primary text-opacity-70 hover:text-opacity-100 transition-all">Sign up</a>
    </div>
  </form>
</template>
<style lang="scss" scoped>
</style>
