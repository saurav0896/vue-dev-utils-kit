import { ref, watch } from "vue";

export function useLocalStorage(key, defaultValue = "") {
  const stored = ref(localStorage.getItem(key) || defaultValue);

  watch(stored, (val) => {
    localStorage.setItem(key, val);
  });

  return stored;
}
