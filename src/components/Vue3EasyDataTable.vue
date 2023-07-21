<script setup lang="ts">
import { ref } from 'vue'
import jsonData from '../data/data.json'

import type { Header, Item, SortType } from 'vue3-easy-data-table'

const searchField = ['name']
const searchValue = ref('')

const sortBy = 'name'
const sortType: SortType = 'desc'

const headers: Header[] = [
  { text: 'NAME', value: 'name', sortable: true },
  { text: 'VERSION', value: 'version' },
  { text: 'REPOSITORY', value: 'repository' }
]

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

const items: Item[] = Object.entries(jsonData).map(([key, item]: [string, any]) => {
  return {
    name: getPackageName(key),
    version: getPackageVersion(key),
    repository: item.repository
  }
})
</script>

<template>
  <br />
  <br />
  <span>search value: </span>
  <input type="text" v-model="searchValue" />
  <br />
  <br />
  <EasyDataTable
    :headers="headers"
    :items="items"
    :rows-per-page="10"
    alternating
    border-cell
    buttons-pagination
    :search-field="searchField"
    :search-value="searchValue"
    :sort-by="sortBy"
    :sort-type="sortType"
    header-text-direction="center"
    body-text-direction="center"
    table-class-name="customize-table"
    show-index
  >
    <template #item-repository="{ repository }">
      <a :href="repository" target="_blank">{{ repository }}</a>
    </template>
  </EasyDataTable>
</template>

<style scoped>
.customize-table {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: white;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-body-row-height: 2.8rem;
  --easy-table-body-row-font-size: 14px;
}
</style>
