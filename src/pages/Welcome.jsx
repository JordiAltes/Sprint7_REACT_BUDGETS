import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Pagina web per realitzar pressupostos</h1>
      <h2>Ens ajustem a les teves necessitats</h2>
      <p>
        Al premer el botó d'iniciar podràs començar a realitzar el teu
        pressupost, nosaltres fem la resta.
        <br />
        Podràs guardar els pressupostos que hagis creat i es mostraran a la
        dreta de la pantalla
        <br />
        També tindràs diferents opcions de filtrat
      </p>
      <ul>
        <button className="buttonStart">
          <Link to="/Budget">Crea el teu pressupost</Link>
        </button>
      </ul>
    </div>
  );
}
export default Welcome;
