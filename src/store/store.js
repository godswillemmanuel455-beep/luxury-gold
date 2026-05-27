import create from 'zustand';

export const useStore = create((set) => ({
    user: null,
    isAdmin: false,
    loading: true,
    setUser: (user) => set({ user }),
    setIsAdmin: (isAdmin) => set({ isAdmin }),
    setLoading: (loading) => set({ loading }),

    cart: [],
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            };
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
    removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== itemId)
    })),
    updateCartQuantity: (itemId, quantity) => set((state) => ({
        cart: state.cart.map(item =>
            item.id === itemId ? { ...item, quantity } : item
        ).filter(item => item.quantity > 0)
    })),
    clearCart: () => set({ cart: [] }),

    products: [],
    setProducts: (products) => set({ products }),

    orders: [],
    setOrders: (orders) => set({ orders }),
    addOrder: (order) => set((state) => ({
        orders: [...state.orders, order]
    })),

    users: [],
    setUsers: (users) => set({ users })
}));
