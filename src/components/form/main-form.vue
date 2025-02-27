<script setup lang="ts">
import { ref } from 'vue';
import type { FormData } from '@/core/interface/form';
import { diagnostic } from '@/core/services/diagnostic/diagnostic';
import Modal from '../modal/modal.vue';
import type { FormResponse } from '@/core/interface/response';
import Loading from '../loading/loading.vue';

const formKitRef = ref();
const formData = ref<FormData>({
  name: '',
  age: undefined,
  gender: '',
  educationLevel: '',
  bmi: undefined,
  physicalActivity: '',
  depression: '',
  smokingStatus: '',
  alcoholConsumption: '',
  cholesterol: '',
  familyHistory: '',
  diabetes: '',
  hypertension: '',
  sleepQuality: '',
  dietaryHabits: '',
  airPollution: '',
  cognitiveScore: undefined,
  employmentStatus: '',
  maritalStatus: '',
  geneticRisk: '',
  socialEngagement: '',
  incomeLevel: '',
  stressLevels: '',
  livingArea: ''
});

const options = {
  gender: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Male', label: 'Masculino' }, { value: 'Female', label: 'Femenino' }],
  educationLevel: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 0, label: 'Sin educación formal' }, { value: 3, label: 'Primaria incompleta' }, { value: 6, label: 'Primaria completa' }, { value: 10, label: 'Secundaria' }, { value: 13, label: 'Universitaria' }, { value: 17, label: 'Posgrado' }],
  physicalActivity: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Baja' }, { value: 'Medium', label: 'Media' }, { value: 'High', label: 'Alta' }],
  smokingStatus: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Never', label: 'Nunca' }, { value: 'Former', label: 'Exfumador' }, { value: 'Current', label: 'Actual' }],
  alcoholConsumption: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Never', label: 'Nunca' }, { value: 'Occasionally', label: 'Ocasionalmente' }, { value: 'Regularly', label: 'Regularmente' }],
  yesNo: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Yes', label: 'Sí' }, { value: 'No', label: 'No' }],
  sleepQuality: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Poor', label: 'Pobre' }, { value: 'Average', label: 'Promedio' }, { value: 'Good', label: 'Buena' }],
  dietaryHabits: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Unhealthy', label: 'No saludable' }, { value: 'Average', label: 'Promedio' }, { value: 'Healthy', label: 'Saludable' }],
  airPollution: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Baja' }, { value: 'Medium', label: 'Media' }, { value: 'High', label: 'Alta' }],
  employmentStatus: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Unemployed', label: 'Desempleado' }, { value: 'Employed', label: 'Empleado' }, { value: 'Retired', label: 'Jubilado' }],
  maritalStatus: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Single', label: 'Soltero' }, { value: 'Married', label: 'Casado' }, { value: 'Widowed', label: 'Viudo' }],
  socialEngagement: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Baja' }, { value: 'Medium', label: 'Media' }, { value: 'High', label: 'Alta' }],
  incomeLevel: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Bajo' }, { value: 'Medium', label: 'Medio' }, { value: 'High', label: 'Alto' }],
  stressLevels: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Bajo' }, { value: 'Medium', label: 'Medio' }, { value: 'High', label: 'Alto' }],
  livingArea: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Urban', label: 'Urbano' }, { value: 'Rural', label: 'Rural' }],
  depressionLevel: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Low', label: 'Baja' }, { value: 'Medium', label: 'Medio' }, { value: 'High', label: 'Alta' }],
  cholesterol: [{ value: '', label: 'Seleccionar...', class: 'placeholder-option' }, { value: 'Normal', label: 'Normal' }, { value: 'High', label: 'Alto' }],
};

const results = ref<FormResponse | undefined>(undefined);
const resultsModal = ref<boolean>(false);
const loading = ref<boolean>(false);

