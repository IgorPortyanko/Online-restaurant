import { makeAutoObservable } from "mobx";
import { cartItemIF } from "../models/models"

class CartStore {

    cartList: cartItemIF[] = []

    constructor () {
        makeAutoObservable(this)
    }

    addToCart = (cartItem: cartItemIF) => {
        const newItem = this.cartList.find(elem => elem.id === cartItem.id)
        !newItem ? this.cartList = [...this.cartList, cartItem] : this.changeNumberInItemPlus(cartItem.id)
        this.addCartToLocalStorage()
    }

    deleteItemFromCart = (id:string) => {
        this.cartList = this.cartList.filter(elem => elem.id !== id)
        this.addCartToLocalStorage()
    }

    changeNumberInItemPlus = (id: string) => {
        const updatedCartList = this.cartList.map(elem => {
            return elem.id === id ? { ...elem, num: elem.num + 1 } : elem
        });
        this.cartList = updatedCartList;
        this.addCartToLocalStorage()
    }

    changeNumberInItemMinus = (id: string) => {
        const updatedCartList = this.cartList.map(elem => {
            return elem.id === id ? { ...elem, num: elem.num >= 2 ? elem.num - 1 : elem.num } : elem;
        });
        this.cartList = updatedCartList;
        this.addCartToLocalStorage()
    }

    countTotalSum = () => {
        const totalSum = this.cartList.reduce(function(accum, elem){
            accum += elem.price * elem.num
            return accum
        }, 0)
        return totalSum
    }

    addCartToLocalStorage = () => {
        const jsonCart = JSON.stringify(this.cartList)
        localStorage.setItem('cartList', jsonCart)
    }

    getCartFromLocalStorage = () => {
        const cartFromLocalStorage = localStorage.getItem('cartList')
        if (cartFromLocalStorage) {
            this.cartList = JSON.parse(cartFromLocalStorage)
        }
    }

}

export default new CartStore()