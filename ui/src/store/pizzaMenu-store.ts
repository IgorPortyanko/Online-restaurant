import { makeAutoObservable } from "mobx";
import { pizzaMenuItemIF } from "../models/models"
import axios from 'axios'

class PizzaMenuStore {
    pizzaMenu: pizzaMenuItemIF[] = []
    

    constructor () {
        makeAutoObservable(this)
        axios.defaults.baseURL = 'http://localhost:3001'
    }

    getAllPizza = async () => {
        try{
            const pizzaList = await axios.get('/pizza')
            this.pizzaMenu = pizzaList.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }
}

export default new PizzaMenuStore()
