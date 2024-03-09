import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <div className="w-6/12 mx-auto item-center">
            <div className="item-center">
                <h1 className="text-xl font-bold">Cart</h1>
                <button className="p-2 mx-3 rounded-lg bg-white shadow-lg" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            {
                cartItems.length === 0 ? <h1 className="text-xl font-bold">Cart is Empty</h1> : <ItemList items={cartItems} />
            }

        </div>
    )
}

export default Cart;