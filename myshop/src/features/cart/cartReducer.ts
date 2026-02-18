export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export type CartAction = 
    | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> & { quantity?: number } }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
    | { type: 'CLEAR_CART' };

export interface CartState {
    items: CartItem[];
}

export const initialCartState: CartState = {
    items: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
                            : item
                    ),
                };
            }

            return {
                items: [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: action.payload.quantity || 1,
                    },
                ],
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                items: state.items.filter(item => item.id !== action.payload),
            };

        case 'UPDATE_QUANTITY': {
            if (action.payload.quantity <= 0) {
                return {
                    items: state.items.filter(item => item.id !== action.payload.id),
                };
            }

            return {
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        }

        case 'CLEAR_CART':
            return { items: [] };

        default:
            return state;
    }
}
