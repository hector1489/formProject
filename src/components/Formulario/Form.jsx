import React, { useState } from 'react'
//Luego de presionar el botón de iniciar sesión, el componente Alert debe mostrar un
//mensaje indicando al usuario si el registro fue exitoso o si los campos se encuentran
//vacíos.
//○ Utiliza los props para mostrar un mensaje de error o de éxito.
//○ Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta
//(success o danger) según corresponda.
//○ Como recordatorio, debes tener un state en el componente App que
//almacene el mensaje de
import Alert from '../Alert/Alert'

const Form = () => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const [email, setEmail] = useState('');

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleConfirmPassword = () => {
    if (pass === confirmPass) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
    handleConfirmEmail();
  };

  const handleConfirmEmail = () => {
    if (emailRegex.test(email) === false) {
      alert('Ingresa un correo válido');
    }
  }

  const handlerSend = (e) => {
    e.preventDefault()
    console.log('me enviaste')
  }

  return (
    <form onSubmit={handlerSend}>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input type="name" className="form-control" id="exampleInputName" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Pass" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="ConfirmPass" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success" onClick={handleConfirmPassword}>Check Password</button>
      {showAlert && (
        <Alert texto="¡Éxito!" color="success" />
      )}
      {!showAlert && (
        <Alert texto="Error" color="danger" />
      )}
    </form>
  );
}

export default Form
