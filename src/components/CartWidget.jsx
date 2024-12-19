import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { getTotalUnits } = useCart();
  const itemsInCart = getTotalUnits();

  return (
    <div className="cart-widget" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={20} style={{ color: 'white', marginRight: '15px' }} />
      {itemsInCart > 0 && (
        <Badge pill bg="dark" style={{ position: 'absolute', top: 0, right: -25 }}>
          {itemsInCart}
        </Badge>
      )}

    </div>
  );
}

export default CartWidget;
