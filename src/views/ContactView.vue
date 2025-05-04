<script setup>
import { Icon } from '@iconify/vue'
import { useContactStore } from '@/stores/contactStore'
import PageLayout from '@/components/PageLayout.vue'

function handleClick(contact) {
  if (contact.type !== 'Discord' && contact.link) {
    window.open(contact.link, '_blank')
  }
}

const contactStore = useContactStore()
</script>

<template>
  <PageLayout
    title="Contact Me"
    description="You can contact me via Email, Discord, Twitter, or LinkedIn. I usually respond within a day."
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="method in contactStore.contacts"
        @click="handleClick(method)"
        :key="method.id"
        :class="method.type === 'Discord' ? 'cursor-default' : 'cursor-pointer'"
        class="flex items-center p-3 bg-base-200 rounded-lg border border-base-300 hover:bg-base-300 transition-colors"
      >
        <div class="flex items-center justify-center w-10 h-10 flex-shrink-0">
          <Icon class="w-8 h-8" :icon="method.icon" />
        </div>

        <div class="ml-4 min-w-0">
          <h3 class="font-bold text-base truncate">{{ method.type }}</h3>
          <p class="text-sm truncate">{{ method.value }}</p>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
