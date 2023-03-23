<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <img :src="imgUrl" alt="movie img" class="mx-auto my-2">
            <div class="pt-20">
                <div class="text-4xl font-sans font-bold mb-5">{{ data?.title }}</div>
                
                <div class="flex">
                    <div v-for="genre in data?.genres" class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2">
                        {{ genre.name }}
                    </div>
                </div>
                <div class="text-lg my-2 font-bold">Release date: {{ data?.release_date }}</div>
                <div class="text-lg my-2 font-bold">Duration: {{ data?.runtime }} mins</div>
                <div class="text-lg my-2 font-bold">Overview:</div>
                <p class="text-gray-300 text-m">{{ data?.overview }}</p>
                <NuxtLink :to="{ path: `/movies/confirm`, query: {mName: data?.title}}" v-if="user">
                    <button class="btn">Add to Watchlist</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Movie } from '~~/types/Movie';

    definePageMeta({
        layout: "movies"
    })

    const user = useSupabaseUser();
    const route = useRoute();
    const config = useRuntimeConfig();
    const movieId = computed(() => route.params.id);

    const { data } = await useFetch<Movie>(`/api/movies/${movieId.value}`);

    // Getting the imagine URL for movie image
    const imgUrl = computed(() => data.value?.poster_path ? 
        `${config.public.imgBaseUrl}/${data.value?.poster_path}` : 
        'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg');
</script>
    
<style scoped>

</style>