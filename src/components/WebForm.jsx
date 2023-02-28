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
    setNumPages((count) => count - 1);
  };
  const increaseLanguages = () => {
    setNumLanguages((count) => count + 1);
  };
  const decreaseLanguages = () => {
    setNumLanguages((count) => count - 1);
  };

  return (
    <div>
      <label>
        <p>Número de pàgines</p>
        <button className="button" onClick={increasePages}>+</button>
        <input type="number" value={numPages} onChange={(e) => setNumPages(parseInt(e.target.value))}/>
        <button className="button" onClick={decreasePages}>-</button>
      </label>
      <br />
      <label>
        <p>Número d'idiomes</p>
        <button className="button" onClick={increaseLanguages}>+</button>
        <input type="number" value={numLanguages} onChange={(e) => setNumLanguages(parseInt(e.target.value))} />
        <button className="button" onClick={decreaseLanguages}>-</button>
      </label>
    </div>
  );
}
