import '../components_style/HomePage.css'
import HomePageMenuItem from './HomePageMenuItem'
import CarouselComponent from '../CarouselComponent'
import { useEffect } from 'react'
import promoStore from '../../store/promo-store'
import { observer } from "mobx-react-lite";



const HomePage = observer(() => {

    const {promoList, getAllPromo} = promoStore

    useEffect(() => {
        getAllPromo()
    }, [])

    const promoImg = promoList.map(item => item.img)

    return(
        <div className="home-page-container">
            <div className="promo-carousel-containeer">
                <CarouselComponent imgList = {promoImg}/>
            </div>
            <div className="home-page-menu-container">
                <HomePageMenuItem page ='pizza' name ='Піца' img = 'pizza.jpg'/>
                <HomePageMenuItem page ='burger' name ='Бургер' img = 'burger.jpg'/>
                <HomePageMenuItem page ='rolls' name ='Роли' img = 'rolls.webp'/>
                <HomePageMenuItem page ='sets' name ='Сети' img = 'set.webp'/>
                <HomePageMenuItem page ='sushi' name ='Суші' img = 'sushi.webp'/>
            </div>
            
        </div>
    )
})

export default HomePage 