import { useEffect } from "react"
import { observer } from "mobx-react-lite";
import pizzaMenuStore from "../store/pizzaMenu-store";
import PizzaMenuCard from "./PizzaMenuCard";
import './components_style/MenuPage.css'

const PizzaMenuPage = observer ( () => {

    const { pizzaMenu, getAllPizza} = pizzaMenuStore

    useEffect(() => {
        getAllPizza()
    }, [])

    return(
        <div className="menu-page-container">
            { pizzaMenu.map((elem) => <PizzaMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}) 

export default PizzaMenuPage