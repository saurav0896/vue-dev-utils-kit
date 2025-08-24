import { ref } from "vue";

export function useCounter(initial = 0) {
  const count = ref(initial);

  const inc = (step = 1) => (count.value += step);
  const dec = (step = 1) => (count.value -= step);
  const reset = () => (count.value = initial);

  return { count, inc, dec, reset };
}
