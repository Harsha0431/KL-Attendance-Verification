<script setup>
  definePageMeta({
    layout: "login",
  });

  const username = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const loginInProgress = ref(false);
  const loginSuccessful = ref(false);

  const handleLoginSubmit = (e) => {
    console.log(e);
    loginInProgress.value = true;
    setTimeout(() => {
      loginSuccessful.value = true;
      loginInProgress.value = false;
    }, 2000);
  };
</script>

<template>
  <form @submit.prevent="(e) => handleLoginSubmit(e)">
    
  </form>
</template>

<style scoped>
  input[type="checkbox"] {
    accent-color: #a90000;
  }
</style>
