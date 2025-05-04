<script setup>
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '@/stores/aboutStore'
import PageLayout from '@/components/PageLayout.vue'

const aboutStore = useAboutStore()
const { experiences, education, background } = storeToRefs(aboutStore)
</script>

<template>
  <PageLayout
    title="About Me"
    description="Learn more about me, my background, experience, and education."
  >
    <div class="mb-12">
      <div class="bg-base-100 p-6 rounded-lg shadow-md border-l-4 border-neutral relative">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h2 class="text-2xl font-bold mb-2">My Background</h2>
          <span
            class="text-sm font-medium bg-neutral text-base-100 px-3 py-1 rounded-sm mt-2 mb-2 md:mt-0"
            >{{ background.location }}</span
          >
        </div>
        <p class="text-lg mb-6">
          I'm <span class="font-bold">{{ background.name }}</span
          >, {{ background.summary }}
        </p>
        <p class="text-lg">
          {{ background.openToWork }}
        </p>
      </div>
    </div>

    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <Icon class="mr-3" icon="pajamas:work" />
        Experience
      </h2>

      <div class="relative border-l-2 border-neutral pl-8 ml-4">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          class="mb-8 relative"
          :class="{ 'mb-0': index === experiences.length - 1 }"
        >
          <div
            class="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-neutral bg-primary"
          ></div>
          <div class="bg-base-200 p-5 rounded-lg">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 class="text-xl font-bold">{{ experience.company }}</h3>
              <span
                class="text-sm font-medium bg-neutral text-base-100 px-3 py-1 rounded-sm mt-2 md:mt-0"
                >{{ experience.period }}</span
              >
            </div>
            <h4 class="text-lg font-semibold mb-2">{{ experience.position }}</h4>
            <p>{{ experience.description }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
              <span
                v-for="skill in experience.skills"
                :key="skill"
                class="px-3 py-1 bg-neutral text-base-100 text-xs font-medium rounded-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <Icon class="mr-3" icon="mdi:education-outline" />
        Education
      </h2>

      <div v-for="edu in education" :key="edu.id" class="bg-base-200 p-5 rounded-lg">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 class="text-xl font-bold">{{ edu.institution }}</h3>
          <span
            class="text-sm font-medium bg-neutral text-base-100 px-3 py-1 rounded-sm mt-2 md:mt-0"
            >{{ edu.period }}</span
          >
        </div>
        <h4 class="text-lg font-semibold mb-2">{{ edu.degree }}</h4>
        <p>{{ edu.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="skill in edu.skills"
            :key="skill"
            class="px-3 py-1 bg-neutral text-base-100 text-xs font-medium rounded-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
