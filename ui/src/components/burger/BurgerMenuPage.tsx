import { useEffect } from "react"
import { observer } from "mobx-react-lite";
import burgerMenuStore from "../../store/burgerMenu-store";
import BurgerMenuCard from "./BurgerMenuCard";
import '../components_style/MenuPage.css'

const BurgerMenuPage = observer ( () => {

    const { burgerMenu, getAllBurgers } = burgerMenuStore

    useEffect(() => {
        getAllBurgers()
    }, [])

    return(
        <div className="menu-page-container">
            { burgerMenu.map((elem) => <BurgerMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}) 

export default BurgerMenuPage