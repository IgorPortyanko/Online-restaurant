import { useEffect } from "react"
import { observer } from "mobx-react-lite";
import sushiMenuStore from "../../store/sushiMenu-store";
import SushiMenuCard from "./SushiMenuCard";
import '../components_style/MenuPage.css'

const SushiMenuPage = observer ( () => {

    const { sushiMenu, getAllSushi } = sushiMenuStore

    useEffect(() => {
        getAllSushi()
    }, [])

    return(
        <div className="menu-page-container">
            { sushiMenu.map((elem) => <SushiMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}) 

export default SushiMenuPage