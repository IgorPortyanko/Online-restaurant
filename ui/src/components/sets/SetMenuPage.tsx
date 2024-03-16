import { useEffect } from "react"
import { observer } from "mobx-react-lite";
import sushiMenuStore from "../../store/sushiMenu-store";
import SetMenuCard from "./SetMenuCard";
import '../components_style/MenuPage.css'

const SetMenuPage = observer ( () => {

    const { setMenu, getAllSets } = sushiMenuStore

    useEffect(() => {
        getAllSets()
    }, [])

    return(
        <div className="menu-page-container">
            { setMenu.map((elem) => <SetMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}) 

export default SetMenuPage