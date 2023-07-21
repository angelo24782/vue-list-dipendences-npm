<template>
  <div class="card m-3" style="width: 22rem">
    <div class="card-body">
      <h5 class="card-title mb-4">{{ props.packageData.key }}</h5>
      <div class="align-items-center d-flex justify-content-center">
        <img :src="props.packageData.image" alt="Profile Image" class="img-fluid mx-3" />
        <a :href="props.packageData.repository" class="btn btn-primary mx-3" target="_blank"
          ><i class="bi bi-github me-2"></i>View on NPM</a
        >
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <p class="badge bg-secondary p-2 mt-2">Version: {{ props.packageData.version }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface PackageData {
  key: string | undefined
  repository: string
  version: string | null
  image: string
}

const props = defineProps({
  packageData: {
    type: Object as PropType<PackageData>,
    required: true
  }
})
</script>
