<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">Movie Watchlist Maker</NuxtLink>
            </nav>
        </header>

        <!-- output the page content-->
        <div class="container mx-auto p-4 pb-10">
            <slot />
        </div>

        <footer class="container mx-auto p4 flex justify-between border-t-2">
            <ul class="flex gap-4 my-1">
                <li><NuxtLink to="/">Home</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "movies"
    })
</script>

<style scoped>
.router-link-exact-active {
    color: cyan;
}
</style>