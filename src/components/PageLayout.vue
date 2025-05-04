<script setup>
import Navbar from './NavbarLayout.vue'
import Footer from './FooterLayout.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <Navbar />

    <main class="container mx-auto px-6 md:px-8 py-12">
      <h1 class="text-4xl lg:text-5xl font-black text-primary mb-4">{{ title }}</h1>
      <p v-if="description" class="text-lg text-base-content/80 mb-8 max-w-3xl">
        {{ description }}
      </p>

      <slot></slot>
    </main>

    <Footer />
  </div>
</template>
