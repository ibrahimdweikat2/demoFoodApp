import { useContext } from 'react';
import MealsItemForm from './MealsItemForm';
import Styled from './MealsItem.module.css';
import CartContext from '../../Store/CartContext';

const MealsItem = (props) => {
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;

    const onAddToCartHandel= amount =>{
      cartCtx.addItem({
        id:props.id,
        name:props.Name,
        amount:amount,
        price:props.price,
      })
    }
  return <li className={Styled.Meal}>
    <div>
        <h3>{props.Name}</h3>
        <div className={Styled.description}>{props.Description}</div>
        <div className={Styled.price}>{price}</div>
    </div>
    <div>
        <MealsItemForm onAddAmount={onAddToCartHandel}/>
    </div>
  </li>
}

export default MealsItem