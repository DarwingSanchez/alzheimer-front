<script setup lang="ts">
import { ref } from 'vue';
import type { FormData } from '@/core/interface/form';
import { diagnostic } from '@/core/services/diagnostic/diagnostic';
import Modal from '../modal/modal.vue';
import type { FormResponse } from '@/core/interface/response';

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

const submitForm = async () => {
  try {
    const data = {
      ...formData.value,
      age: Number(formData.value.age),
      educationLevel: Number(formData.value.educationLevel),
      bmi: Number(formData.value.bmi),
      cognitiveScore: Number(formData.value.cognitiveScore) * 3,
    };    
    results.value = await diagnostic(data);    
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
  }
};

</script>

<template>
  <div class="f-container">
    <FormKit :ref="formKitRef" type="form" @submit="submitForm" class="form-content">
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

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>