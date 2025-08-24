import { ref } from "vue";

export function useFetch(url, options = {}) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const execute = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(res.statusText);
      data.value = await res.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  // auto-run
  execute();

  return { data, error, loading, execute };
}
