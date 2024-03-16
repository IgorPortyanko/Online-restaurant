
export interface menuItemIF {
    id: number
    name: string
    img: string
    composition: string
    price1: number
    price2: number
    price3: number
}

export interface pizzaMenuItemIF {
    id: number
    name: string
    img: string
    composition: string
    price: number
    price1: number
    price2: number
    price3: number
}

export interface burgerMenuItemIF {
    id: number
    name: string
    img: string
    composition: string
    price: number
    weight: number
}

export interface sushiMenuItemIF {
    id: number
    name: string
    img: string
    composition: string
    price: number
    weight: number
}

export interface cartItemIF {
    id: string
    type: string
    typeId: number
    name: string
    img: string
    price: number
    num: number
}

export interface promoItemIF {
    id: number
    name: string
    img: string
    describePromo: string
}