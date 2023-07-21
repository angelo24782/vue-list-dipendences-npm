<script setup lang="ts">
import { ref, onMounted } from 'vue'
import jsonData from '../data/data.json'
import NpmCard from '@/components/NpmCard.vue'

interface PackageData {
  key: string | undefined
  repository: string
  version: string | null
  image: string
  licenses: string
}

const npmPackages = ref<PackageData[]>([])
const isLoading = ref(true)

function getPackageName(str: string) {
  const regex = /(@?[/a-zA-Z\-_]+)@/
  const matches = str.match(regex)

  if (matches && matches.length > 1) {
    return matches[1]
  }
}

function getPackageVersion(inputString: string): string | null {
  const versionMatch = inputString.match(/@\s*(\d+\.\d+\.\d+(-\w+(\.\d+)?)?)\s*$/)
  return versionMatch ? '^' + versionMatch[1] : null
}

onMounted(async () => {
  try {
    npmPackages.value = Object.entries(jsonData).map(([key, item]: [string, any]) => {
      return {
        key: getPackageName(key),
        repository: item.repository,
        version: getPackageVersion(key),
        image: item.image,
        licenses: item.licenses
      }
    })
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="container mt-4">
    <h1>Pacchetti NPM</h1>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div
      v-else
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 d-flex justify-content-between"
    >
      <NpmCard v-for="pkg in npmPackages" :key="pkg.repository" :packageData="pkg" />
    </div>
  </div>
</template>

<style scoped></style>
