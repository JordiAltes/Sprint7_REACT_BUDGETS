export const getDataFromLocalStorage = () => {
  const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
  const numPages = parseInt(localStorage.getItem("numPages"));
  const numLanguages = parseInt(localStorage.getItem("numLanguages"));
  const webPageSelected = JSON.parse(localStorage.getItem("webPageSelected"));
  const totalPrice = parseInt(localStorage.getItem("totalPrice"));
  const clientName = JSON.parse(localStorage.getItem("clientName"))
  const budgetName = JSON.parse(localStorage.getItem("budgetName"))
  return {
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
    totalPrice,
    clientName,
    budgetName,
  };
};
export const saveDataToLocalStorage = (data) => {
  localStorage.setItem("selectedOptions", JSON.stringify(data.selectedOptions));
  localStorage.setItem("numPages", JSON.stringify(data.numPages));
  localStorage.setItem("numLanguages", JSON.stringify(data.numLanguages));
  localStorage.setItem("webPageSelected", JSON.stringify(data.webPageSelected));
  localStorage.setItem("totalPrice", JSON.stringify(data.totalPrice));
  localStorage.setItem("clientName", JSON.stringify(data.clientName));
  localStorage.setItem("budgetName", JSON.stringify(data.budgetName));
};

