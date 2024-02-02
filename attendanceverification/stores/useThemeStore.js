export const useThemeStore = defineStore("theme-store", () => {
  const isDarkTheme = ref(false);

  const themeStyle = ref('light')
  const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      themeStyle.value = isDarkTheme.value ? "dark" : "light";
    console.log(themeStyle.value, isDarkTheme.value);
  };

  return {
    themeStyle,
    isDarkTheme,
    toggleTheme,
  };
});
