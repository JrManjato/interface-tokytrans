import './caisse.css'
export function Caisse() {
    return (
        <>
            <div className="container-fluid col-md-12 caisse mt-3">

                <div className="gain col-md-6">
                    <h2>Gains <span>
                        <label for="depart">Offres : </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected value="1">Tous</option>
                            <option value="2">VIP</option>
                            <option value="3">Premium</option>
                            <option value="4">Lite</option>
                        </select>
                    </span></h2> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID VOYAGE</th>
                                <th>TYPE OFFRE</th>
                                <th>MONTANT PAYE</th>
                                <th>TOTALE</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="depense col-md-6">
                    <h2>Dépenses</h2>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>MATRICULE</th>
                                <th>NOM MAINTENANCE</th>
                                <th>COUT</th>
                                <th>TOTALE</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}