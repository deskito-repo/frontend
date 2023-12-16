<script lang="ts" setup>
import Button from 'src/components/common/Button.vue';
import CheckBox from 'src/components/common/CheckBox.vue';
import Input from 'src/components/common/Input.vue';
import { useDialog } from 'src/composables/useDialog';
import { reactive } from 'vue';

const $emit = defineEmits<{
  forgotPassword: [],
  wantTosignUp: [],
}>();
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
    class="text-primary max-w-full w-[370px] flex flex-col gap-3"
    @submit.prevent="submit"
  >
    <Input
      v-model="form.email"
      :label="$t('general.email')"
      :attrs="{
        placeholder: $t('general.email'),
        type: 'email'
      }"
      focusOnInit
    />
    <Input
      v-model="form.password"
      :label="$t('general.password')"
      :attrs="{
        placeholder: $t('general.password'),
        type: 'password'
      }"
    />
    <div class="flex justify-between items-center gap-3">
      <CheckBox>{{ $t('signin.remember') }}</CheckBox>
      <a
        class="text-opacity-70 hover:text-opacity-100 transition-all"
        @click="$emit('forgotPassword')"
      >
        {{ $t('signin.forgot') }}
      </a>
    </div>
    <Button
      :attrs="{ attrType: 'submit' }"
    >
      {{ $t('general.signin') }}
    </Button>
    <div>
      {{ $t('signin.not_exist?') }}
      <a
        class="mx-2 text-[1.05rem] text-primary text-opacity-70 hover:text-opacity-100 transition-all"
        @click="$emit('wantTosignUp')"
      >{{ $t('general.signup') }}</a>
    </div>
  </form>
</template>
<style lang="scss" scoped>
</style>
