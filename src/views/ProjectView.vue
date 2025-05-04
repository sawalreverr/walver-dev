<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/projectStore'
import PageLayout from '@/components/PageLayout.vue'

const { projects } = storeToRefs(useProjectStore())

const sortedProjects = computed(() => {
  return [...projects.value].sort((a, b) => b.id - a.id)
})
</script>

<template>
  <PageLayout title="Projects" description="A showcase of my recent work and personal projects.">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in sortedProjects"
        :key="project.id"
        class="relative overflow-hidden rounded-lg border border-base-300 bg-base-200 h-56 md:h-96 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <div class="absolute inset-0">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-300"
          />
        </div>

        <div class="relative h-full flex flex-col justify-end p-4 md:p-5 z-10">
          <h2 class="text-lg md:text-xl font-bold mb-2">{{ project.title }}</h2>

          <div class="flex flex-wrap gap-1 md:gap-2 mb-3">
            <span
              v-for="(tag, tagIndex) in project.tags"
              :key="tagIndex"
              class="px-2 py-0.5 md:py-1 bg-neutral text-base-100 text-xs rounded-sm"
            >
              {{ tag }}
            </span>
          </div>

          <p class="hidden sm:block text-sm mb-4 overflow-hidden line-clamp-3">
            {{
              project.description.length > 200
                ? project.description.slice(0, 200) + '...'
                : project.description
            }}
          </p>

          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-primary text-sm font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          >
            Learn More
            <span class="icon-[mdi--arrow-right] w-3 h-3 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.line-clamp-3 {
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
