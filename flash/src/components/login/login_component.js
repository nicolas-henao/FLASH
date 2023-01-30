import React from "react";

const register = () => {
  const data = {
    'correo': "",
    'contraseña': "",

  }
    ;
  const handleChange = (e) => {

    data[e.target.name] = e.target.value;
    console.log(data);
  }

  const handleSubmit = () => {
    const requestInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3105/login', requestInit)
      .then((result) => {
        return result.json();
      }).catch((err) => {
        console.log("----------------------------ERROR----------------------");
        console.log(err);
        console.log("-------------------------------------------------------");
      });

  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Correo:</label>
          <input onChange={handleChange} name="correo" type="text" className="form-control" id="name" placeholder="Correo...." />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Contraseña:</label>
          <input onChange={handleChange} name="contraseña" type="password" className="form-control" id="lastName" placeholder="Contraseña...." />
        </div>
        <a href="/">
          <button type="submit">Entrar</button>
        </a>
      </form>
      <a href="/registre">No tengo cuenta</a>
    </>
  )
}

export default register;