import logo from '../../components/images/logo.png';
import { useEffect, useState } from 'react';
import { Payment } from './payment';
import { Voyage } from './voyage';
import { Vehicule } from './vehicule';
import { Caisse } from './caisse';
import { LogSuccess } from './logseccess';

export function Admin(){
    const [scale, setScale] = useState('');
    function navigateToPayment() {
        setScale('payment');
    }
    function navigateToVoyage() {
        setScale('voyage');
    }
    function navigateToVehicle() {
        setScale('vehicule');
    }
    function navigateToCaisse() {
        setScale('caisse');
    }
    function initialise() {
        setScale('');
    }
    return (
        <>
        <div className="headers">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col-xs-1 col-md-7"><img src={logo} alt="Logo_Toky_Trans" onClick={initialise}/></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToPayment}>Payments</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToVoyage}>Voyages</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#"  onClick={navigateToVehicle}>Véhicules</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToCaisse}>Caisses</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Formulaire /> */}
            {scale==='' ? <LogSuccess/> : null}
            {scale==='payment' ? <Payment/> : null}
            {scale==='voyage' ? <Voyage/> : null}
            {/* <Reserver /> */}
            {scale==='vehicule' ? <Vehicule/> : null}
            {scale==='caisse' ? <Caisse/> : null}
        </div>
        </>
    )
}