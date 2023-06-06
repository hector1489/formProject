import React from 'react'

const socialButton = () => {
    const handlerPass = () => {
        if (pass === confirmPass){
            return alert('son iguales')
        }
        alert('no son iguales')
    }

    return (
        <>
        <button onClick={handlerPass}>Iniciar sesion</button>
        </>
    );
}

export default socialButton;


