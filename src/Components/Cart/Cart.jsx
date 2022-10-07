
import { useContext,useState } from 'react';
import Modal from '../UI/Modal';
import AuthContext from '../Store/AuthContext';
import CartItem from './CartItem';
import CartContext from '../Store/CartContext';
import Checkout from './Checkout';
import Styled from './Cart.module.css';
const Cart = () => {
  const ctx=useContext(AuthContext);

  const cartCtx=useContext(CartContext);

  const [isCheckout,setIsCheckout]=useState(false);

  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem=cartCtx.item.length <1;

  const cartItemRemoveHandel = (id) =>{
    cartCtx.removeItem(id);
  };
  const cartItemAddHandel = item =>{
    cartCtx.addItem({...item,amount:1});
  };
    const cartItem=<ul className={Styled['cart-items']}>
        {cartCtx.item.map(item => 
        <CartItem
            key={item.id} 
            name={item.name} 
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandel.bind(null,item.id)}
            onAdd={cartItemAddHandel.bind(null,item)}
            />)}
    </ul>;

    const orderHandler=()=>{
      setIsCheckout(true);
    }

    const submitHandler = userData =>{
      fetch('https://http-database-17681-default-rtdb.firebaseio.com/order.json',{
        method:'POST',
        body:JSON.stringify({
          user:userData,
          orderItems:cartCtx.item
        })
      })
    }

    const modalInstraction =<div className={Styled.actions}>
    <button className={Styled['button--alt']} onClick={ctx.HiddenCartHandel}>Close</button>
    {!hasItem &&<button className={Styled.button} onClick={orderHandler}>Order</button>}
</div>;
  return(
  <Modal >
    {cartItem}
    <div className={Styled.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
    </div>
    {isCheckout &&<Checkout onConfarm={submitHandler} onCancel={()=>setIsCheckout(false)}/>}
    {!isCheckout && modalInstraction}
  </Modal>
  );
}

export default Cart