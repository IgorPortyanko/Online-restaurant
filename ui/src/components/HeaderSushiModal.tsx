import { Link } from 'react-router-dom'


const HeaderSushiModal  = () => {

    return (
        <div>
            <ul className="header-nav-sushi-modal">
                <li><Link to='/sushi'>Суші</Link></li>
                <li><Link to='/rolls'>Роли</Link></li>
                <li><Link to='/sets'>Сети</Link></li>
            </ul>
        </div>
    )
}

export default HeaderSushiModal