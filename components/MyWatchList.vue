<template>
    <div v-for="entry in watchlist">
        {{ entry.date_added.slice(0, 10) }} - {{ entry.title }}
        <button class="btn" @click="removeEntry">Delete</button>
    </div>
</template>

<script setup lang="ts">
    import { Database } from '~~/types/database.types'

    const route = useRoute()
    const client = useSupabaseClient<Database>()
    const user = useSupabaseUser()
    const loading = ref(false)

    const { data: watchlist } = await useAsyncData('watchlist', async () => {
        const { data } = await client.from('watchlist').select('title, date_added').eq('user', user.value.id)
    
        return data
    })

    
</script>