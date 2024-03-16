import { burgerMenuItemIF } from "../../models/models"
import '../components_style/MenuCard.css'
import AddToCartButton from "../AddToCartButton"
import cartStore  from '../../store/cart-store'
import { itemModel } from "../../consts/cartItemModel"

const BurgerMenuCard = (props: burgerMenuItemIF) => {

    const {addToCart} = cartStore

    const item = itemModel(props, 'burger')

    const handleAddToCart = () => {
        addToCart(item)
    }

    return(
        <div className="menu-card-container">
            <div className="menu-card-img">
                <img src={`./img/burger/${props.img}`} alt="" />
            </div>
            <div className="menu-card-name">
                <h2> {props.name} </h2>
            </div>
            <div className="menu-card-composition">
                <p> {props.composition} </p>
            </div>
            <div className="burger-weight-container">
                <div className="burger-weight">
                    {props.weight}г
                </div>
            </div>
            <div className="menu-card-price-wraper">
                <div className="menu-card-price">
                    {props.price}грн
                </div>
                <AddToCartButton addItem = { handleAddToCart} item = {item}/>
            </div>
        </div>
    )
}

export default BurgerMenuCard