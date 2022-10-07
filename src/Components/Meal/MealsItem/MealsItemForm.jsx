import React,{useRef,useState} from 'react'
import Input from '../../UI/Input';
import Styled from './MealsItemForm.module.css';

const MealsItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true);
  const inputRef=useRef();

  const submitHandel= (event)=>{
    event.preventDefault();
    const enteredAmount=inputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    if(
      enteredAmount.trim().length===0 ||
      enteredAmountNumber <1 ||
      enteredAmountNumber >5){
        setAmountIsValid(false);
        return;
      }

      props.onAddAmount(enteredAmountNumber);

  }

  return <form className={Styled.form} onSubmit={submitHandel}>
    <Input
      ref={inputRef}
      label={'Amount'}
      input={{
      id:'amount',
      type:'number',
      min:'1',
      max:'5',
      defaultValue:'1',
      step:'1',
    }}/>
    <button>+ Add</button>
    {!amountIsValid && <p>Amount Is Not Valid (1 to 5)</p>}
  </form>
}

export default MealsItemForm