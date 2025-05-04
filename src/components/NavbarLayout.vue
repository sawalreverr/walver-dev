<template>
  <nav class="bg-base-100 py-4">
    <div class="container mx-auto px-6 md:px-8">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center gap-2">
          <img :src="logo" alt="Walver Logo" class="w-12 h-12" />
        </router-link>

        <div class="flex ml-4 space-x-4">
          <router-link
            to="/about"
            class="text-base-content font-bold"
            :class="{ 'text-primary': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link
            to="/projects"
            class="text-base-content font-bold"
            :class="{ 'text-primary': $route.path === '/projects' }"
          >
            Projects
          </router-link>
          <router-link
            to="/contact"
            class="text-base-content font-bold"
            :class="{ 'text-primary': $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/images/logo-catpuccin.png'
</script>
