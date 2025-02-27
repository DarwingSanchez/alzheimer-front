<script setup lang="ts">
import type { FormResponse } from '@/core/interface/response';
import { defineProps, defineEmits } from 'vue';


defineProps<{ response: FormResponse | undefined }>();
const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="response" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-container">
      <h2>Resultado del Análisis</h2>
      <p><strong>Nombre:</strong> {{ response.data.name }}</p><br>
      <p><strong>Probabilidad:</strong> {{ response.data.probability }}</p><br>
      <p><strong>Recomendaciones</strong><br> <span v-html="response.data.recommendations.replace(/\n/g, '<br>')"></span></p>
      <button class="close-button" @click="emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
strong {
  font-weight: bold;
}
h2 {
  font-weight: bold;
  font-size: 20px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  display: flex;
  background: white;    
  border-radius: 10px;
  max-width: 90%;
  flex-direction: column;    
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 30px;
  max-height: 90%;
  max-width: 400px;
  margin: 20px;
  overflow: scroll;
}

h2 {
  margin-bottom: 10px;
}

.close-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>