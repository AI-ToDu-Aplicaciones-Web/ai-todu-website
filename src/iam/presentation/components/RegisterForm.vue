<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { iamStore } from '../../application/iam_store.js';

const router = useRouter();
const username = ref('');
const password = ref('');
const name = ref('');
const surname = ref('');
const phone = ref('');

const handleRegister = async () => {
  if (!username.value || !password.value || !name.value) {
    alert("Por favor, completa los campos requeridos.");
    return;
  }

  const newUser = {
    username: username.value,
    password: password.value,
    name: name.value,
    surname: surname.value,
    phone: phone.value
  };

  try {
    const result = await iamStore.registerUser(newUser);
    if (result) {
      alert("Usted se ha registrado de manera exitosa");
      router.push('/login');
    } else {
      alert("Error al registrar el usuario en el servidor.");
    }
  } catch (e) {
    console.error("Error al registrar:", e);
    alert("Error de conexión con json-server (asegúrate de ejecutar npm run json-server).");
  }
};
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center min-h-screen bg-gray-900 px-3 text-white">
    <div class="surface-card p-5 shadow-4 border-round-xl w-full md:w-6 lg:w-4 text-gray-800 bg-white">
      <h2 class="text-center text-3xl font-bold mb-4 text-primary">Crear cuenta en Al ToDu</h2>

      <div class="flex flex-column gap-3">
        <div>
          <label class="block font-medium mb-1">Nombres</label>
          <input type="text" v-model="name" class="w-full p-inputtext p-component border-1 border-gray-300 border-round p-2" placeholder="Ej. Carlos" />
        </div>

        <div>
          <label class="block font-medium mb-1">Apellidos</label>
          <input type="text" v-model="surname" class="w-full p-inputtext p-component border-1 border-gray-300 border-round p-2" placeholder="Ej. Bernal" />
        </div>

        <div>
          <label class="block font-medium mb-1">Teléfono</label>
          <input type="text" v-model="phone" class="w-full p-inputtext p-component border-1 border-gray-300 border-round p-2" placeholder="Ej. 999999999" />
        </div>

        <div>
          <label class="block font-medium mb-1">Correo electrónico</label>
          <input type="email" v-model="username" class="w-full p-inputtext p-component border-1 border-gray-300 border-round p-2" placeholder="correo@upc.edu.pe" />
        </div>

        <div>
          <label class="block font-medium mb-1">Contraseña</label>
          <input type="password" v-model="password" class="w-full p-inputtext p-component border-1 border-gray-300 border-round p-2" placeholder="********" />
        </div>

        <button @click="handleRegister" class="p-button p-component p-button-primary w-full font-bold justify-content-center mt-3 py-3 border-round">
          Registrarse
        </button>
      </div>
    </div>
  </div>
</template>