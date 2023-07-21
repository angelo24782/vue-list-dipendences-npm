<script setup lang="ts">
import jsonData from '../data/data.json'

function getPackageName(str: string) {
  const regex = /(@?[/a-zA-Z\-_]+)@/
  const matches = str.match(regex)

  if (matches && matches.length > 1) {
    return matches[1]
  }
}

function getPackageVersion(inputString: string): string | null {
  const versionMatch = inputString.match(/@\s*(\d+\.\d+\.\d+(-\w+(\.\d+)?)?)\s*$/)
  return versionMatch ? versionMatch[1] : null
}
</script>

<template>
  <n-h1>Packages dependencies</n-h1>

  <n-table :bordered="true" :single-line="false">
    <thead>
      <tr>
        <th>Name</th>
        <th>Version</th>
        <th>Repository</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in jsonData" :key="key">
        <td>{{ getPackageName(key) }}</td>
        <td>
          <n-tag>^{{ getPackageVersion(key) }}</n-tag>
        </td>
        <td>
          <a
            :href="`${value.repository}`"
            target="_blank"
            class="font-semibold mr-2 mr-0 px-2.5 py-0.5 rounded"
            >{{ value.repository }}</a
          >
        </td>
      </tr>
    </tbody>
  </n-table>
</template>

<style scoped></style>
