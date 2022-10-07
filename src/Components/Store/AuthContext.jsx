import React,{useState} from 'react'

const AuthContext =React.createContext(
    {
        cartIsShown:false,
        ShowCartHandel:()=>{},
        HiddenCartHandel:()=>{},
    }
);

export const AuthContextProvider=props =>{
    const [cartIsShown, setCartIsShown]=useState(false);

    const ShowCartHandel=()=>{
    setCartIsShown(true);
    }

    const HiddenCartHandel=()=>{
    setCartIsShown(false);
    }

    return <AuthContext.Provider value={{
        cartIsShown:cartIsShown,
        ShowCartHandel:ShowCartHandel,
        HiddenCartHandel:HiddenCartHandel,
    }}>{props.children}</AuthContext.Provider>

}

export default AuthContext