import React, { useState } from "react";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({
    webPage: false,
    seo: false,
    googleAds: false,
  });

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };
  const totalPrice = Object.keys(selectedOptions).reduce(
    (total, option) =>
      selectedOptions[option] ? total + prices[option] : total,
    0
  );
  const [webPageSelected, setWebPageSelected] = useState(false);

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: checked });
    if (name === "webPage") {
      setWebPageSelected(webPageSelected === false ? true : false);
    }
  }

  return (
    <div className="body">
      <p>Quin o quins servei vols contractar?</p>
      <div>
        <label>
          <input
            type="checkbox"
            name="webPage"
            onChange={handleCheckboxChange}
          />
          Una pàgina web (500€)
        </label>
      </div>
      {webPageSelected && (
        <div className="menuDesplegable">
          <label className="labelMenu">
            <p className="textMenu">Número de pàgines</p>
            <input className="inputMenu" type="number" />
          </label>
          <label className="labelMenu">
            <p className="textMenu">Número d'idiomes</p>
            <input className="inputMenu" type="number" />
          </label>
        </div>
      )}
      <div>
        <label>
          <input type="checkbox" name="seo" onChange={handleCheckboxChange} />
          Una consultoria SEO (300€)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="googleAds"
            onChange={handleCheckboxChange}
          />
          Una campanya de Google Ads (200€)
        </label>
      </div>
      <div>
        <p>Preu total dels serveis contractats: {totalPrice}€</p>
      </div>
    </div>
  );
}
export default App;