const submitForm = async () => {
  try {
    loading.value = true;
    const data = {
      ...formData.value,
      age: Number(formData.value.age),
      educationLevel: Number(formData.value.educationLevel),
      bmi: Number(formData.value.bmi),
      cognitiveScore: Number(formData.value.cognitiveScore) * 3,
    };
    results.value = await diagnostic(data);
    loading.value = false;
    resultsModal.value = true;
    (Object.keys(formData.value) as (keyof FormData)[]).forEach(key => {
      if (typeof formData.value[key] === 'number') {
        formData.value[key] = '';
      } else {
        formData.value[key] = '';
      }
    });
  } catch (error) {
    console.error('Error submitting form', error);
    alert('Error obteniendo resultados, por favor intenta de nuevo');
  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <div class="f-container">
    <FormKit v-if="!loading" :ref="formKitRef" type="form" @submit="submitForm" class="form-content">
      <div class="sub-container">
        <FormKit type="text" label="Nombre" placeholder="Escribe tu nombre" v-model="formData.name" required />
        <FormKit type="number" label="Edad" validation="between:50,94" placeholder="Escribe tu edad"
          v-model="formData.age" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Genero" v-model="formData.gender" :options="options.gender" required />
        <FormKit type="select" label="Nivel Educativo" v-model="formData.educationLevel"
          :options="options.educationLevel" required />
      </div>
      <div class="sub-container">
        <FormKit type="number" validation="between:18,25" label="IMC" placeholder="Indice de masa corporal"
          v-model="formData.bmi" required />
        <FormKit type="select" label="Nivel Actividad Física" v-model="formData.physicalActivity"
          :options="options.physicalActivity" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Estado Fumador" v-model="formData.smokingStatus" :options="options.smokingStatus"
          required />
        <FormKit type="select" label="Consumo Alcohol" v-model="formData.alcoholConsumption"
          :options="options.alcoholConsumption" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Diabetes" v-model="formData.diabetes" :options="options.yesNo" required />
        <FormKit type="select" label="Hipertensión" v-model="formData.hypertension" :options="options.yesNo" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Calidad Sueño" v-model="formData.sleepQuality" :options="options.sleepQuality"
          required />
        <FormKit type="select" label="Hábitos Alimentarios" v-model="formData.dietaryHabits"
          :options="options.dietaryHabits" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Exposición Polución Aire" v-model="formData.airPollution"
          :options="options.airPollution" required />
        <FormKit type="select" label="Estado Empleo" v-model="formData.employmentStatus"
          :options="options.employmentStatus" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Estado Civil" v-model="formData.maritalStatus" :options="options.maritalStatus"
          required />
        <FormKit type="select" label="Factor Riesgo Genético (alelo APOE-ε4)" v-model="formData.geneticRisk"
          :options="options.yesNo" required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Nivel Compromiso Social" v-model="formData.socialEngagement"
          :options="options.socialEngagement" required />
        <FormKit type="select" label="Nivel Ingreso" v-model="formData.incomeLevel" :options="options.incomeLevel"
          required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Nivel Estrés" v-model="formData.stressLevels" :options="options.stressLevels"
          required />
        <FormKit type="select" label="Rural o Urbana" v-model="formData.livingArea" :options="options.livingArea"
          required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Depresión" v-model="formData.depression" :options="options.depressionLevel"
          required />
        <FormKit type="select" label="Colesterol" v-model="formData.cholesterol" :options="options.cholesterol"
          required />
      </div>
      <div class="sub-container">
        <FormKit type="select" label="Historia Familiar" v-model="formData.familyHistory" :options="options.yesNo"
          required />
        <FormKit type="number" label="Puntaje Cognitivo" validation="between:0,100"
          placeholder="Escribe tu puntaje cognitivo" v-model="formData.cognitiveScore" required />
      </div>      
    </FormKit>
    <Loading v-else></Loading>
  </div>
  <Modal v-if="resultsModal" :response="results" @close="resultsModal = false"></Modal>
</template>

<style scoped>
.f-container {
  display: flex;
  margin-top: 30px;
  width: 100%;

  .formkit-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    .sub-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      width: 100%;

      .formkit-outer {
        flex-grow: 1;
        margin-bottom: 20px;
      }
    }

    @media screen and (max-width: 768px) {
      .sub-container {
        grid-template-columns: 1fr;
        gap: 0;
      }

      ::v-deep(.formkit-outer .formkit-wrapper) {
        max-width: 100% !important;
      }
    }
  }
}

:deep(.formkit-outer) {
  margin-bottom: 1.5rem;
}

:deep(.formkit-label) {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

:deep(.formkit-input) {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

:deep(.formkit-input:focus) {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  background-color: #fff;
}

:deep(.formkit-input::placeholder) {
  color: #aaa;
}

:deep(.formkit-help) {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #666;
}

:deep(.formkit-message) {
  color: #e53935;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

:deep(.formkit-select) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;
}

:deep(.formkit-option.placeholder-option) {
  color: #aaa;
}

:deep(input[type="number"]) {
  -moz-appearance: textfield;
}

:deep(input[type="number"]::-webkit-inner-spin-button),
:deep(input[type="number"]::-webkit-outer-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

:deep(.formkit-actions) {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

:deep(.formkit-submit) {
  background-color: #4a90e2;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.formkit-submit:hover) {
  background-color: #3a7bc8;
}

:deep(.formkit-submit:focus) {
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
}

:deep(.formkit-input:disabled) {
  background-color: #f1f1f1;
  color: #999;
  cursor: not-allowed;
}

:deep(.formkit-input) {
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.formkit-wrapper) {
  width: 100%;
  max-width: 100%;
}

:deep(.formkit-outer) {
  width: 100%;
}

:deep(.formkit-input[data-invalid]) {
  border-color: #e53935;
  background-color: #fff;
}

:deep(.formkit-input[data-invalid]:focus) {
  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.1);
}
</style>