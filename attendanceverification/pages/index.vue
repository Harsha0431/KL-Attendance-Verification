<script setup>
  const themeStore = useThemeStore();
</script>

<template>
  <div class="dark:bg-black min-h-[100vh]">
    <button
      @click="themeStore.toggleTheme()"
      class="dark:text-white text-gary-900"
    >
      Toggle Theme
    </button>
  </div>
</template>
