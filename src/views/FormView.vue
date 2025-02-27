<script setup lang="ts">
import MainForm from '@/components/form/main-form.vue';
</script>

<template>
  <main class="diagnostic">
    <section class="hero">
      <div class="content">
        <h1>Inicia tu <span>Diagnóstico</span></h1>
        <p>
          Completa el formulario para que nuestro modelo de inteligencia artificial pueda analizar
          tu salud cognitiva y detectar signos tempranos de Alzheimer.
        </p>
      </div>
      <div class="image">
        <img src="/images/fondo-diagnostico.png" alt="Ilustración de diagnóstico" />
      </div>
    </section>

    <section class="form-section">
      <div class="form-container">
        <h2>Completa la información</h2>
        <MainForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
.diagnostic {
  font-family: "Poppins", sans-serif;
}

/* Hero Section */
.hero {
  display: flex;  
  align-items: center;
  padding: 60px 10%;
  background: #eaf6ff;
  div {
    max-width: 50%;
  }
}

.hero .content {
  max-width: 50%;
}

.hero h1 {
  font-size: 2.5rem;
  color: #0077b6;
}

.hero span {
  color: #023e8a;
}

.hero p {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #555;
}

.hero .image {
  display: flex;
  width: 100%;
  justify-content: center;
}

.hero .image img {
  max-width: 300px;
}

/* Form Section */
.form-section {
  padding: 60px 10%;
  background: white;
  text-align: center;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  font-size: 2rem;
  color: #0077b6;
  margin-bottom: 20px;
}

/* How It Works Section */
.how-it-works {
  text-align: center;
  padding: 60px 10%;
  background: #eaf6ff;
}

.how-it-works h2 {
  font-size: 2rem;
  color: #0077b6;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.step {
  width: 30%;
  background: #caf0f8;
  padding: 20px;
  border-radius: 10px;
}

.step h3 {
  font-size: 1.5rem;
  color: #023e8a;
}

.step p {
  font-size: 1rem;
  color: #555;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero .content {
    max-width: 100%;
  }

  .hero .image img {
    max-width: 80%;
  }

  .steps {
    flex-direction: column;
    align-items: center;
  }

  .step {
    width: 90%;
    margin-bottom: 20px;
  }

  .form-container {
    width: 90%;
  }
}
</style>
