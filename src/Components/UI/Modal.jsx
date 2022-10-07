import { Fragment,useContext } from 'react';
import ReactDom from 'react-dom';
import AuthContext from '../Store/AuthContext';
import Style from './Modal.module.css';
const Backdrop =() =>{
    const ctx=useContext(AuthContext);
    return <div className={Style.backdrop} onClick={ctx.HiddenCartHandel}/>
}

const ModalOverlay =props =>{
    const classes=`${Style.modal} ${Style['slide-down']}`
    return <div className={classes}>
        <div className={Style.content} >{props.children}</div>
    </div>
}

const Modal = (props) => {
    const portal=document.getElementById('overlays');
    return <Fragment>
        {ReactDom.createPortal(<Backdrop />,portal)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
    </Fragment>
}

export default Modal