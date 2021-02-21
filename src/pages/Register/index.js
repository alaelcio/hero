import React from 'react';
import { Link } from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../img/logo.png';
import './styles.css';

export default function register(){

    return(

        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"/>
                    <h1>cadastro</h1>
                    
                    <p>Faça seu cadastro, entre na plataforma e ajude passoas a encontra os casoda sua ONG.</p>

                    <Link className="back-link"to="/" >
                    <FiArrowLeft size={16} color="#e02041"/>
                    Não tenho cadastro
                </Link>
                     
                </section>
                <form >

                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="whatsApp" />

                    <div className="input-grup">
                        <input placeholder="UF" style={{ width: 80,}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>


                    </form>
            </div>

        </div>
    );
}