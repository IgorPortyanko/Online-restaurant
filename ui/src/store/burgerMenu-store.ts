import { makeAutoObservable } from "mobx";
import { burgerMenuItemIF } from "../models/models"
import axios from 'axios'

class BurgerMenuStore {
    burgerMenu: burgerMenuItemIF[] = []
    

    constructor () {
        makeAutoObservable(this)
        axios.defaults.baseURL = 'http://localhost:3001'
    }

    getAllBurgers = async () => {
        try{
            const burgerList = await axios.get('/burgers')
            this.burgerMenu = burgerList.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }
}

export default new BurgerMenuStore()