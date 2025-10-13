import { create } from "zustand";

const useCartCount = create((set) => ({
    itemsInCart: 0,
    inc: () => set((state) => ({itemsInCart: state.itemsInCart + 1})),
    dec: () => set((state) => ({itemsInCart: state.itemsInCart > 0 ? state.itemsInCart - 1 : 0})),
    emptyCart: () => set(({itemsInCart: 0}))
}));

export default useCartCount;