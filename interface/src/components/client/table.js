export function Table() {
    return(
        <div className="container table">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>JOUR DE DEPART</th>
                                    <th>HEURE DE DEPART</th>
                                    <th>PLACE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><button className="btn btn-primary">Réserver</button></td>
                                </tr>
                            </tbody>
                        </table>
        </div>/*End of the table*/
    )
}