import React from "react";

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
      </label>
    </div>
  );
}
