import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>FLASH-sale</h1>
            <p>Esparamos que la pagina cumpla sus espectativas y que oe sea de gran ayuda a la hora de ir de compas al sentro comercial</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nosotros</h2>
            <ul>
              <li>Carreras</li>
              <li>Nuestras tiendas</li>
              <li>Nuestras Tarifas</li>
              <li>Terminos y condiciones</li>
              <li>Politicas de privacidad</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Atencion al Cliente</h2>
            <ul>
              <li>Centro de ayuda </li>
              <li>Como comprar </li>
              <li>Rastrea tu pedido </li>
              <li>Compras corporativas y masivas </li>
              <li>Devoluciones y reembolsos </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contáctenos</h2>
            <ul>
              <li>Cra. 14 #6-02, Armenia, Quindío </li>
              <li>Email: FLASH-sale@gmail.com</li>
              <li>Phone: +57 300 7013640</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
