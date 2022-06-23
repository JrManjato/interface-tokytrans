import './css/formulaire.css';

export function Formulaire() {
    return (
        <div className="container-fluid conteneur mt-0 mb-3">

            <div className="col-md-6 complement"><></></div>

            <div className="container-fluid forms col-md-6 mt-5">
                
                <div className="forms_item">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>DÉPART</option>
                        <option value="1">Antananarivo</option>
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

                <div className="forms_item">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>ARRIVÉE</option>
                        <option value="1">Antananarivo</option>
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

                <div className="forms_item">
                    <input type="date" placeholder="DATE DU VOYAGE" />
                </div>

                <div className="forms_item">
                    <input type="number" name="adulte" id="adulte" placeholder="VOYAGEUR(S)" required />
                </div>

                <div className="forms_item">
                    <button>Réserver</button>
                </div>

            </div>
        </div>
    )
}