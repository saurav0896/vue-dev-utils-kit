# vue-dev-utils-kit

![npm](https://img.shields.io/npm/v/vue-dev-utils-kit)
![license](https://img.shields.io/github/license/saurav0896/vue-dev-utils-kit)

A collection of **lightweight, reusable Vue 3 composables & utilities** to make your development faster, cleaner, and more productive.  
Think of it as a **developer-friendly utility kit** for Vue.js 🚀

---

## ✨ Features

- 📦 Ready-to-use Vue 3 composables
- 🪶 Lightweight and tree-shakable
- 🎯 Focused on practical, everyday utilities
- ⚡ No extra dependencies (only Vue 3)

---

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
import { useClipboard, useToggle } from "vue-dev-utils-kit";

const { copy, copied } = useClipboard();
const [isOpen, toggle] = useToggle(false);
</script>

<template>
  <div>
    <button @click="copy('Hello World!')">Copy</button>
    <p v-if="copied">Copied to clipboard ✅</p>

    <button @click="toggle">Toggle</button>
    <p>{{ isOpen ? "Open" : "Closed" }}</p>
  </div>
</template>
```
