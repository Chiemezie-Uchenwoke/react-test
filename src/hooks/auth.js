import { create } from "zustand";

const useAuth = create((set) => ({
    isAuthenticated: false,
    authenticateUser: () => set((state) => ({isAuthenticated: !state.isAuthenticated}))
}))

export default useAuth;