import './css/footer.css'
export function Footer() {
    return(
       <>
        <div className="container-fluid my-0 mx-0">
        
        <footer className="text-white text-center text-lg-start bg-primary">
        
        <div className="container p-4">
         
          <div className="row mt-4">
           
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">A propos</h5>
      
              <p>
              Une société de transport fictive établie pour mettre en application les connaissances acquises en Données 2.
              </p>
      
              <div className="mt-4">
              
                <a type="button" className="btn btn-floating btn-primary btn-lg"><i class="bi bi-facebook"></i></a>
               
                <a type="button" className="btn btn-floating btn-primary btn-lg"><i class="bi bi-instagram"></i></a>
                
                <a type="button" className="btn btn-floating btn-primary btn-lg"><i class="bi bi-twitter"></i></a>
               
                <a type="button" className="btn btn-floating btn-primary btn-lg"><i class="bi bi-google"></i></a>
                
              </div>
            </div>
           
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-3">Contacts</h5>
              <ul className="fa-ul">{/*  style="margin-left: 1.65em;" */}
                <li className="mb-3">
                  <span className="fa-li"><i class="bi bi-house-fill"></i></span><span className="ms-2" id='itms'>Antananarivo 101, Mahamasina</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i class="bi bi-envelope-fill"></i></span><span className="ms-2">tokytrans@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i class="bi bi-telephone-fill"></i></span><span className="ms-2">+ 261 34 99 666 99</span>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Horaires d'ouverture</h5>
      
              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Lundi - Samedi:</td>
                    <td>24h/24</td>
                  </tr>
                  <tr>
                    <td>Dimanche:</td>
                    <td>6:00 - 18:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
         
        </div>
        
      
        
        <div className="text-center p-3"> {/* style="background-color: rgba(0, 0, 0, 0.2);"" */}
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"> TokyTrans.mg</a>
        </div>
      
      </footer>
      
    </div>
       </>
    )
}