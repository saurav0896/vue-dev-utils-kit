import { ref, watchEffect, onMounted } from "vue";

export function useDarkMode(key = "dark-mode") {
  const isDark = ref(false);

  // Load from system preference or localStorage
  onMounted(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      isDark.value = stored === "true";
    } else {
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  // Watch and apply
  watchEffect(() => {
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem(key, isDark.value);
  });

  const toggle = () => (isDark.value = !isDark.value);

  return { isDark, toggle };
}
