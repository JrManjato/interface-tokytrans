import './css/client.css';
import logo from '../../components/images/logo.png'
import { Formulaire } from "./formulaire";
import { Reserver } from "./Reserver";
import { useState } from 'react';
import { Contact } from './contact';
import { Footer } from './footer';
export function Client() {
    const [scale, setScale] = useState('accueil');
    function navigateToReserver() {
        setScale('reserver');
    }
    function navigateToAccueil() {
        setScale('accueil');
    }
    function navigateToContact() {
        setScale('contact');
    }
    return (
        <>
        <div className="headers">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col-xs-1 col-md-7"><img src={logo} alt="Logo_Toky_Trans" /></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToAccueil}>Accueil</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToReserver}>Reserver</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#"  onClick={navigateToContact}>Contacts</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" href="#" onClick={navigateToContact}>Intranet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Formulaire /> */}
            {scale==='reserver' ? <Reserver /> : null}
            {scale==='accueil' ? <Formulaire /> : null}
            {/* <Reserver /> */}
            {scale==='contact' ? <Contact/> : null}
        </div>
        <Footer />
        </>
    )
}