import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState={
    item:[],
    totalAmount:0,
};

const cartReducer=(state,action)=>{
    if(action.type === 'ADD_ITEM'){
        const updateNewTotalAmount=state.totalAmount +action.item.price * action.item.amount;
        const exitingCartItemIndex=state.item.findIndex(
            item => item.id === action.item.id
        );
        const exitingCartItem =state.item[exitingCartItemIndex];
        let updateNewItems;
        if(exitingCartItem){
            const updateNewItem={
                ...exitingCartItem,
                amount:exitingCartItem.amount + action.item.amount,
            };
            updateNewItems=[...state.item]
            updateNewItems[exitingCartItemIndex]=updateNewItem;
        }else{
            updateNewItems=state.item.concat(action.item);
        }
        
        return {
            item:updateNewItems,
            totalAmount:updateNewTotalAmount,
        }
    }

    if (action.type === 'REMOVE') {
        const exitingCartItemIndex=state.item.findIndex(
            item => item.id ===action.id
        );
        const exitingCartItem=state.item[exitingCartItemIndex];
        const updateTotalAmount =state.totalAmount - exitingCartItem.price;
        let updateItems;
        if(exitingCartItem){
            if(exitingCartItem.amount === 1){
                updateItems=state.item.filter(item => {
                    return item.id !== action.id;
                });
            }else if(exitingCartItem.amount > 1){
                const updateNewItem ={...exitingCartItem,amount:(exitingCartItem.amount-1)};
                updateItems=[...state.item];
                updateItems[exitingCartItemIndex]=updateNewItem;
            }
        }
        return {
            item:updateItems,
            totalAmount:updateTotalAmount,
        }
    }
    
    return defaultState;
}

const CartContextProvider =props=>{
    const [cartState,dispatchCartState]= useReducer(cartReducer,defaultState);
    const addItemCartHandeler=item =>{
        dispatchCartState({type:'ADD_ITEM',item:item});
    }

    const removeItemCartHandeler=id =>{
        dispatchCartState({type:'REMOVE',id:id});
    }

    const cartContext={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addItem:addItemCartHandeler ,
        removeItem: removeItemCartHandeler,
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;