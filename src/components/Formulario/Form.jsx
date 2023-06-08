import React, { useState } from 'react'
//Luego de presionar el botón de iniciar sesión, el componente Alert debe mostrar un
//mensaje indicando al usuario si el registro fue exitoso o si los campos se encuentran
//vacíos.
//○ Utiliza los props para mostrar un mensaje de error o de éxito.
//○ Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta
//(success o danger) según corresponda.
//○ Como recordatorio, debes tener un state en el componente App que
//almacene el mensaje de
const Form = () => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showAlert, setShowAlert] = useState(false)


  const handleConfirmPassword = () => {
    if (pass === confirmPass) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Pass" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="ConfirmPass" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="button" className="btn btn-success" onClick={handleConfirmPassword}>Check Password</button>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          ¡Éxito!
        </div>
      )}
      {!showAlert && (
        <div className="alert alert-danger" role="alert">
          Error
        </div>
      )}

    </form>
  );
}

export default Form
