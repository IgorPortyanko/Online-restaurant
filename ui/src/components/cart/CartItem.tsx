import { cartItemIF } from "../../models/models"
import { DeleteFilled } from '@ant-design/icons'
import cartStore  from '../../store/cart-store'
import { observer } from "mobx-react-lite";



const CartItem = observer((props:cartItemIF) => {

    const { deleteItemFromCart, changeNumberInItemPlus, changeNumberInItemMinus } = cartStore

    const handleMinus = () => {
        changeNumberInItemMinus(props.id)
    }

    const handlePlus = () => {
        changeNumberInItemPlus(props.id)
    }

    const handleDeleteItem = () => {
        deleteItemFromCart(props.id)
    }

    return(
        <div className="cart-item-container">
            <div className="cart-item-img">
                <img src={props.img} alt="" />
            </div>
            <div className="cart-item-name">
                {props.name}
            </div>
            <div className="cart-item-count">
                <div
                    className="cart-item-count-arithmetics"
                    onClick={handleMinus}
                > 
                    -
                </div>
                <div className="cart-item-count-number">{ props.num }</div>
                <div 
                    className="cart-item-count-arithmetics"
                    onClick={handlePlus}
                > 
                    + 
                </div>
                
            </div>
            <div className="cart-item-sum"> { props.num * props.price } грн</div>
            <div className="cart-item-del">
                <DeleteFilled onClick={handleDeleteItem}/>
            </div>
        </div>
    )
})

export default CartItem