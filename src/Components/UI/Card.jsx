import React from 'react'
import Styled from './Card.module.css';
const Card = (props) => {
  return <div className={Styled.card}>{props.children}</div>
}

export default Card