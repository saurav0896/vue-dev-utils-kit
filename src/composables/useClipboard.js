import { ref } from "vue";

export function useClipboard() {
  const copied = ref(false);

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 1500);
    } catch (e) {
      copied.value = false;
      console.error("Clipboard error:", e);
    }
  }

  return { copied, copy };
}
