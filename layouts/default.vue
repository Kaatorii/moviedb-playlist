<template>
    <div>
        <header class="shadow-sm bg-black">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Movie Watchlist Maker</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/watchlist" v-if="user">My Watchlist</NuxtLink></li>
                    <li><NuxtLink to="/login" v-if="!user">Login</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content-->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    // Fetch user information and log in status
    const user = useSupabaseUser()
</script>

<style scoped>
    .router-link-exact-active {
        color: cyan;
    }
</style>