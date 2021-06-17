import React from "react";
import { Link } from "react-router-dom";
import {MDBBtn} from "mdbreact"
import "./Footer.css";
const Footer = () => {
 

  return (
    <footer className="footer">
      <div className="bg-blue py-4">
        <div className="row px-3">
          <div className="social-contact ml-4 ml-sm-auto">
            <span className="fa fa-facebook mr-4 text-sm" />
            <span className="fa fa-google-plus mr-4 text-sm" />
            <span className="fa fa-linkedin mr-4 text-sm" />
            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />
          </div>
        </div>
        <div className="info">
          <div className="content">
            <h1>INFORMATION</h1>
            <ul>
              <li>
                <a href="/a">
                  Expédition &amp; retours
                </a>
              </li>
              <li>
                <a href="/a">
                  Achats sécurisé
                </a>
              </li>
              <li>
                <a href="/a">
                  Statut de la commande
                </a>
              </li>
              <li>
                <a href="/a">Mode de paiement</a>
              </li>
              <li>
                <a href="/a">
                  À propos de nous
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h1>NOS SERVICES</h1>
            <ul>
              <li>
                <a href="/a">Nos magasins</a>
              </li>
              <li>
                <a href="/a">
                  Service Clients
                </a>
              </li>
              <li>
                <a href="/a">
                  Service aprés vente{" "}
                </a>
              </li>
              <li>
                <a href="/contact">Nous contacter</a>
              </li>
              <li>
                <a href="/a">
                  Suivez vos commandes
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h1>INFORMATIONS DE CONTACT</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Ariena , Tunisie
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> (+216) 58 811 554
              </li>
              <li>
                <i className="fas fa-envelope"></i> Aymen.bnmohamed@gmail.com
              </li>
              <li>
                <i className="fas fa-clock"></i>7 jours sur 7,
                <br />
                Du Lundi Au Samedi: 08h00 à 19h00
                <br />
                Dimanche: 09h00 à 15h00
              </li>
            </ul>
          </div>
          <div className="content ">
            <h1>SUIVEZ NOUS</h1>
            <div className="social">
              <div className="facebook text-center mr-3">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="twitter text-center mr-3">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="linkedin text-center mr-3">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <Link to="/contact">
              <MDBBtn gradient="purple" className="contactt">Contact Us</MDBBtn>
            </Link>
            
          </div>
        </div>
        <div className="container">
          <div className="payment">
            <img
              className="mark-lazy"
              src="https://mk-media.mytek.tn/media/wysiwyg/payments/payment.png"
              alt="Payments"
              width="370"
              height="32"
            />
          </div>
          <small className="Copyright">
            Copyright © Projet Final 2021 Aymen Ben Ayed .Tous droits réservés.
          </small>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
