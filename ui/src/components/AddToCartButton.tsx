import {ShoppingCartOutlined } from '@ant-design/icons'
import { cartItemIF } from '../models/models'

interface AddButtonProps {
    addItem: (item: cartItemIF) => void
    item:cartItemIF
}

const AddToCartButton: React.FC<AddButtonProps> = ({addItem, item}) => {

    const handleAdd = () => {
        addItem(item)
    }

    return(
        <div className="menu-card-button-add">
            <button onClick={handleAdd}><ShoppingCartOutlined/> В КОШИК</button>
        </div>
    )
}

export default AddToCartButton