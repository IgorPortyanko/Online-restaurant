import '../components_style/CartModal.css'
import { CloseCircleOutlined } from '@ant-design/icons'
import { useRef, useEffect } from 'react';
import CartList from './CartList';
import { observer } from "mobx-react-lite";
import cartStore from '../../store/cart-store';


interface CartModalProps {
    onClose: () => void;
    isOpen: boolean
}

const CartModal: React.FC<CartModalProps> = observer(({onClose, isOpen}) => {

    const modalRef = useRef<HTMLDivElement>(null)

    const { countTotalSum } = cartStore
    const totalSum = countTotalSum()

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

    return(
        <div className={`cart-modal-container ${isOpen ? 'open' : ''}`} ref={modalRef} >
            <div className="cart-modal-header">
                <div className="cart-modal-close">
                <CloseCircleOutlined 
                    style={{color: 'red'}}
                    onClick={onClose}
                />
                </div>
                <h2>Корзина товарів</h2>
            </div>
            <CartList/>
            <div className="cart-modal-footer">
                <div className="cart-modal-total-price-container">
                    <div className="cart-modal-total-price">
                        <span>До оплати:</span>
                    </div>
                    <div className="cart-modal-total-price-sum">
                        {totalSum} грн
                    </div>
                </div>
                <div className="cart-modal-checkout-container">
                    <button>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                </div>
            </div>
        </div>
    )
})

export default CartModal