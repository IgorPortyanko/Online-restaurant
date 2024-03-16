import { Link } from 'react-router-dom'

interface HomePageMenuItemProps {
    page: string;
    name: string;
    img: string
}


const HomePageMenuItem:React.FC<HomePageMenuItemProps> = ({page, name, img}) => {

    return(
        <Link to={`/${page}`}>
            <div className="home-page-menu">
                <div className="home-page-menu-img">
                <img src={`./img/mainPageMenu/${img}`} alt="" />
                </div>
                <div className="home-page-menu-position">{name}</div>
            </div>
        </Link>
    )
}

export default HomePageMenuItem