import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import CotizadorScreen from '../pages/cotizador/cotizador';
import HomeScreen from '../pages/home';
import SignUpScreen from '../pages/signUp/SignUp';
import SignInScreen from '../pages/signIn/SignIn';
import WebinarScreen from '../pages/webinar/webinar';
import DashboardScreen from '../pages/dashboard/dashboard';
import ProductoScreen from '../pages/productos/productos';
import ListadoProducto from '../pages/productos/listadoProductos';
import QuienesSomos from '../pages/quienesSomos/quienesSomos';
import Contacto from '../pages/contacto/contacto';
import Login from '../pages/miCuenta/login';
import MiCuenta from '../pages/miCuenta/miCuenta';
import Checkout from '../pages/checkout/checkout';
import Search from '../pages/search/search';
import Curso from '../pages/curso/curso';
import Salon from '../pages/salonlook/salon';
import FormComponent from '../pages/form/form';
import Batalla from '../pages/batalla/batalla';
import ListadoBatalla from '../pages/batalla/listadoParticipantes';
import FormAssistantComponent from '../pages/formAsistans/formAsistans';
import Entradas from '../pages/salonlook/entradas';
import ValidationVotes from '../pages/batalla/validationVotes';

const history = createBrowserHistory();
const AppRouter  = () => {
    return (  
        <Router history={history}>
            <Switch>
                <Route path="/producto/:id" component={ ProductoScreen } />
                <Route path="/productos/:id" component={ ListadoProducto } />
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/cotizador" component={ CotizadorScreen } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/micuenta" component={ MiCuenta } />
                <Route exact path="/quienessomos" component={ QuienesSomos } />
                <Route exact path="/contacto" component={ Contacto } />
                <Route exact path="/checkout" component={ Checkout } />
                <Route exact path="/signUp" component={ SignUpScreen } />
                <Route exact path="/signIn" component={ SignInScreen } />
                {/* <Route exact path="/salonlook/:name" component={ Salon } /> */}
                <Route exact path="/cursos" component={ Curso } />
                <Route exact path="/webinar" component={ WebinarScreen } />
                <Route exact path="/search/:id" component={ Search } />
                {/* <Route exact path="/dashboard" component={ DashboardScreen } /> */}
                {/* <Route exact path="/form" component={ FormComponent } /> */}
                {/* <Route exact path="/form-assistant" component={ FormAssistantComponent } /> */}
                {/* <Route exact path="/battle" component={ Batalla } /> */}
                {/* <Route exact path="/repechaje" component={ ListadoBatalla } /> */}
                {/* <Route exact path="/entradaSalonLook" component={ Entradas } /> */}
                {/* <Route exact path="/validationVote/:id" component={ ValidationVotes } /> */}
                
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
 
export default AppRouter;