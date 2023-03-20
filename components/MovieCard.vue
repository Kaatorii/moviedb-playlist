<template>
    <div class="h-120 w-64 border flex flex-col text-center">
        <NuxtLink :to="`/movies/${movie?.id}`">
            <div class="mb-5 bg-green-600 inline-block">
                <img class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block" 
                :src="imgURL" alt="Movie Poster">
            </div>
        </NuxtLink>
        <div class="text-lg">
            {{ movie?.title }}
        </div>
        <p class="text-s break-words text-warp truncate overflow-hidden px-2 italic">
            {{ movie?.overview }}
        </p>
    </div>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { Movie } from '~~/types/Movie';

    const props = defineProps({
        movie: {
            type: Object as PropType<Movie>
        }
    })

    const config = useRuntimeConfig();

    // Getting the imagine URL for movie image
    const imgURL = computed(() => props.movie?.poster_path != null ? 
                                `${config.public.imgBaseUrl}/${props.movie.poster_path}` : 
                                'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg')
</script>

<style scoped>

</style>