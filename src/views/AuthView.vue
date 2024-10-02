<template>
  <div class="auth-container">
    <h1>Bienvenido</h1>
    <div class="auth-forms">
      <div class="form-container">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <input type="text" placeholder="Correo electrónico" v-model="loginEmail" />
          <input type="password" placeholder="Contraseña" v-model="loginPassword" />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <div class="form-container">
        <h2>Registrarse</h2>
        <form @submit.prevent="handleRegister">
          <input type="text" placeholder="Nombre" v-model="registerName" />
          <input type="email" placeholder="Correo electrónico" v-model="registerEmail" />
          <input type="password" placeholder="Contraseña" v-model="registerPassword" />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script src="./AuthView.js"></script>
<style src="./AuthView.css" scoped></style>
