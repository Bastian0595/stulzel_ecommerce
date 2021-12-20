import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useCart } from '../hooks/useCart';
import { useProduct } from '../hooks/useProduct';
import { useFormat } from '../hooks/useFormat';
import { useRedirect } from '../hooks/useRedirect';
import { productoHelper } from '../helpers/productos';
import { Link } from 'react-router-dom';
import redone from '../assets/img/redone.png';
import look from '../assets/img/look.png';
import logos from '../assets/img/logos.png';
import aroluz from '../assets/img/aroluz.jpg';
import logo from '../assets/img/logo.png';
import Footer1 from '../components/footer/Footer1';
import Footer2 from '../components/footer/Footer2';
import NavBar from '../components/nav/nav';
import ReactPixel from 'react-facebook-pixel';
import { geoLocalizacion } from '../api/apiConversion';
import LazyLoad from 'react-lazyload';
import BtnWhatsApp from '../components/btnWhatsapp/btnWhatsApp';
import Popup from '../components/suscribe/popup';
import { useHistory } from 'react-router';
const HomeScreen = () => {
    const history = useHistory();
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [aviador, praga, escocia, premiunBlack] = productoHelper();
    const [productos, getProducts,,,,redireccionar ] = useProduct();
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const [redirectWhatsApp, redireccionarInstagram] = useRedirect();
    const [format] = useFormat();
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: false, // enable logs
      };
      const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
    useEffect(() => {
        getProducts();
        ReactPixel.init("495580404127215",advancedMatching,options);
        ReactPixel.pageView();
        localizando();
    },[]);
    const localizando = async () => {
       const resultado = await geoLocalizacion();
       localStorage.setItem("ip", JSON.stringify(resultado.ip))
    //    console.log(resultado);
    }
    const redirect = (num) => {
        history.push(`producto/${num}`)
    }
    return (
        <>
        <div className="fondo">
            <NavBar
                onAdd={onAdd}
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                total = {total}
            />
            <div className="header">
                <div className="border">
                    <div className="row-flex">
                        <div className="col-1">
                            <img src={redone} alt="logo"  /> 
                        </div>
                        <div className="col-2">
                            <span className="titulo1">
                                Si eres Barbería
                                o Salón de belleza <br/> y te haces distribuidor obtendrás un
                            </span>
                            <span className="titulo2">
                            20% DE BONIFICACIÓN <br/> Y ENVÍO GRATIS
                            </span>
                            <span className="titulo1">
                                a la sucursal del courier
                                más cercano a tu domicilio.
                            </span>
                            <div className="button">
                                <button onClick={ () => redirectWhatsApp("56972321555")}>Envianos un WhatsApp Aquí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="bannerSalon">
                <span>2a VERSIÓN DEL ENCUENTRO PROFESIONAL DE LA IMAGEN Y LA ESTÉTICA INTEGRAL </span>
                <img className="look" src={look} alt="look" />
                <img className="logos" src={logos} alt="logos" />
                <div>
                    <Link to="/salonlook/index">Conoce Más</Link>
                </div>
            </div> */}
            <section className="topSales">
                <div className="raw">
                    <div className="tituloProductosDestacados"> Productos Destacados </div>
                </div>
                <div className="raw">
                    <div className="col" onClick={() => redirect(31090)}>
                        <div className="mitad1">
                            <span className="titulo">
                                Sillón de Barbería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Modelo Aviador
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $329.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <LazyLoad>
                                <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/SILLONES-2020-6C-scaled-1-600x664.jpg" alt="stulzel" />
                            </LazyLoad>
                        </div>
                    </div>
                    <div className="col" onClick={() => redirect(1078)}>
                        <div className="mitad1">
                            <span className="titulo">
                                Sillón de Barbería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Modelo Praga
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $429.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <LazyLoad>
                                <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/SILLONES-2020-4B-scaled-1-600x752.jpg" alt="stulzel" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
                <div className="raw">
                    <div className="col" onClick={() => redirect(38920)}>
                        <div className="mitad1">
                            <span className="titulo">
                                Sillón de Peluquería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Lady Di
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $264.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <LazyLoad>
                                <img src="https://admin.stulzel.com/wp-content/uploads/2021/08/20210311-Stulzel0118-scaled.jpg" alt="stulzel" />
                            </LazyLoad>
                        </div>
                    </div>
                    <div className="col" onClick={() => redirect(31095)}>
                        <div className="mitad1">
                            <span className="titulo">
                                Lavapelo
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Premiun Black
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $499.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <img src="https://admin.stulzel.com/wp-content/uploads/2021/05/premiun_black.jpg" alt="stulzel" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mayorista">
                <div className="raw"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.47 51.27" width="200"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M91.88,36.12a8.37,8.37,0,0,0-8.13,7.35,6.95,6.95,0,0,0,7,7.8,8.37,8.37,0,0,0,8.13-7.35,6.95,6.95,0,0,0-7-7.8ZM88,43.92a4,4,0,0,1,3.85-3.5,2.71,2.71,0,0,1,2.06.87,2.76,2.76,0,0,1,.66,2.18h0A4,4,0,0,1,90.75,47a2.7,2.7,0,0,1-2.06-.86A2.77,2.77,0,0,1,88,43.92Z"></path><path d="M97.54,13.14h0a5,5,0,0,0-3.87-2H84.9A3.36,3.36,0,0,0,81.58,14l-1,8.55a2.73,2.73,0,0,0,.74,2.2,3,3,0,0,0,2.19.91h18.23A2.41,2.41,0,0,0,104,24.61a2,2,0,0,0-.19-2.23Zm-13,9.11a.22.22,0,0,1-.18-.07.24.24,0,0,1,0-.18l.76-7.06a.59.59,0,0,1,.53-.47h7.45a1.87,1.87,0,0,1,1.3.66L99,22.25Z"></path><path d="M112.14,22.94,101.86,7.86a6.94,6.94,0,0,0-5.23-2.63H80.47A4.5,4.5,0,0,0,76,9L72.8,38.15a3.62,3.62,0,0,0,1,2.93,4,4,0,0,0,2.94,1.22h4.56s1.86-8.51,10.32-8.56c9.24-.07,10.36,8.54,10.36,8.54h5.89a4.5,4.5,0,0,0,4.45-3.81l1.13-10.2A8.94,8.94,0,0,0,112.14,22.94Zm-2.62,4.85-1.09,9.84a1.13,1.13,0,0,1-1.08.91h-2c-2.76-6.67-7.93-8.84-13.36-8.84a14.84,14.84,0,0,0-13.89,9l-.8-.16a.62.62,0,0,1-.44-.16.49.49,0,0,1-.12-.41L79.83,9.87A1.12,1.12,0,0,1,80.9,9H96.51a3.36,3.36,0,0,1,2.34,1.13l9.92,14.57A5.7,5.7,0,0,1,109.52,27.79Z"></path><path d="M40.5,36.12a8.38,8.38,0,0,0-8.14,7.35,6.95,6.95,0,0,0,7,7.8,8.37,8.37,0,0,0,8.13-7.35,6.93,6.93,0,0,0-7-7.8Zm-3.86,7.8a4,4,0,0,1,3.86-3.5,2.64,2.64,0,0,1,2.71,3A4,4,0,0,1,39.36,47a2.71,2.71,0,0,1-2.06-.86A2.81,2.81,0,0,1,36.64,43.92Z"></path><path d="M22.35,14.46A2.39,2.39,0,0,0,20,12.07H2.39a2.39,2.39,0,0,0,0,4.78H20A2.4,2.4,0,0,0,22.35,14.46Z"></path><path d="M73.27,1.1A3.37,3.37,0,0,0,70.74,0H29a4,4,0,0,0-3.86,3.49L25,4.92H10.26a2.39,2.39,0,0,0,0,4.78H24.52l-1,9.51H18.69a2.39,2.39,0,0,0,0,4.78H23l-.25,2.37h-10a2.39,2.39,0,0,0,0,4.78h9.52l-.74,7a3.35,3.35,0,0,0,.84,2.64,3.31,3.31,0,0,0,2.52,1.11h5.86S31.94,34,40,33.7c9.06-.28,10.44,8.24,10.44,8.24H66.62a4,4,0,0,0,3.85-3.49L74.1,3.74A3.37,3.37,0,0,0,73.27,1.1ZM67,37.3a1.4,1.4,0,0,1-1.32,1.21H53.87a13.55,13.55,0,0,0-13-8.85c-6.46.07-11,3.35-13.14,8.85H26.08a.85.85,0,0,1-.65-.27.87.87,0,0,1-.2-.69L28.67,4.63A1.42,1.42,0,0,1,30,3.42H69.56a.85.85,0,0,1,.65.28.9.9,0,0,1,.21.69Z"></path></g></g></svg>
                    <h3 className="envioGratis"> ENVÍO INMEDIATO </h3> 
                    <h3 className="despacho"> DESPACHO EN 24 HORAS </h3>  
                    <h3 className="santiago"> SANTIAGO </h3>   
                </div>  
            </section>
            <section className="productos">
                <h2>
                    Productos más vendidos
                </h2>
                <div className="raw"> 
                    {productos.map((element) => {
                        const imagen = element.images.length > 0 ? element.images[0].src : "";
                        return (
                            <div className="columnas">
                                <div className="card">
                                    <LazyLoad>   
                                        <img src={imagen} alt="" onClick={() => redireccionar(element)} />
                                    </LazyLoad>   
                                    <div className="detalles" onClick={() => redireccionar(element)}>
                                        <span className="titulo">
                                            {element.name}
                                        </span>
                                        <span className="regularPrice">
                                            ${format(element.regular_price)}
                                        </span>
                                        <span className="price">
                                            ${format(element.price)}
                                        </span>
                                    </div>
                                    <div className="booton">
                                        <button onClick={() => onAdd(element)}>
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        )
                    })}
                </div>  
            </section>
            <div className="header2">
                <div className="row-flex2">
                    <div className="col-2">
                        <span className="titulo2">
                            Síguenos en Instagram
                        </span>
                        <span className="titulo1">
                        Síguenos y podrás enterarte de ofertas, descuentos, eventos y actividades que desarrollamos continuamente, así no te perderás ninguna de las novedades que tenemos cada semana.
                        <br/>
                        <br/>
                        ¡SEGUIMOS CONECTADOS!
                        </span>
                        <div className="button">
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<InstagramIcon />}
                            onClick={() => redireccionarInstagram()}
                        >
                            SIGUENOS AQUÍ
                        </Button>
                        </div>
                    </div>
                    <div className="col-1">
                        <LazyLoad>  <img src={logo} alt="logo2"  /> </LazyLoad> 
                    </div>
                </div>
            </div>
            {/* <div className="header3">
                <div className="row-flex2">
                    <div className="col-2">
                        <span className="titulo2">
                            ¡OFERTA DE LA SEMANA!
                        </span>
                        <span className="titulo1">
                        Aro de luz profesional 45 pulgadas de diámetro, cargador USB para celular incorporado, luz fría, luz cálida, bolso de transporte, ajuste de altura de más de 2 metros, pantalla LED, uso de batería opcional.
                        <br/>
                        <br/>
                        *Baterias y cargador de baterias se venden por separado
                        </span>
                        <div className="button">
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            VER PRODUCTO
                        </Button>
                        </div>
                    </div>
                    <div className="col-1">
                        <LazyLoad once > <img src={aroluz} alt="logo2"  /> </LazyLoad>
                    </div>
                </div>
            </div> */}
        </div>
        <Footer1 />
        <Footer2 />
        <BtnWhatsApp />
        {/* <Popup /> */}
        </>
    );
    
}

export default HomeScreen;


