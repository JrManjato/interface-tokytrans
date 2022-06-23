import { useState } from 'react';
import { Table } from './table';
import './css/Reserver.css'
export function Reserver() {
    const [table, setTable] = useState('');
    function showTable() {
        setTable('show');
    }
    return (
        <div className="container-fluid bothPart col-md-12 mb-3">

            <div className="container-fluid leftPart col-md-2">
                <h2>Choix offre</h2>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        TOUS
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        VIP
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        PREMIUM
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        LITE
                    </label>
                </div>
                <h2>Horaires</h2>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        JOUR
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        NUIT
                    </label>
                </div>
            </div>{/* End of leftPart */}

            <div className="container-fluid rightPart col-md-10">
                <div className="container-fluid rsrv">
                    <div>
                        <label for="depart">Départ : </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected value="1">Antananarivo</option>
                            <option value="2">Antsirabe</option>
                            <option value="3">Ambatolampy</option>
                            <option value="4">Fianarantsoa</option>
                            <option value="5">Ambositra</option>
                            <option value="6">Toliara</option>
                            <option value="7">Manakara</option>
                            <option value="8">Mananjary</option>
                            <option value="9">Tôlanaro</option>
                            <option value="10">Toamasina</option>
                            <option value="11">Ambatondrazaka</option>
                            <option value="12">Diego-Suarez</option>
                            <option value="13">Mahajanga</option>
                            <option value="14">Morondava</option>
                            <option value="15">Miandrivazo</option>
                            <option value="16">Maevatanana</option>
                            <option value="17">Ihosy</option>
                            <option value="18">Brickaville</option>
                        </select>
                    </div>

                    <div className="ml-5">
                        <label for="depart">Arrivée : </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected value="1">Antananarivo</option>
                            <option value="2">Antsirabe</option>
                            <option value="3">Ambatolampy</option>
                            <option value="4">Fianarantsoa</option>
                            <option value="5">Ambositra</option>
                            <option value="6">Toliara</option>
                            <option value="7">Manakara</option>
                            <option value="8">Mananjary</option>
                            <option value="9">Tôlanaro</option>
                            <option value="10">Toamasina</option>
                            <option value="11">Ambatondrazaka</option>
                            <option value="12">Diego-Suarez</option>
                            <option value="13">Mahajanga</option>
                            <option value="14">Morondava</option>
                            <option value="15">Miandrivazo</option>
                            <option value="16">Maevatanana</option>
                            <option value="17">Ihosy</option>
                            <option value="18">Brickaville</option>
                        </select>
                    </div>

                    <div className="ml-5">
                        <label for="depart">Date : </label>
                        <input type="date" />
                    </div>

                    <div className="ml-5">
                        <label for="appt">Heure de départ :  </label>

                        <input type="time" id="appt" name="appt"
                            min="09:00" max="18:00" required></input>
                    </div>

                    <div className="d-flex ml-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success ml-2" type="submit" onClick={showTable}>Search</button>
                    </div>
                </div>{/*End of rsrv*/}

                {table === 'show' ? <Table /> : null}
            </div> {/*End of rightPart*/}
        </div>/*End of BothPart*/
    )
}