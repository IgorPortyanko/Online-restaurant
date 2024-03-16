import { makeAutoObservable } from "mobx";
import { promoItemIF } from "../models/models"
import axios from 'axios'

class PromoStore {
    promoList: promoItemIF[] = []
    

    constructor () {
        makeAutoObservable(this)
        axios.defaults.baseURL = 'http://localhost:3001'
    }

    getAllPromo = async () => {
        try{
            const promotions = await axios.get('/promo')
            this.promoList = promotions.data
        }
        catch ( error ) {
            console.error('Помилка', error)
        }
    }

    
}

export default new PromoStore()