<template>
    <div class="flex flex-col py-10">
        <div class="flex justify-center items-center h-32">
            <input class="px-2 py-1 border border-gray-800 rounded-md min-w-64 text-black" 
            v-model="searchTerm" 
            type="text" 
            placeholder="Search for title...">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
            <div v-for="movie in data?.results">
                <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>
        <div class="flex justify-center">
            <button v-if="!disabledPrevious" @click="page--" class="px-4 py-2 text-m border rounded-lg bg-black">Previous</button>
            <div class="px-4 py-2 text-m border rounded-lg bg-black">{{ page }}</div>
            <button v-if="!disabledNext" @click="page++" class="px-4 py-2 text-m border rounded-lg bg-black">Next</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { APIResponse } from '~~/types/APIResponse';

    const searchTerm = ref('');
    const page = ref(1);

    // Hides the "Previous" button if page count is 1
    const disabledPrevious = computed(() => {
        return page.value === 1;
    })

    // Hides the "Next" button at the end of query pages
    const disabledNext = computed(() => {
        return page.value + 1 === data.value?.total_pages;
    })

    // Temporary variable to store the search query
    // Debouncing the search function to avoid requesting too many times from API
    const debouncedSearchTerm = refDebounced(searchTerm, 700);

    // Calling the query
    const url = computed(() => {
        return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
    })

    const { data } = await useFetch<APIResponse>(url);
</script>

<style scoped>

</style>