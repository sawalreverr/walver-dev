<script setup></script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="container mx-auto px-4 flex flex-col h-full">
      <nav class="py-10">
        <div class="flex items-center gap-2 w-full lg:w-1/2">
          <img
            src="@/assets/images/logo-catpuccin.png"
            alt="Walver Logo"
            class="w-12 h-12 transition-transform duration-700 hover:scale-110"
          />
          <span class="text-3xl font-black">Walver</span>
        </div>
      </nav>

      <section class="flex-1 flex items-center py-8">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
          <div class="w-full lg:w-1/2 flex flex-col justify-center">
            <div class="space-y-6">
              <h1 class="text-4xl lg:text-6xl font-black leading-tight">
                Muhammad Shahwal
                <div class="text-primary">Software Engineer</div>
              </h1>
              <p class="text-lg max-w-prose">
                Informatics Engineering graduate with a passion for crafting resilient digital
                solutions. <br />
                I focus on back-end development and cyber security principles to build scalable,
                secure systems that stand the test of real-world demands.
              </p>

              <div class="flex flex-wrap gap-6 mt-8">
                <router-link to="/about" class="walver-btn">About Me</router-link>
                <router-link to="/projects" class="walver-btn">My Projects</router-link>
                <router-link to="/contact" class="walver-btn">Reach Me</router-link>
              </div>
            </div>
          </div>

          <div class="flex-1 flex justify-center lg:justify-end items-center relative">
            <img
              src="@/assets/images/illustration.svg"
              alt="Illustration"
              class="max-w-sm lg:max-w-md relative z-10 drop-shadow-md drop-shadow-primary transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
