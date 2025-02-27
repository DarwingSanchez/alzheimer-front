export interface FormData {
  name: string;
  age: string | undefined;
  gender: string;
  educationLevel: number | '';
  bmi: string | undefined;
  physicalActivity: string;
  smokingStatus: string;
  alcoholConsumption: string;
  cholesterol: string;
  familyHistory: string;
  diabetes: string;
  hypertension: string;
  sleepQuality: string;
  depression: string;
  dietaryHabits: string;
  airPollution: string;
  cognitiveScore: string | undefined;
  employmentStatus: string;
  maritalStatus: string;
  geneticRisk: string;
  socialEngagement: string;
  incomeLevel: string;
  stressLevels: string;
  livingArea: string;
}

export interface FormDTO extends Omit<FormData, 'age' |  'educationLevel' | 'bmi' | 'cognitiveScore'> {
  age: number;
  educationLevel: number;
  bmi: number;
  cognitiveScore: number;
}