export function useAuth() {
  const logout = async () => {
    // Clear localStorage/sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // If you're using Pinia/Vuex, clear the auth store
    // authStore.clearAuth()

    // If you have an API logout endpoint, call it here
    // await api.post('/logout')
  };

  return {
    logout,
  };
}
