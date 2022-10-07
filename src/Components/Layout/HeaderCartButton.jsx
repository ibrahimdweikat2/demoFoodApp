
import { useContext,useEffect,useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import AuthContext from '../Store/AuthContext';
import CartContext from '../Store/CartContext';

const HeaderCartButton = () => {
  const ctx =useContext(AuthContext);
  const cartCtx=useContext(CartContext);
  const [btnIsHidden,setBtnIsHidden] =useState(false);

  const btnClasses=`${classes.button} ${btnIsHidden ? classes.bump : ' '}`;
  useEffect(()=>{
    if(cartCtx.item.length === 0){
      return;
    };
    setBtnIsHidden(true);
    
    const timer=setTimeout(()=>{
      setBtnIsHidden(false);
    },300);
    return ()=>{
      clearTimeout(timer);  
    }
  },[cartCtx.item])
  const numberOfCartIOtem=cartCtx.item.reduce((curr,item)=>{
    return curr +item.amount;
  },0)
  return <button className={btnClasses} onClick={ctx.ShowCartHandel}> 
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Order</span>
    <span className={classes.badge}>{numberOfCartIOtem}</span>
  </button>
}

export default HeaderCartButton