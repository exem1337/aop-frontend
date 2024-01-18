<template>
  <div class="admin-page page-wrapper">
    <BaseWrapper>
      <template #title>
        Панель администратора
      </template>
      
      <template #content>
        <div class="admin-cards">
          <BigCard 
            title="Дисциплины" 
            icon-name="article"
            :handler="redirectService.toDisciplines" 
          />

          <BigCard 
            title="Дисциплины" 
            icon-name="article" 
          />
        </div>
      </template>
    </BaseWrapper>
  </div>
</template>

<script lang="ts" setup>
import BaseWrapper from 'src/components/BaseWrapper.vue';
import BigCard from 'src/components/BigCard.vue';
import { RedirectService } from '../services/redirect.service';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import api from '../services/api.service'

const router = useRouter();
const redirectService = new RedirectService(router);

onMounted(async () => {
  const res = await api.get('/predict/model_info/', { showError: true })
});
</script>

<style lang="scss" scoped>
.admin-page {
  .admin-cards {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    
    > * { 
      max-width: 20%;
    }
  }
}
</style>