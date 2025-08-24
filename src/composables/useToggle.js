import { ref } from "vue";

export function useToggle(initial = false) {
  const state = ref(initial);
  const toggle = () => (state.value = !state.value);
  return { state, toggle };
}
