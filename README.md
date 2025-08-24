# vue-dev-utils-kit

![npm](https://img.shields.io/npm/v/vue-dev-utils-kit)
![license](https://img.shields.io/github/license/saurav0896/vue-dev-utils-kit)

A collection of **lightweight, reusable Vue 3 composables & utilities** to make your development faster, cleaner, and more productive.  
Think of it as a **developer-friendly utility kit** for Vue.js 🚀

## ✨ Features

- 📦 Ready-to-use Vue 3 composables
- 🪶 Lightweight and tree-shakable
- 🎯 Focused on practical, everyday utilities
- ⚡ No extra dependencies (only Vue 3)

## 📦 Installation

```bash
npm install vue-dev-utils-kit
# or
yarn add vue-dev-utils-kit
# or
pnpm add vue-dev-utils-kit
```

## 🚀 Usage

Import only what you need:

```vue
<script setup>
import { useClipboard, useDebounce, useLocalStorage } from "vue-dev-utils-kit";

const { copy, copied } = useClipboard();
const search = useDebounce(ref(""), 500);
const username = useLocalStorage("username", "Guest");
</script>

<template>
  <div>
    <!-- useClipboard -->
    <button @click="copy('Hello World!')">Copy</button>
    <p v-if="copied">Copied to clipboard ✅</p>

    <!-- useDebounce -->
    <input v-model="search" placeholder="Type something..." />
    <p>Debounced value: {{ search }}</p>

    <!-- useLocalStorage -->
    <input v-model="username" />
    <p>Stored in localStorage: {{ username }}</p>
  </div>
</template>
```

## 📚 Available Composables
| Composable                                | Description                                       | Example                                                                                               |
| ----------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [**`useLocalStorage`**](#uselocalstorage) | Reactive `localStorage` binding with persistence. | `import { useLocalStorage } from "vue-dev-utils-kit"; const name = useLocalStorage("name", "Saurav")` |
| [**`useDebounce`**](#usedebounce)         | Debounces a `ref` value.                          | `import { useDebounce } from "vue-dev-utils-kit"; const d = useDebounce(search, 500)`                 |
| [**`useClipboard`**](#useclipboard)       | Copy text to clipboard with reactive state.       | `import { useClipboard } from "vue-dev-utils-kit"; const { copy } = useClipboard(); copy("Hello")`    |
| [**`useToggle`**](#usetoggle)             | Reactive boolean toggle helper.                   | `import { useToggle } from "vue-dev-utils-kit"; const { state, toggle } = useToggle(false)`           |
| [**`useCounter`**](#usecounter)           | Counter with increment, decrement, reset.         | `import { useCounter } from "vue-dev-utils-kit"; const { count, inc } = useCounter(0)`                |
| [**`useDarkMode`**](#usedarkmode)         | Dark mode toggle synced with system preference.   | `import { useDarkMode } from "vue-dev-utils-kit"; const { isDark, toggle } = useDarkMode()`           |
| [**`useFetch`**](#usefetch)               | Reactive fetch composable for API calls.          | `import { useFetch } from "vue-dev-utils-kit"; const { data } = useFetch("/api/data")`                |
| [**`useOnline`**](#useonline)             | Detects online/offline status reactively.         | `import { useOnline } from "vue-dev-utils-kit"; const online = useOnline()`                           |



## 📖 Usage Examples
🔹 useLocalStorage

Keeps a value in localStorage and keeps it reactive.
```vue
<script setup>
import { useLocalStorage } from "vue-dev-utils-kit";

const name = useLocalStorage("name", "Saurav");
console.log(name.value); // "Saurav"
name.value = "Vue Dev";  // auto-saved in localStorage
</script>
```

🔹 useDebounce

Delays updates to a ref, useful for search inputs or API calls.
```vue
<script setup>
import { ref } from "vue";
import { useDebounce } from "vue-dev-utils-kit";

const search = ref("");
const debounced = useDebounce(search, 500); // updates after 500ms
</script>
```

🔹 useClipboard

Easily copy text to clipboard and check if it succeeded.
```vue
<script setup>
import { useClipboard } from "vue-dev-utils-kit";

const { copy, copied } = useClipboard();
await copy("Hello World!");
console.log(copied.value); // true if successful
</script>
```

🔹 useToggle

A simple reactive boolean with a toggle function.
```vue
<script setup>
import { useToggle } from "vue-dev-utils-kit";

const { state, toggle } = useToggle(false);
toggle(); // true
toggle(); // false
</script>
```

🔹 useCounter

A counter with increment, decrement, and reset helpers.
```vue
<script setup>
import { useCounter } from "vue-dev-utils-kit";

const { count, inc, dec, reset } = useCounter(0);
inc(); // 1
dec(); // 0
reset(); // 0
</script>
```

🔹 useDarkMode

Syncs with system preference and allows toggling.
```vue
<script setup>
import { useDarkMode } from "vue-dev-utils-kit";

const { isDark, toggle } = useDarkMode();
console.log(isDark.value); // true or false
toggle();
</script>
```

🔹 useFetch

Reactive wrapper around fetch for API calls.
```vue
<script setup>
import { useFetch } from "vue-dev-utils-kit";

const { data, error, loading } = useFetch("/api/data");
</script>
```

🔹 useOnline

Detects online/offline status in real time.
```vue
<script setup>
import { useOnline } from "vue-dev-utils-kit";

const online = useOnline();
console.log(online.value); // true or false
</script>
```



## 🤝 Contributing

Contributions are welcome! 🎉
If you’d like to add new utilities, fix bugs, or improve docs:

1. Fork the repo
2. Create a feature branch (git checkout -b feature/my-new-util)
3. Commit changes (git commit -m "feat: added useXYZ composable")
4. Push to branch (git push origin feature/my-new-util)
5. Open a Pull Request 🚀

## 📜 License

MIT © Saurav Singh
