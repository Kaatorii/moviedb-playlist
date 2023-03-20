<template>
  <form class="max-w-lg mx-auto mt-10" @submit.prevent="handleLogin">
      <div class="col-8">
          <h1 class="text-2xl text-white text-center">Sign in to your account using a magic link</h1>
          <div class="mt-4 text-center">
              <input class="inputField text-black" type="email" placeholder="Your email" v-model="email" />

              <input type="submit" class="button" :value="loading ? 'Loading' : 'Send magic link'"
                  :disabled="loading" />
          </div>
      </div>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient()
const loading = ref(false)
const email = ref("")

//authentication using supabase plugin
const handleLogin = async () => {
  try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({ email: email.value })
      if (error) throw error
      alert("Check your email for the login link!")
  } catch (error) {
      alert(error.message)
  } finally {
      loading.value = false
  }
}
</script>

<style scoped>
.inputField {
  width: 100%;
  border-radius: 5px;
  border: var(1px solid #333);
  padding: 8px;
  font-size: 0.9rem;
  background-color: var(#101010);
  color: var(#fff);
}

.button {
  color: var(#fff);
  display: inline-block;
  text-align: center;
  padding: 1rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
}

</style>