import React,{useEffect, useState} from 'react';
import Navbar from '../../components/nav/nav';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import { useParams } from 'react-router';
import { useCart } from '../../hooks/useCart';
import logoSalon from '../../assets/img/salonlook.png';
import dic from '../../assets/img/dic.png';
import espacio from '../../assets/img/espacio.png';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import WOW from 'wowjs';
import galeria1 from '../../assets/img/galeria/banner1.jpg'
import galeria2 from '../../assets/img/galeria/banner2.jpg'
import galeria4 from '../../assets/img/galeria/banner4.jpg'
import galeria5 from '../../assets/img/galeria/banner5.jpg'
import galeria6 from '../../assets/img/galeria/banner6.jpg'
import galeria8 from '../../assets/img/galeria/banner8.jpg'
import galeria9 from '../../assets/img/galeria/banner9.jpg'
import galeria10 from '../../assets/img/galeria/banner10.jpg'
import galeria11 from '../../assets/img/galeria/banner11.jpg'
import galeria12 from '../../assets/img/galeria/banner12.jpg'
import galeria13 from '../../assets/img/galeria/banner13.jpg'
import galeria14 from '../../assets/img/galeria/banner14.jpg'
import galeria16 from '../../assets/img/galeria/banner16.jpg'
import galeria18 from '../../assets/img/galeria/banner17.jpg'
import galeria19 from '../../assets/img/galeria/banner3.jpg'
import look from '../../assets/img/look.png'
import logos from '../../assets/img/banners/logos.png'
import logodic from '../../assets/img/banners/dic2.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Modal } from 'antd';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useRedirect } from '../../hooks/useRedirect';
import Marcas from '../../components/salonlook/marcas';
import Stands from '../../components/salonlook/stands';
import Batalla from '../../components/salonlook/batalla';
import Invitados from '../../components/salonlook/invitados';
import SalonW from '../../components/salonlook/salon';
import FormAssistantComponent from '../formAsistans/formAsistans';
import { postEvento, geoLocalizacion } from '../../api/apiConversion';
import { browserName } from "react-device-detect";
import ReactPixel from 'react-facebook-pixel';

const Salon = () => {

     new WOW.WOW().init();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [, redireccionarInstagram, redireccionarFacebook, redireccionarEntrada] = useRedirect();
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const { name } = useParams();
    const [open,setOpen] = useState(false);
    
    useEffect(() => {
        
        pixelaso();

        if(name === "entradas"){
            window.location.href = "https://stulzel.com/entradaSalonLook";
        }

        if(name === "salon"){
            abrirSalon();
            cerrarInvitados();
            window.location.href = "#salonlook";
        }else if(name === "invitados"){
            abrirInvitados();
            cerrarSalon();
            window.location.href = "#collapseI";
        }

    }, []);
    const cerrarSalon = () => {
        let doc = document.getElementById("collapseSalon");
        doc.style.maxHeight = "0px";
    }
    const cerrarInvitados = () => {
        let doc = document.getElementById("collapseI");
        doc.style.maxHeight = "0px";
    }
    const abrirInvitados = () => {
        let doc = document.getElementById("collapseI");
        doc.style.maxHeight = "4500px";
    }
    const abrirSalon = () => {
        let doc = document.getElementById("collapseSalon");
        doc.style.maxHeight = "4500px";
    }
    const abrirModal = () => setOpen(true);

    const pixelaso = async () => {
        const options = {
            autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
            debug: false, // enable logs
        };
        const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
        ReactPixel.init("495580404127215",advancedMatching,options);
        ReactPixel.track("ViewContentSalonLook");
        const resultado2 = await geoLocalizacion();
        if(resultado2.ip.length > 0){
            const dateTime = Date.now();
            const timestamp = Math.floor(dateTime / 1000);
            const date = {
                data : [{
                    "event_name": "ViewContentSalonLook",
                    "event_time": timestamp,
                    "action_source": "website",
                    "event_source_url":"https://www.stulzel.com/producto",
                    "user_data": {
                        "client_ip_address":resultado2.ip,
                        "client_user_agent": browserName
                    }
                }]
            }
            await postEvento(date);
        }
    }
    return ( 
        <>
            <div className="fondo">
                <Navbar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                /> 
                <div class="container-fluid">
                    <div class="raw-flex wow fadeIn">
                        <div class="tituloSalon">
                            <img className="stul" src="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="" />
                            <img className="salon" src={logoSalon} alt="" />
                        </div>
                        <span>2ª VERSIÓN DEL ENCUENTRO PROFESIONAL DE LA IMAGEN Y LA ESTÉTICA INTEGRAL </span>
                    </div>
                    <div class="rawBlanca">
                        <iframe className="wow fadeIn" width="560" height="315" src="https://www.youtube.com/embed/RBi7q9LhqlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="flex wow fadeIn">
                            <img src={dic} alt="" />
                            <img src={espacio} alt="" />
                        </div>
                        <div class="galeriaMovil wow fadeIn">
                            <Slider {...settings}>
                                <div className="object">
                                    <LazyLoad><img src={galeria1} /></LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria2} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria4}/>
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria5} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria6}/>
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria8}/>
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria9} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria10} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria11} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria12} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria13} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria14} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria16} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria18} />
                                    </LazyLoad>
                                </div>
                                <div className="object">
                                    <LazyLoad>
                                        <img src={galeria19} />
                                    </LazyLoad>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <SalonW setOpen={setOpen} />
                    <Invitados />
                    <Batalla />
                    <Stands />
                    <Marcas />
                    <div class="bannerR look ">
                        <div class="containerSalon">
                            <div className="div">
                                <img src={logoSalon} />
                                <img src={logodic} />
                            </div>
                            <div><img src={logos} className="img"/></div>
                        </div>
                    </div>
                    {/* <img src={banner2} width="100%"/> */}

                    <div className="botonesRedes">
                        <button className="insta" onClick={() => redireccionarInstagram()}>Siguenos aquí <InstagramIcon/> </button>
                        <button className="face" onClick={() => redireccionarFacebook()}>Siguenos aquí <FacebookIcon/> </button>
                    </div>                       
                </div>
            </div>
            {/* <div>
                <button className="entrada" onClick={ () => abrirModal()}>GRATIS tu entrada aquí</button>
            </div> */}
            <Footer1 />
            <Footer2 />
            {/* <Modal title="" visible={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                <div className="fondoModal">
                    <div className="imgSalon">
                        <img src={look} alt="look" /> 
                    </div>
                    <div className="div">
                        <div className="subFondo">
                            <h2>PARA OBTENER TU ENTRADA A SALÓN LOOK 2021 SOLO DEBES COMPLETAR LOS SIGUIENTES DATOS</h2>               
                            <FormAssistantComponent />
                        </div>
                    </div>
                </div>
                    
            </Modal> */}
        </>
    );
}
 
export default Salon;