<template>
  <div class="app-auth fade-in">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Вход в систему</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input  
          v-model="email"
          type="email"
          label="Электронная почта"
        />
        <q-input 
          v-model="password"
          type="password"
          label="Пароль"
        />
        <q-btn 
          :loading="isLoading.getIsActive"
          @click="onLogin"
        >
          Войти
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AuthService } from '../services/auth.service';
import { Loader } from '../services/loader.service';
import { useRouter } from 'vue-router';

const email = ref();
const password = ref();
const isLoading = new Loader();
const router = useRouter();

async function onLogin() {
  AuthService.initialize(router);
  await AuthService.auth(email.value, password.value, isLoading);
}
</script>

<style lang="scss" scoped>
.app-auth {
  padding: 32px;
  width: fit-content; 

  .q-btn {
    width: 100%;
    margin-top: 16px;
  }
}
</style>