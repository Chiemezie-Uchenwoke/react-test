import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create (
    persist(
        (set) => ({
            cart: [],
            addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
            removeFromCart: (id) => 
                set((state) => ({
                    cart: state.cart.filter((item => item.id !== id))
                })),
            clearCart: () => set({cart: []})
        }),

        {name: "cart-storage"}
    )
)

export default useCartStore;

// addToCart(product)
//  removeFromCart(product.id)