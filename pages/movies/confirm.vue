<template>
    <div class="text-2xl text-white justify-center">
        <div>Do you want to add {{ route.query.mName }} to your watchlist?</div>
        <div>
            <button @click="addEntry" class="btn">Add</button>
            <NuxtLink to="/">
                <button class="btn mx-5">Cancel</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Database } from '~~/types/database.types'

    definePageMeta({
        middleware: "auth"
    })

    const route = useRoute()
    const client = useSupabaseClient<Database>()
    const user = useSupabaseUser()
    const loading = ref(false)
    const codeError = ref('')

    // Fetch database from supabase using built-in function
    const { data: watchlist } = await useAsyncData('watchlist', async () => {
        const { data } = await client.from('watchlist').select('id, title').eq('user', user.value.id)
        
        return data
    })

    // Implement add new entry to database function
    async function addEntry () {
        try {
            loading.value = true
            const { data, error } = await client.from('watchlist')
            .insert({
                user: user.value.id,
                title: route.query.mName,
                uniqueident: user.value.id + route.query.mName
            })
            .select('id, title, user, uniqueident')
            .single();

            alert("added to list")
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
        
    }
</script>