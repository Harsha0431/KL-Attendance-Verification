<script setup>
  definePageMeta({
    layout: "login",
  });

  const username = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const registerInProgress = ref(false);
  const registerSuccessful = ref(false);

  const handleRegisterSubmit = (e) => {
    console.log(e);
    registerInProgress.value = true;
    setTimeout(() => {
      registerSuccessful.value = true;
      registerInProgress.value = false;
    }, 2000);
  };
</script>

<template>
  <form @submit.prevent="(e) => handleRegisterSubmit(e)">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Create an account
          </p>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">
              Your username
            </label>
            <input
              placeholder="Username"
              class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
              id="username"
              type="text"
              v-model="username"
              required
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="••••••••"
              id="password"
              type="password"
              v-model="password"
              required
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">
              Confirm password
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="••••••••"
              id="confirmPassword"
              type="password"
              v-model="confirmPassword"
              required
            />
          </div>
          <div class="flex items-start align-middle">
            <div class="flex items-center h-6">
              <input
                class="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                type="checkbox"
                aria-describedby="terms"
                id="terms"
              />
            </div>
            <div class="ml-2 text-sm">
              <label class="font-light text-red-600">
                I accept the
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline text-primary-500"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            class="w-full bg-kl tracking-wide hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-red-800 text-white disabled:cursor-not-allowed disabled:bg-red-800"
            type="submit"
            :disabled="registerInProgress"
          >
            <span class="focus:ring-1 focus:ring-primary-300">
              {{
                registerInProgress
                  ? "Registering..."
                  : registerSuccessful
                  ? "Registered Successfully"
                  : "Create an Account"
              }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  input[type="checkbox"] {
    accent-color: #a90000;
  }
</style>
