import React from "react";
import './data';
import './styles'

const Login = () => {
    <form onSubmit={this.handleSubmit}>
        <h3>Inicio Sesion</h3>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
  
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" styles={{
             background: "linear-gradient(269.76deg, #FF13CB 34.3%, #F7761A 75.79%)",
          }}>
          Iniciar Sesion 
          </button>
        </div>
        <p className="forgot-password text-right"> ¿No tienes una cuenta? 
          <a href="/sign-up">Registrate</a>
          
        </p>
      </form>
}

export default Login;