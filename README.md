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

1. useClipboard

Copy text to the clipboard.

```js
import { useClipboard } from "vue-dev-utils-kit";

const { copy, copied } = useClipboard();
```

`copy(text: string)` → Copies the given text.

`copied: Ref<boolean>` → true for 2s after copy.

2. useDebounce

Debounces a reactive value by given delay.

```js
import { useDebounce } from "vue-dev-utils-kit";
import { ref } from "vue";

const input = ref("");
const debouncedInput = useDebounce(input, 500);
```

Returns a debounced `Ref` that updates after the delay.

Useful for search inputs, API calls, etc.

3. useLocalStorage

Reactive state synced with localStorage.

```js
import { useLocalStorage } from "vue-dev-utils-kit";

const username = useLocalStorage("username", "Guest");
```

`key: string` → localStorage key

`defaultValue: any` → default value if not found

Returns a `Ref` that is automatically kept in sync with localStorage.

## 🛠 Roadmap

Planned upcoming utilities:

`useToggle` → Simple boolean toggle

`useCounter` → Reactive counter with increment/decrement/reset

`useDarkMode` → Reactive dark mode toggle

`useFetch` → Simple data fetching composable

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
