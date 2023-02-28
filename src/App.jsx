import React, { useState } from "react";
import { WebForm } from "./components/WebForm";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({
    webPage: false,
    seo: false,
    googleAds: false,
  });

  const [numPages, setNumPages] = useState(1);
  const [numLenguages, setNumLenguages] = useState(1);
  const [webPageSelected, setWebPageSelected] = useState(false);

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };
  let totalPrice = Object.keys(selectedOptions).reduce(
    (total, option) =>
      selectedOptions[option] ? total + prices[option] : total,
    0
  );
  totalPrice =
    webPageSelected === true
      ? totalPrice + numPages * numLenguages * 30
      : totalPrice;

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
        <WebForm
          numPages={numPages}
          numLanguages={numLenguages}
          setNumPages={setNumPages}
          setNumLanguages={setNumLenguages}
        />
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

{
  /* <div className="menuDesplegable">
          <label className="labelMenu">
            <p className="textMenu">Número de pàgines</p>
            <input
              className="inputMenu"
              type="number"
              value={numPages}
              onChange={(e) => setNumPages(parseInt(e.target.value))}
            />
          </label>
          <label className="labelMenu">
            <p className="textMenu">Número d'idiomes</p>
            <input
              className="inputMenu"
              type="number"
              value={numLenguages}
              onChange={(e) => setNumLenguages(parseInt(e.target.value))}
            />
          </label>
        </div> */
}
