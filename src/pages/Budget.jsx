import React, { useState, useEffect } from "react";
import { WebForm } from "../components/WebForm";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../storage";

function Budget() {
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem("selectedOptions")) || {
      webPage: false,
      seo: false,
      googleAds: false,
    }
  );

  const [numPages, setNumPages] = useState(
    parseInt(localStorage.getItem("numPages")) || 1
  );
  const [numLanguages, setNumLanguages] = useState(
    parseInt(localStorage.getItem("numLanguages")) || 1
  );
  const [webPageSelected, setWebPageSelected] = useState(
    JSON.parse(localStorage.getItem("webPageSelected")) || false
  );
  const [totalPrice, setTotalPrice] = useState(
    parseInt(localStorage.getItem("totalPrice")),0);

  useEffect(() => {
    const data = {
      selectedOptions,
      numPages,
      numLanguages,
      webPageSelected,
      totalPrice,
    };
    saveDataToLocalStorage(data);
  }, [selectedOptions, numPages, numLanguages, webPageSelected, totalPrice]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    if (data) {
      setSelectedOptions(data.selectedOptions);
      setNumPages(data.numPages);
      setNumLanguages(data.numLanguages);
      setWebPageSelected(data.webPageSelected);
      setTotalPrice(data.totalPrice);
    }
  }, []);

  const prices = {
    webPage: 500,
    seo: 300,
    googleAds: 200,
  };
  useEffect(() => {
    let total = Object.keys(selectedOptions).reduce(
      (total, option) =>
        selectedOptions[option] ? total + prices[option] : total,
      0
    );
    total =
      webPageSelected === true ? total + numPages * numLanguages * 30 : total;
    setTotalPrice(total);
  }, [selectedOptions, numPages, numLanguages, webPageSelected]);

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
export default Budget;
