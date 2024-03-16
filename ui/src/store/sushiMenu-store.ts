import { makeAutoObservable } from "mobx";
import { sushiMenuItemIF } from "../models/models"
import axios from 'axios'

class SushiMenuStore {
    rollsMenu: sushiMenuItemIF[] = []
    setMenu: sushiMenuItemIF[] = []
    sushiMenu: sushiMenuItemIF[] = []
    

    constructor () {
        makeAutoObservable(this)
        axios.defaults.baseURL = 'http://localhost:3001'
    }

    getAllRolls = async () => {
        try{
            const rollsList = await axios.get('/rolls')
            this.rollsMenu = rollsList.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }

    getAllSets = async () => {
        try{
            const setList = await axios.get('/sets')
            this.setMenu = setList.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }

    getAllSushi = async () => {
        try{
            const sushiList = await axios.get('/sushi')
            this.sushiMenu = sushiList.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }
}

export default new SushiMenuStore()