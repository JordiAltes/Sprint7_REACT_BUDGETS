import React, { useState } from "react";
import { WebForm } from "./components/WebForm";
import { useLocalStorage } from "./components/LocalStorage";

function App() {
  const [selectedOptions, setSelectedOptions] = useLocalStorage(
    "selectedOptions",
    {
      webPage: false,
      seo: false,
      googleAds: false,
    }
  );

  const [numPages, setNumPages] = useLocalStorage("numPages", 1);
  const [numLanguages, setNumLanguages] = useLocalStorage("numLanguages", 1);
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
      ? totalPrice + numPages * numLanguages * 30
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
            checked={selectedOptions.webPage}
          />
          Una pàgina web (500€)
        </label>
      </div>
      {webPageSelected && (
        <WebForm
          numPages={numPages}
          numLanguages={numLanguages}
          setNumPages={setNumPages}
          setNumLanguages={setNumLanguages}
        />
      )}
      <div>
        <label>
          <input
            type="checkbox"
            name="seo"
            onChange={handleCheckboxChange}
            checked={selectedOptions.seo}
          />
          Una consultoria SEO (300€)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="googleAds"
            onChange={handleCheckboxChange}
            checked={selectedOptions.googleAds}
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
