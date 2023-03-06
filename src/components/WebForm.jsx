import React from "react";
import Swal from "sweetalert2";
import "../index.css";
import "animate.css";

export function WebForm({
  numPages,
  setNumPages,
  numLanguages,
  setNumLanguages,
}) {
  const increasePages = () => {
    setNumPages((count) => count + 1);
  };
  const decreasePages = () => {
    if (numPages > 0) {
      setNumPages((count) => count - 1);
    } else {
      setNumPages(0);
    }
  };
  const increaseLanguages = () => {
    setNumLanguages((count) => count + 1);
  };
  const decreaseLanguages = () => {
    if (numLanguages > 0) {
      setNumLanguages((count) => count - 1);
    } else {
      setNumLanguages(0);
    }
  };
  const ExtraInfoPages = () => {
    Swal.fire({
      icon: "info",
      title: "Número de pàgines",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      text: "En aquest apartat has d'indicar el número de pagines que vols que tingui la web",
      customClass: {
        popup: "popup",
      },
    });
  };
  const ExtraInfoLanguages = () => {
    Swal.fire({
      icon: "info",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      title: "Número d'idiomes",
      text: "En aquest apartat has d'indicar el número d'idiomes que vols que tingui la web",
      customClass: {
        popup: "popup",
      },
    });
  };

  return (
    <div className="menuDesplegable">
      <label className="labelMenu">
        <p className="textMenu">Número de pàgines</p>
        <button className="button" onClick={increasePages}>
          +
        </button>
        <input
          type="number"
          value={numPages}
          onChange={(e) => setNumPages(parseInt(e.target.value))}
        />
        <button className="button" onClick={decreasePages}>
          -
        </button>
        <button className="infoButton" onClick={ExtraInfoPages}>
          i
        </button>
      </label>
      <br />
      <label className="labelMenu">
        <p className="textMenu">Número d'idiomes</p>
        <button className="button" onClick={increaseLanguages}>
          +
        </button>
        <input
          type="number"
          value={numLanguages}
          onChange={(e) => setNumLanguages(parseInt(e.target.value))}
        />
        <button className="button" onClick={decreaseLanguages}>
          -
        </button>
        <button className="infoButton" onClick={ExtraInfoLanguages}>
          i
        </button>
      </label>
    </div>
  );
}
