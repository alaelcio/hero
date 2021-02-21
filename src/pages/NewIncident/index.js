import React from 'react';

import { Link } from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../img/logo.png';
import './styles.css';


export default function NewIncident(){

    return(

        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo"/>
                <h1>Cadastrar novos casos</h1>
                
                <p>Descreve o caso detalhatamente para encontrar um herói para revolver isso.</p>

                <Link className="back-link"to="/profile" >
                <FiArrowLeft size={16} color="#e02041"/>
                voltar
            </Link>
                 
            </section>
            <form >

                <input placeholder="Titulo do caso" />
                < textarea placeholder="Descrição" />

                <input placeholder="valor em reais" />

                

                <button className="button" type="submit">Cadastrar</button>


                </form>
        </div>

    </div>
    );
}