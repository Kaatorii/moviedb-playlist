<template>
    <div>
        <MyWatchList></MyWatchList>
        <footer class="container mx-auto p4 flex justify-between">
            <ul class="flex gap-4">
                <li class="text-lg text-red-500 btn">
                    <button type="button" @click="signOut">
                        Sign Out
                    </button>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ['auth']
    })


    const user = useSupabaseUser()
    const loading = ref(true)
    const supabaseAuth = useSupabaseAuthClient()

    async function signOut() {
    try {
        loading.value = true
        let { error } = await supabaseAuth.auth.signOut()
        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
    }
</script>

<style lang="scss" scoped>

</style>