import React from 'react';
import '../../App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
const HeaderPage = () => {
    return ( <>
        <header>
            <div className="container-flex">
                <img src ="https://stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png"/>

                <div className="search">
                    <input value="" placeholder="Buscar Productos..."/>
                    <SearchIcon className="icono" />

                </div>
                <div className="options">
                    <div className="option">
                        <PermIdentityIcon />
                        <span>Mi Cuenta</span>
                    </div>
                    <div className="option">
                        <HelpIcon />
                        <span>Preguntas Frecuentes</span>
                    </div>
                    <div className="option">
                        <ShoppingCartIcon />
                        <span>Carrito</span>
                    </div>
                </div>
            </div>
        </header>
        <nav>
            <div className="container-flex-btw">
                <div className="menu">
                    <a>
                        Inicio
                    </a>
                    <a>
                        Quienes Somos
                    </a>
                    <a>
                        Productos
                    </a>
                    <a>
                        Curso Inicial de Barberia
                    </a>
                    <a>
                        Red One USA
                    </a>
                    <a>
                        Contacto
                    </a>
                </div>
                <div className="carrito">
                    <span>
                        $213.00
                    </span>
                    <LocalMallIcon/>
                </div>
            </div>
        </nav>
    </> );
}
 
export default HeaderPage;