import { sushiMenuItemIF } from "../models/models"
import './components_style/SushiMenuCard.css'
import cartStore from "../store/cart-store"
import AddToCartButton from "./AddToCartButton"
import { itemModel } from "../consts/cartItemModel"



const RollsMenuCard = (props: sushiMenuItemIF) => {

    const {addToCart} = cartStore

    const item = itemModel(props, 'rolls')

    const handleAddToCart = () => {
        addToCart(item)
    }

    return(
        <div className="sushi-menu-card-container">
            <div className="sushi-menu-card-img">
                <img src={`./img/rolls/${props.img}`} alt="" />
            </div>
            <div className="sushi-menu-card-name">
                <h2> {props.name} </h2>
            </div>
            <div className="sushi-menu-card-composition">
                <p> {props.composition} </p>
            </div>
            <div className="burger-weight-container">
                <div className="sushi-weight">
                    {props.weight}г
                </div>
            </div>
            <div className="sushi-menu-card-price-wraper">
                <div className="sushi-menu-card-price">
                    {props.price}грн
                </div>
                <AddToCartButton addItem = { handleAddToCart} item = {item}/>

            </div>
        </div>
    )
}

export default RollsMenuCard