import React from 'react';

import{ Link} from 'react-router-dom';
import logoImg from '../img/logo.png';
import { FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';



export default function Profile(){

    return(
        <div className="Profile-container">

            <header>

                <img src={logoImg} alt="logo" />

                <span>Bem vinda, APAD</span>

                <Link className="button"to="/Incidents/new" > cadastra novo caso
                    <FiPower size={16} color="#e02041"/>
                    
                </Link>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <span>Caso:</span>
                    <p>Caso teste</p>

                    <span>Descrição</span>
                    <p>Descrição teste</p>

                    <span>Valor</span>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #e02041" />
                    </button>
                </li>

                <li>
                    <span>Caso:</span>
                    <p>Caso teste</p>

                    <span>Descrição</span>
                    <p>Descrição teste</p>

                    <span>Valor</span>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #e02041" />
                    </button>
                </li>

                <li>
                    <span>Caso:</span>
                    <p>Caso teste</p>

                    <span>Descrição</span>
                    <p>Descrição teste</p>

                    <span>Valor</span>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #e02041" />
                    </button>
                </li>

                <li>
                    <span>Caso:</span>
                    <p>Caso teste</p>

                    <span>Descrição</span>
                    <p>Descrição teste</p>

                    <span>Valor</span>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color=" #e02041" />
                    </button>
                </li>
            </ul>

        </div>
    );
}