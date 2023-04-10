<template>
    <div>
        <p class="text-2xl text-white justify-center my-7">My Watchlist</p>
        <div class="flex items-center h-auto mx-10">
            <table class="table-auto rounded-lg shadow-md text-md bg-gray-800 text-white">
                <thead>
                    <tr>
                    <th class="px-4 py-2">DATE ADDED</th>
                    <th class="px-4 py-2">NAME</th>
                    <th class="px-4 py-2">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entry in watchlist">
                        <td class="border px-4 py-2">{{ entry.date_added.slice(0, 10) }}</td>
                        <td class="border px-4 py-2">{{ entry.title }}</td>
                        <td class="border px-4 py-2"><button class="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full animate-pulse" @click="removeEntry(entry)">DELETE</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Database } from '~~/types/database.types'

    definePageMeta({
        middleware: 'auth'
    })

    const route = useRoute()
    const client = useSupabaseClient<Database>()
    const user = useSupabaseUser()
    const loading = ref(false)


    // Fetch database from supabase using built-in function
    const { data: watchlist } = await useAsyncData('watchlist', async () => {
        const { data } = await client.from('watchlist').select('id, title, date_added').eq('user', user.value.id)
    
        return data
    })
    
    // Implement remove entry from database function
    const removeEntry = async (entry: Entry) => {
        watchlist.value = watchlist.value.filter(t => t.id !== entry.id)
        await client.from('watchlist').delete().match({ id: entry.id })
    }
    
</script>