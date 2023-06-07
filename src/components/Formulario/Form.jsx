import React, { useState } from 'react'
//hay que sacar el alert al componente
const Form = () => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleConfirmPassword = () => {
    if (pass === confirmPass) {
      alert('exito!');
    } else {
      alert('error');
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
    </form>
  );
}

export default Form
