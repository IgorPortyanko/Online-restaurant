import { burgerMenuItemIF, pizzaMenuItemIF, sushiMenuItemIF } from "../models/models"



export const itemModel = (props: sushiMenuItemIF  | burgerMenuItemIF | pizzaMenuItemIF, product: string ) => {
    
    const itemModel = {
        id: `${product}_${props.id}`,
        type: `${product}`,
        typeId: props.id,
        name: props.name,
        img: `./img/${product}/${props.img}`,
        price: props.price,
        num: 1
    }
    return itemModel
    
}

