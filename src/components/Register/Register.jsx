import React from 'react'
import Form from '../Formulario/Form'
import SocialButton from '../SocialButton/SocialButton'

const Register = () => {
    //aqui guarde los icon antes de pasarlos al button
  const socialIcon = <i className="fa-brands fa-facebook"></i>;
  const socialIcon2 = <i className="fa-brands fa-github"></i>;
  const socialIcon3 = <i className="fa-brands fa-linkedin"></i>;

  return (
    <div className="card register-card">
      <div className="card-body">
        <h5 className="card-title">Crea una cuenta</h5>

        <div className="card-text">
          <SocialButton icon={socialIcon} />
          <SocialButton icon={socialIcon2} />
          <SocialButton icon={socialIcon3} />
          <p>O usa tu email para registrarte</p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Register
