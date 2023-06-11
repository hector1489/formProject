//Luego de presionar el botón de iniciar sesión, el componente Alert debe mostrar un
//mensaje indicando al usuario si el registro fue exitoso o si los campos se encuentran
//vacíos.
//○ Utiliza los props para mostrar un mensaje de error o de éxito.
//○ Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta
//(success o danger) según corresponda.
//○ Como recordatorio, debes tener un state en el componente App que
//almacene el mensaje de error o de éxito, y pasar mediante props al
//componente Alert y Login.

    const Alert = ({ texto, color }) => {
    return (
      <div className={`alert alert-${color}`} role="alert">{texto}</div>
    );
  };

  export default Alert
