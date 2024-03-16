import { useEffect } from "react"
import { observer } from "mobx-react-lite";
import sushiMenuStore from "../store/sushiMenu-store";
import RollsMenuCard from "./RollsMenuCard";
import './components_style/MenuPage.css'

const RollsMenuPage = observer ( () => {

    const { rollsMenu, getAllRolls } = sushiMenuStore

    useEffect(() => {
        getAllRolls()
    }, [])

    return(
        <div className="menu-page-container">
            { rollsMenu.map((elem) => <RollsMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}) 

export default RollsMenuPage