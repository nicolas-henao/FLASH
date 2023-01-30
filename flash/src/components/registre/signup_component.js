import React from "react";

const register = () => {
  const data = {
    'nombre': "",
    'apellido': "",
    'correo': "",
    'id': "",
    'contrasena1': "",
    'telefono': "",
    'direccion': "",
  }
    ;
  const handleChange = (e) => {

    data[e.target.name] = e.target.value;
    console.log(data);
  }

  const handleSubmit = () => {

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3105/registro', requestInit)
      .then((result) => {
        return result.json();
      }).catch((err) => {
        console.log(err);
      });

  }

  return (
    <>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input onChange={handleChange} name="nombre" type="text" className="form-control" id="name" placeholder="Nombre...." />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellidos:</label>
          <input onChange={handleChange} name="apellido" type="text" className="form-control" id="lastName" placeholder="Apellidos...." />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Eletronico:</label>
          <input onChange={handleChange} name="correo" type="text" className="form-control" id="correo" placeholder="correo...." />
        </div>
        <div className="form-group">
          <label htmlFor="id">Numero de identificacion:</label>
          <input onChange={handleChange} name="id" type="number" className="form-control" id="id" placeholder="id....." />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input onChange={handleChange} name="contraseña1" type="password" className="form-control" id="password" placeholder="password...." />
        </div>
        <div className="form-group">
          <label htmlFor="telepon">Telefono:</label>
          <input onChange={handleChange} name="telefono" type="number" className="form-control" id="telepon" placeholder="Numero telefonico...." />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Direccion:</label>
          <input onChange={handleChange} name="direccion" type="text" className="form-control" id="fname" placeholder="Direccion de residencia...." />
        </div>
        <a href="/">
        <button type="submit">Registrarse</button>
        </a>
      </form>
      <a href="/login">ya tengo una cuenta</a>
    </>

  )
}

export default register;