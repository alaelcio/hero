import React from 'react';
import{ Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logoImg from '../img/logo.png';
import heroImg from '../img/hore.png';

export default function Logon (){

    return (

        <div className="logon-container">

            <section className="form">
             <img src={logoImg} alt="logo"/>

             <form>
                <h1>Faça seu logon</h1>
                <input placeholder="sua 10"/>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link"to="/ register" >
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                </Link>
             </form>
            </section>
            
            <img src= {heroImg} alt="Be THe HERO"/>
        </div>
    );
}