import {Fragment} from 'react';

import mealsImg from '../../assets/meals.jpg';
import Styled from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return <Fragment>
    <header className={Styled.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={Styled['main-img']}>
        <img src={mealsImg} alt='A Table Four Meals!'/>
    </div>
  </Fragment>
}

export default Header