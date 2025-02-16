<script setup lang="ts">
</script>

<template>
  <main>
    <section class="hero">
      <div class="content">
        <h1>Descubre NeuroCheck <span>AI</span></h1>
        <p>
          Un modelo de inteligencia artificial diseñado para detectar signos
          tempranos de Alzheimer y proporcionar información útil sobre tu salud
          cognitiva.
        </p>
        <button>Comenzar Diagnóstico</button>
      </div>
      <div class="image">
        <img src="" alt="Ilustración de IA analizando el cerebro" />
      </div>
    </section>

    <section class="how-it-works">
      <h2>¿Cómo Funciona?</h2>
      <div class="steps">
        <div class="step">
          <h3>1. Sube tu Información</h3>
          <p>
            Proporciona datos como imágenes médicas y respuestas a cuestionarios
            cognitivos.
          </p>
        </div>
        <div class="step">
          <h3>2. Análisis con IA</h3>
          <p>
            Nuestra IA procesa los datos con modelos avanzados para detectar
            posibles signos tempranos de Alzheimer.
          </p>
        </div>
        <div class="step">
          <h3>3. Obtén tu Resultado</h3>
          <p>
            Recibe un informe con una estimación de riesgo y recomendaciones para
            el cuidado de tu salud cognitiva.
          </p>
        </div>
      </div>
    </section>

    <section class="prevention">
      <h2>Prevención y Cuidado</h2>
      <p>
        Aunque el Alzheimer no tiene cura, estudios han demostrado que ciertos hábitos pueden
        reducir el riesgo. Aquí te dejamos algunos consejos:
      </p>
      <ul>
        <li>🧠 Mantén tu mente activa con ejercicios cognitivos.</li>
        <li>🥦 Lleva una dieta saludable, rica en antioxidantes.</li>
        <li>🚶‍♂️ Realiza actividad física regularmente.</li>
        <li>🛌 Duerme lo suficiente para mejorar la memoria.</li>
        <li>🫂 Mantén relaciones sociales activas.</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

main {
  font-family: "Poppins", sans-serif;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 10%;
  background: #eaf6ff;
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

.hero button {
  margin-top: 20px;
  padding: 12px 20px;
  background: #0077b6;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.hero button:hover {
  background: #023e8a;
}

.hero .image img {
  max-width: 400px;
}

/* How It Works */
.how-it-works {
  text-align: center;
  padding: 60px 10%;
  background: white;
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

/* Prevention Section */
.prevention {
  padding: 60px 10%;
  background: #eaf6ff;
}

.prevention h2 {
  font-size: 2rem;
  color: #0077b6;
  text-align: center;
}

.prevention p {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
  color: #555;
}

.prevention ul {
  margin-top: 20px;
  list-style: none;
  text-align: center;
}

.prevention li {
  font-size: 1.1rem;
  margin: 10px 0;
  color: #023e8a;
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
}
</style>
