import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id) {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id) == null) {
                return [...prevItems, { id, quantity: 1 }]
            } else {
                return prevItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
            }
        })
    }
    
    function decreaseCartQuantity(id) {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id).quantity === 1) {
                return prevItems.filter(item => item.id !== id)
            } else {
                return prevItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={
            {
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}