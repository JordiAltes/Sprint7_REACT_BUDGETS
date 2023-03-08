import React, { useState, useEffect } from "react";
import { WebForm } from "../components/WebForm";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../storage";
import { TemplateBudget } from "../templateBudget";
import { ClientBudget } from "../components/ClientBudget";

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
    parseInt(localStorage.getItem("totalPrice")),
    0
  );
  const [clientName, setClientName] = useState(
    JSON.parse(localStorage.getItem("clientName")) || ""
  );
  const [budgetName, setBudgetName] = useState(
    JSON.parse(localStorage.getItem("budgetName")) || ""
  );
  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
    const data = {
      selectedOptions,
      numPages,
      numLanguages,
      webPageSelected,
      totalPrice,
      clientName,
      budgetName,
    };
    saveDataToLocalStorage(data);
  }, [
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
    totalPrice,
    clientName,
    budgetName,
  ]);

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
  function restartBudget() {
    setSelectedOptions({
      webPage: false,
      seo: false,
      googleAds: false,
    });
    setNumLanguages(1);
    setNumPages(1);
    setTotalPrice(0);
    setWebPageSelected(false);
    setBudgetName("");
    setClientName("");
  }

  function getSelectedKeys() {
    return Object.keys(selectedOptions).filter((key) => selectedOptions[key]);
  }

  function saveBudget() {
    const newDate = new Date();
    const currentDate = newDate.toDateString("es-ES");
    const userBudget = new TemplateBudget(
      clientName,
      budgetName,
      numPages,
      numLanguages,
      totalPrice,
      currentDate,
      selectedKeys
    );
    const newBudgetList = [...budgetList];
    newBudgetList.push(userBudget);
    setBudgetList(newBudgetList);
    console.log(newBudgetList);
    console.log(userBudget);
    restartBudget();
  }

  const selectedKeys = getSelectedKeys();

  return (
    <main className="body">
      <div className="budgetForm">
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
        <div className="namesContainer">
          Nom del client:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          Nom del pressupost:
          <input
            type="text"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div>
          <button onClick={restartBudget}>Reiniciar pressupost</button>
          <button onClick={saveBudget}>Guardar pressupost</button>
        </div>
      </div>
      <div className="budgetListContainer">
        <div className="budgetList">
          {budgetList !== [] &&
            budgetList.map(
              (
                {
                  clientName,
                  budgetName,
                  numPages,
                  numLanguages,
                  totalPrice,
                  selectedKeys,
                },
                index
              ) => {
                return (
                  <>
                    <ClientBudget
                      key={index}
                      clientName={clientName}
                      budgetName={budgetName}
                      numPages={numPages}
                      numLanguages={numLanguages}
                      totalPrice={totalPrice}
                      selectedKeys={selectedKeys}
                    />
                  </>
                );
              }
            )}
        </div>
      </div>
    </main>
  );
}
export default Budget;
