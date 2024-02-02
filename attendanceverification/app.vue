<script setup>
  onBeforeMount(() => {
    document.title = "No Proxies";
  });
    const themeStore = useThemeStore();
</script>

<template>
  <div :class="themeStore.isDarkTheme ? 'dark':''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
