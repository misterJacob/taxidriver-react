import ReactWhatsapp from "react-whatsapp";

export default function Nav(){

  function openModal(){
    console.log('modal opened')
    const modalEmail = document.querySelector('.modal-email')
    modalEmail.classList.add('modal-open')
    }
  

    return (
      <nav>
        <div className="navigation">
          <a className="item sms" href="mailto:taxi245sanbartolome@gmail.com">
            <p>Send en Email</p>

            <i className="icon fa-solid fa-envelope"></i>
          </a>
          <a className="item" href="https://wa.me/qr/PM7TJB2G2F2HA1">
            <p>Send en WhatApp</p>
            <i className="icon fa-brands fa-whatsapp"></i>
          </a>
          <a
            className="item messenger"
            href="https://www.facebook.com/Taxi245maspalomas"
          >
            <p>Send en Messenger</p>
            <i className="icon fa-brands fa-facebook-messenger"></i>
          </a>
          <a className="item send-email" onClick={openModal}>
            <p>Send en Besked</p>
            <i className="icon fa-regular fa-message"></i>
          </a>
          <a className="item call" href="tel:+34669997156">
            <p>Ring directe til din taxa</p>
            <i className="icon fa-solid fa-square-phone"></i>
          </a>
          <a
            href="https://www.facebook.com/TaxiDrivermaspalomas/"

            className="item link-face"
          >
            <p>Følg mig på Facebook</p>
            <i className="icon fa-brands fa-facebook"></i>
          </a>
        </div>
      </nav>
    );
}