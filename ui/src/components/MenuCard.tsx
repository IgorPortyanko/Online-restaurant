import { menuItemIF } from "../models/models"
import { useState } from "react"
import {ShoppingCartOutlined } from '@ant-design/icons'
import './components_style/MenuCard.css'

const MenuCard = (props: menuItemIF) => {

    const [price, setPrice] = useState(props.price1)

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
                <input type="radio" id={`1+${props.id}`} name="price" />
                <label htmlFor={`1+${props.id}`}> 30 см </label>

                <input type="radio" id={`2+${props.id}`} name="price" />
                <label htmlFor={`2+${props.id}`}> 40 см </label>
                
                <input type="radio" id={`3+${props.id}`} name="price" />
                <label htmlFor={`3+${props.id}`}> 50 см </label>
            </div>
            <div className="menu-card-price-wraper">
                <div className="menu-card-price">
                    {price}грн
                </div>
                <div className="menu-card-button-add">
                    <button><ShoppingCartOutlined/> В КОШИК</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard