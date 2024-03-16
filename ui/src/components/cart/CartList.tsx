import { observer } from "mobx-react-lite";
import cartStore  from '../../store/cart-store'
import CartItem from "./CartItem";


const CartList = observer( () => {

    const { cartList } = cartStore

    return(
        <div className="cart-modal-list">
            <ul>
                {cartList.map((elem) => <li key={elem.id}> <CartItem {...elem}/> </li>) }
            </ul>
            
        </div>
    )
})

export default CartList