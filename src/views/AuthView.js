export default {
    name: 'AuthView',
    data() {
      return {
        loginEmail: '',
        loginPassword: '',
        registerName: '',
        registerEmail: '',
        registerPassword: '',
      };
    },
    methods: {
      handleLogin() {
        // Lógica para iniciar sesión
        console.log('Iniciar sesión con:', this.loginEmail, this.loginPassword);
      },
      handleRegister() {
        // Lógica para registrarse
        console.log('Registrarse con:', this.registerName, this.registerEmail, this.registerPassword);
      },
    },
  };
  