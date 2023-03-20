// Return users to front page if they try to access certain pages without credentials
export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser()
  
    if (!user.value) {
      return navigateTo('/')
    }
  })