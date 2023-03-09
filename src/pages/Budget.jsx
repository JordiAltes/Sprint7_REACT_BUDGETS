import React, { useState, useEffect } from "react";
import { WebForm } from "../components/WebForm";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../storage";
import { TemplateBudget } from "../templateBudget";
import { ClientBudget } from "../components/ClientBudget";

function Budget() {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return (
      dataFromLocalStorage.selectedOptions || {
        webPage: false,
        seo: false,
        googleAds: false,
      }
    );
  });

  const [numPages, setNumPages] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return parseInt(dataFromLocalStorage.numPages) || 0;
  });

  const [numLanguages, setNumLanguages] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return parseInt(dataFromLocalStorage.numLanguages) || 0;
  });

  const [webPageSelected, setWebPageSelected] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return dataFromLocalStorage.webPageSelected || false;
  });

  const [totalPrice, setTotalPrice] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return parseInt(dataFromLocalStorage.totalPrice) || 0;
  });

  const [clientName, setClientName] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return dataFromLocalStorage.clientName || "";
  });

  const [budgetName, setBudgetName] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return dataFromLocalStorage.budgetName || "";
  });
  const [budgetList, setBudgetList] = useState(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    return dataFromLocalStorage.budgetList || [];
  });
  const [search, setSearch] = useState("")

  useEffect(() => {
    const data = {
      selectedOptions,
      numPages,
      numLanguages,
      webPageSelected,
      totalPrice,
      clientName,
      budgetName,
      budgetList,
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
    budgetList,
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
    setNumLanguages(0);
    setNumPages(0);
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
    const currentDate = newDate.toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    });
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

  function sortByLetter() {
    const orderByTitle = budgetList
      .map((e) => e)
      .sort((a, b) => {
        a.budgetName - b.budgetName;
        if (a.budgetName > b.budgetName) return 1;
        else return -1;
      });
    setBudgetList(orderByTitle);
  }
  function sortByDate() {
    const orderByDate = budgetList
      .map((e) => e)
      .sort((a, b) => {
        a.currentDate - b.currentDate;
        if (a.currentDate < b.currentDate) return 1;
        else return -1;
      });
    setBudgetList(orderByDate);
  }
  function reorderBudgets() {
    const reorder = budgetList
      .map((e) => e)
      .sort((a, b) => {
        a.currentDate - b.currentDate;
        if (a.currentDate > b.currentDate) return 1;
        else return -1;
      });
    setBudgetList(reorder);
  }
  function handleChangesSearch(e) {
    setSearch(e.target.value)

  }

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
          <div className="sortButtons">
            <button onClick={sortByLetter}>Filtrar alfabeticament</button>
            <button onClick={sortByDate}>Filtrar per data</button>
            <button onClick={reorderBudgets}>Reiniciar ordre</button>
            <input
              type="text"
              value={search}
              onChange={handleChangesSearch}
              placeholder="Cerca un pressupost pel títol"
            />
          </div>
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
                  currentDate,
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
                      currentDate={currentDate}
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
