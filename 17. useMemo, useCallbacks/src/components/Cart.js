
import CategoryItems from "../components/CategoryItems";
import { useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice" 


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    // or

    // you can also do like this below, but it is less efficient 
    // const store = useSelector((store) => store)
    // const cartItems = store.cart.items

    const dispath = useDispatch();

    const handleClearCart = () => {
        dispath(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">
                My Cart
            </h1>
            {cartItems?.length > 0 ? (<div>
                <button className="bg-black rounded-md text-white px-2 py-1 my-2" onClick={handleClearCart}>
                    Clear Cart
                </button>
                <CategoryItems data={cartItems} />
            </div>) : (
                <h1 className="text-2xl font-bold">
                    Your cart is missing out, Please add the items in the cart.
                </h1>
            )}
        </div>
    )
}

export default Cart;