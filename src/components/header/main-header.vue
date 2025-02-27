<script setup lang="ts">
import { goTo } from "@/core/util/util-functions";
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1 @click="goTo('/')">NeuroCheck <span>AI</span></h1>
      </div>

      <nav :class="{ 'nav-open': menuOpen }">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/diagnosticar">Diagnosticar</a></li>
        </ul>
      </nav>

      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        ☰
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #0077B6;
  padding: 15px 20px;
  color: white;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
}

.logo h1 {
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.logo span {
  font-weight: 300;
  color: #CAF0F8;
}

nav {
  display: flex;
}

nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #CAF0F8;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .nav-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #0077B6;
    top: 60px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
  }

  .nav-open ul {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
