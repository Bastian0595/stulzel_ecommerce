import React , { useEffect , useState} from 'react';
import '../../App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuScreen from '../cart/cart'
import { useFormat } from '../../hooks/useFormat';
import { useCategory } from '../../hooks/useCategory';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LazyLoad from 'react-lazyload';

const HeaderPage = ({onAdd,limpiarCarrito, eliminarProducto, productes, total}) => {
    const [format] = useFormat();
    const [ide, setIde] = useState(1);
    const history = useHistory();
    const [values, onChange,] = useForm({
        search:''
    })
    const [listarCategorias, categorias,] = useCategory();
    const {search} = values;
    useEffect(() => {   
        listarCategorias();
    }, []);
    
    const abrirCerrarMenu = () => {
        let menu = document.getElementById("menu2");
        let menu2 = document.getElementById("fondoNegro");
        let menu3 = document.getElementById("cerrar");
        let body = document.getElementsByTagName("body");
        if(menu.style.left === "0px"){
            menu.style.left = "-260px";
            menu2.style.visibility = "hidden";
            menu2.style.opacity = "0";
            menu3.style.top = "35px";
            body[0].style.height = "auto";
            body[0].style.overflow = "visible";
        }else{
            menu.style.left = "0px";
            menu2.style.visibility = "visible";
            menu2.style.opacity = "1";
            menu3.style.top = "20px";
            body[0].style.height = "100vh";
            body[0].style.overflow = "hidden";
        }
    }

    const expandir = () => {
        let doc = document.getElementById("subMenu2");
        if(doc.style.height === "0px"){
            doc.style.height = "auto";
            doc.style.borderBottom = "1px solid black";
            doc.style.marginBottom = "10px";
        }else{
            doc.style.height = "0px";
            doc.style.borderBottom = "0px solid black";
            doc.style.marginBottom = "0px";
        }
    }

    const abrirCart = () => {
        let menu = document.getElementById("cart");
        let menu2 = document.getElementById("fondoNegro2");
        let menu3 = document.getElementById("cerrar2");
        let body = document.getElementsByTagName("body");
        if(menu.style.right === "0px"){
            menu.style.right = "-360px";
            menu2.style.visibility = "hidden";
            menu2.style.opacity = "0";
            menu3.style.top = "35px";
            body[0].style.height = "auto";
            body[0].style.overflow = "visible";
        }else{
            menu.style.right = "0px";
            menu2.style.visibility = "visible";
            menu2.style.opacity = "1";
            menu3.style.top = "20px";
            body[0].style.height = "100vh";
            body[0].style.overflow = "hidden";
        }
    }

    const redireccionar2 = (categoria) => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        setIde(categoria.id);
        localStorage.setItem("categoria", JSON.stringify(categoria));
        history.push(`/productos/${categoria.id}`);
    }

    const abrircuenta = () => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        history.push("/micuenta");
    }

    const redireccionar3 = (ruta) => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        history.push(ruta);
    }

    const buscarProducto = (event) => {
        console.log(event);
        var code = event.keyCode || event.which;
        if(code === 13){
            history.push(`/search/${search}`);
        }
    }

    return ( 
        <>
            <header id="header1">
                <div className="container-flex">
                <LazyLoad><img src ="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/></LazyLoad>
                    <div className="search">
                        <input value={search} onChange={onChange} name="search" id="search" placeholder="Buscar Productos..." onKeyPress={buscarProducto} />
                        <SearchIcon className="icono" />
                    </div>
                    <div className="options">
                        <div className="option" onClick={() => abrircuenta()}>
                            <PermIdentityIcon />
                            <span>Mi Cuenta</span>
                        </div>
                        {/* <div className="option">
                            <HelpIcon />
                            <span>Preguntas Frecuentes</span>
                        </div> */}
                        <div className="option" onClick={abrirCart}>
                            <ShoppingCartIcon />
                            <span>Carrito</span>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mobile">
                <div className="hamburguesa" onClick={() => abrirCerrarMenu()}>
                    <DehazeIcon className="iconHamburguesa" />
                </div>
                <div className="logoMobile">
                    <img src ="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/>
                </div>
                <div className="carritoMobile" onClick={abrirCart}>
                    <LocalMallIcon className="iconoBolsa"/>
                </div>
            </header>
            <nav>
                <div className="container-flex-btw">
                    <div className="menu">
                        <Link onClick={() => redireccionar3("/")}>
                            Inicio
                        </Link>
                        {/* <Link to="/salonlook/index" class="productosMas">Salon Look</Link> */}
                        {/* <div class="productosM">
                            <ExpandMoreIcon class="moreIcon" />
                            <div class="productosVarios">
                                <Link to="/salonlook/salon">Todo Saloon Look</Link>
                                <Link to="/salonlook/invitados">Invitados internacionales</Link>
                                <Link to="/salonlook/index">Batalla de barberos</Link>
                                <Link to="/salonlook/index">Compra tu entrada</Link>
                            </div>
                        </div> */}
                        <div class="productosM">
                            <Link to="/productos/0" class="productosMas">Productos</Link>
                            <ExpandMoreIcon class="moreIcon" />
                            <div class="productosVarios">
                                <Link to="/productos/0">Todos</Link>
                                {categorias != null ? 
                                    categorias.map((element) => {
                                        return (
                                            <>
                                                <a onClick={() => redireccionar2(element)}>{element.name}</a>
                                            </>
                                        )
                                    })
                                    : null
                                }
                            </div> 
                        </div>
                        <Link to="/quienessomos">Quienes Somos</Link>
                        {/* <Link to="/cursos">Curso Inicial Barbería</Link> */}
                        {/* <Link to="/">Red One USA</Link> */}
                        <Link to="/contacto">Contacto</Link>
                        {/* <Link to="/cotizador">Cotizador de Envíos</Link> */}
                        {/* <Link to="/signUp">Rggistro</Link> */}
                        {/* <Link to="/signIn">Iniciar sesion</Link> */}
                    </div>
                    <div className="carrito" onClick={ () => abrirCart()}>
                        <span>
                            ${format(total)}
                        </span>
                        <LocalMallIcon/>
                    </div>
                </div>
            </nav>
            <div class="fondoNegro"  id="fondoNegro">
                <CloseIcon class="cerrarMenu" id="cerrar" onClick={() => abrirCerrarMenu()}/>
                <div class="navMobile" id="menu2">
                    <div class="buscador">
                        <SearchIcon className="searchInput" /> 
                        <input type="text" placeholder="Buscar Productos..." name="search" onChange={onChange} onKeyPress={buscarProducto} />
                    </div>
                    <div class="subMenu">
                        <Link onClick={() =>redireccionar3("/")}>Inicio</Link>
                        {/* <Link onClick={() =>redireccionar3("/salonlook/index")}>Salón Look</Link> */}
                        {/* <div class="productosMobiles" onClick={expandir}>
                            <div class="product-flex">
                                <ExpandMoreIcon />
                            </div>
                            <div className="subMenu2" id="subMenu2">
                                <Link onClick={ () => redireccionar3("/salonlook/salon")}>Todo Salón Look</Link>
                                <Link onClick={ () => redireccionar3("/salonlook/invitados")}>Invitados inernacionales</Link>
                            </div>
                        </div> */}
                        <div class="productosMobiles" onClick={expandir}>
                            <div class="product-flex">
                                <Link>Productos</Link>
                                <ExpandMoreIcon />
                            </div>
                            <div className="subMenu2" id="subMenu2">
                                <Link onClick={() => redireccionar2({id:0})}>Todos los productos</Link>
                                {categorias != null ? 
                                    categorias.map((element) => {
                                        return (
                                            <>
                                                <a onClick={() => redireccionar2(element)}>{element.name}</a>
                                            </>
                                        )
                                    })
                                    : null
                                }
                            </div>
                        </div>
                        <a onClick={() =>redireccionar3("/quienessomos")}>Quienes Somos</a>

                        {/* <Link onClick={() =>redireccionar3("/cursos")}>Curso Inicial de Barbería</Link> */}
                        {/* <Link to="/">Red One USA</Link> */}
                        <Link onClick={() =>redireccionar3("/contacto")}>Contacto</Link>
                    </div>
                    <div class="links">
                        <span>Links de ayuda</span>
                        <Link onClick={() =>redireccionar3("/micuenta")}>Mi Cuenta</Link>
                        <Link to="/">Servicio al cliente</Link>
                    </div>
                    <div class="links">
                        <span>WhatsApp de ventas</span>
                        <a href="https://wa.me/56972321555" target="_blank" className="a">+569 72321555 <WhatsAppIcon className="wspIcon" /> </a>
                    </div>
                    <div class="links">
                        <span>Social</span>
                        <a href="https://www.facebook.com/stulzel" target="_blank" className="a">Facebook <FacebookIcon className="fcbIcon"/> </a>
                        <a href="https://www.instagram.com/stulzel_cl/" target="_blank" className="a">Instagram <InstagramIcon className="insIcon"/> </a>
                    </div>
                </div>
            </div>
            <MenuScreen
                onAdd={onAdd}
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                abrirCart = {abrirCart}
                total = {total}
            />
        </> 
    );
}
 
export default HeaderPage;