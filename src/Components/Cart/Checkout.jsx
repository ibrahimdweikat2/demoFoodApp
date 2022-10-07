import { useRef,useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty =(value) =>{
  return value.trim() === '';
}

const isFiveIdel = value =>{
  return value.trim().length === 5;
}

const Checkout = (props) => {
  const enteredName=useRef();
  const enteredStreet=useRef();
  const enteredPostalCode=useRef();
  const enteredCity=useRef();

  const [formState,setFormState]=useState({
    name:true,
    street:true,
    postalCode:true,
    city:true
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterdName=enteredName.current.value;
    const enterdStreet=enteredStreet.current.value;
    const enterdPostalCode=enteredPostalCode.current.value;
    const enterdCity=enteredCity.current.value;

    const enteredNameValid=!isEmpty(enterdName);
    const enteredStreetValid=!isEmpty(enterdStreet);
    const enteredPostalCodVaild=isFiveIdel(enterdPostalCode);
    const enteredCityValid=!isEmpty(enterdCity);

    setFormState({
      name:enteredNameValid,
      street:enteredStreetValid,
      postalCode:enteredPostalCodVaild,
      city:enteredCityValid
    });

    const formValidate=enteredNameValid && enteredStreetValid 
    && enteredCityValid && 
    enteredPostalCodVaild;

    if(!formValidate){
      return;
    }

    props.onConfarm({
      name:enterdName,
      street:enterdStreet,
      postalCode:enterdPostalCode,
      city:enterdCity
    });
    props.onCancel();

  };//endSubmit

  const nameClassesControl=`${classes.control} ${formState.name ? ' ':classes.invalid}`;
  const streetClassesControl=`${classes.control} ${formState.street ? ' ':classes.invalid}`;
  const postalCodeClassesControl=`${classes.control} ${formState.postalCode ? ' ':classes.invalid}`;
  const cityClassesControl=`${classes.control} ${formState.city ? ' ':classes.invalid}`;



  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassesControl}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={enteredName}/>
        {!formState.name && <p>Please Enter A Valid Name</p>}
      </div>
      <div className={streetClassesControl}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={enteredStreet}/>
        {!formState.street && <p>Please Enter A Valid Street</p>}
      </div>
      <div className={postalCodeClassesControl}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={enteredPostalCode}/>
        {!formState.postalCode && <p>Please Enter A Valid Postal Code (length 5)</p>}
      </div>
      <div className={cityClassesControl}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={enteredCity}/>
        {!formState.city && <p>Please Enter A Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;