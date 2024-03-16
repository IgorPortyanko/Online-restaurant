import { pizzaMenuItemIF } from "../models/models"
import { useState } from "react"
import {ShoppingCartOutlined } from '@ant-design/icons'
import AddToCartButton from "./AddToCartButton"
import cartStore from "../store/cart-store"
import { itemModel } from "../consts/cartItemModel"
import './components_style/MenuCard.css'

const PizzaMenuCard = (props: pizzaMenuItemIF) => {

    const {addToCart} = cartStore

    const [price, setPrice] = useState(props.price1)
    const [selectedSize, setSelectedSize] = useState('30')

    const handleRadioChange = (size: string, price:number) => {
        setSelectedSize(size);
        setPrice(price)
    };

    const item = itemModel(props, 'pizza')

    const handleAddToCart = () => {
        addToCart({...item, id : props.id + selectedSize, price : price})
    }

    return(
        <div className="menu-card-container">
            <div className="menu-card-img">
                <img src={`./img/pizza/${props.img}`} alt="" />
            </div>
            <div className="menu-card-name">
                <h2> {props.name} </h2>
            </div>
            <div className="menu-card-composition">
                <p> {props.composition} </p>
            </div>
            <div className="menu-card-radio">
                <label className={`pizza-size-radio ${selectedSize === '30' ? 'checked-pizza-size-radio' : ''}`}>
                    <input 
                        className="real-radio"
                        type="radio" 
                        name="price"
                        onChange={() => handleRadioChange('30', props.price1)}
                    /> 
                    &nbsp;30 см 
                </label>

                <label className={`pizza-size-radio ${selectedSize === '40' ? 'checked-pizza-size-radio' : ''}`}>
                    <input 
                        className="real-radio"
                        type="radio" 
                        name="price"
                        onChange={() => handleRadioChange('40', props.price2)} 
                    />
                    &nbsp;40 см 
                </label>

                <label className={`pizza-size-radio ${selectedSize === '50' ? 'checked-pizza-size-radio' : ''}`}> 
                    <input 
                        className="real-radio"
                        type="radio" 
                        name="price" 
                        onChange={() => handleRadioChange('50', props.price3)}
                    />
                    &nbsp;50 см 
                </label>
            </div>
            <div className="menu-card-price-wraper">
                <div className="menu-card-price">
                    {price}грн
                </div>
                <AddToCartButton addItem = { handleAddToCart} item = {item}/>
            </div>
        </div>
    )
}

export default PizzaMenuCard