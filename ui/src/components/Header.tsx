import './components_style/Header.css'
import {ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderSushiModal from './HeaderSushiModal'
import CartModal from './cart/CartModal'
import cartStore  from '../store/cart-store'
import { observer } from "mobx-react-lite";

const Header = observer( () => {

    const { cartList, getCartFromLocalStorage } = cartStore

    useEffect (() => {
        getCartFromLocalStorage()
    }, [])


    const [sushiModalIsOpen, setSUshiModalIsOpen] = useState(false)
    const [ cartModalIsOpen, setCartModalIsOpen] = useState(false)

    const handleModalOpen = () => {
        setSUshiModalIsOpen(true)
    }

    const handleModalClose = () => {
        setSUshiModalIsOpen(false)
    }

    const handleCartOpen = () => {
        setCartModalIsOpen(true)
    }

    const handleCartClose = () => {
        setCartModalIsOpen(false);
    }

    return (
        <header className="header">
            {cartModalIsOpen && <CartModal 
                                    onClose={handleCartClose}
                                    isOpen ={cartModalIsOpen}
                                />}
            <div className="header-container">
                <div className="header-logo">
                    <Link to='/'>
                    <img src="./img/logo/logo3.jpeg" alt="ups" />
                    </Link>
                </div>
                <div className="header-nav">
                    <div className="header-nav-top">
                        <ul className="header-nav-top-contacts">
                            <li><Link to='/contacts'>Контакти</Link></li>
                            <li>Час роботи: 10:00 - 21:00</li>
                        </ul>
                        <ul className="header-nav-top-info">
                            <li>Акції</li>
                            <li>Доставка</li>
                        </ul>
                    </div>
                    <div className="header-nav-bottom">
                        <ul className="header-nav-bottom-menu">
                            <li><Link to='/pizza'>Піца</Link></li>
                            <li><Link to='/burger'>Бургери</Link></li>
                            <li 
                                className='header-nav-bottom-menu-sushi'
                                onMouseMove={handleModalOpen}
                                onMouseOut={handleModalClose}
                            >
                                Сушi 
                                {sushiModalIsOpen && <HeaderSushiModal/>}
                            </li>
                           
                        </ul>
                        <ul className="header-nav-bottom-cart">
                            <li>
                                <UserOutlined style={{ fontSize: '30px'}}/>
                            </li>
                            <li style={{position: 'relative'}}>
                                <div className="cart-count"> {cartList.length} </div>
                                <ShoppingCartOutlined
                                style={{ fontSize: '34px'}}
                                onClick={handleCartOpen}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
})

export default Header