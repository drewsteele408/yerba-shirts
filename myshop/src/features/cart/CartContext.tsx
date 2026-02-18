import { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import { cartReducer, initialCartState } from './cartReducer';
import type { CartState, CartAction, CartItem } from './cartReducer';

interface CartContextType {
    state: CartState;
    dispatch: (action: CartAction) => void;
    addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (parsedCart.items && Array.isArray(parsedCart.items)) {
                    // Dispatch each item to rebuild the cart state
                    parsedCart.items.forEach((item: CartItem) => {
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image,
                                quantity: item.quantity,
                            },
                        });
                    });
                }
            } catch (e) {
                console.error('Failed to load cart from localStorage:', e);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartItemCount = state.items.reduce((count, item) => count + item.quantity, 0);

    const value: CartContextType = {
        state,
        dispatch,
        addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
        removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }),
        updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
        cartTotal,
        cartItemCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
