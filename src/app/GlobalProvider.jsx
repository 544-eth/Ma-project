import { CartProvider } from "../../producctt-cart/Cartcontext";

export function GlobalProvider({ children }) {
    return <CartProvider>{children}</CartProvider>
    
}