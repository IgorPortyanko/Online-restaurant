import {FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons'
import './components_style/Footer.css'

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <ul className="footer-list">
                        <li className="footer-list-name">RuTa</li>
                        <li>Головна</li>
                        <li>Акції</li>
                        <li>Про нас</li>
                        <li>Доставка та оплата</li>
                        <li>Контакти</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <ul className="footer-list">
                        <li className="footer-list-name">Меню</li>
                        <li>Піца</li>
                        <li>Бургери</li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <ul className="footer-list">
                        <li className="footer-list-name">Контакти</li>
                        <li>(096) 555 44 33</li>
                        <li>(050) 555 44 33</li>
                        <li>ruta-pizza@gmail.com</li>
                        <li>Київ, пр. Берестейський 22</li>
                        <li>
                            <FacebookOutlined style={{ fontSize: '24px', marginRight: '20px'}}/> 
                            <TwitterOutlined style={{ fontSize: '24px',marginRight: '20px'}}/> 
                            <InstagramOutlined style={{ fontSize: '24px'}}/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer