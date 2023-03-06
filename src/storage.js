export const getDataFromLocalStorage = () => {
  const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
  const numPages = parseInt(localStorage.getItem("numPages"));
  const numLanguages = parseInt(localStorage.getItem("numLanguages"));
  const webPageSelected = JSON.parse(localStorage.getItem("webPageSelected"));
  const totalPrice = parseInt(localStorage.getItem("totalPrice"));
  console.log(totalPrice);
  console.log(numPages);
  return {
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
    totalPrice,
  };
};
export const saveDataToLocalStorage = (data) => {
  localStorage.setItem("selectedOptions", JSON.stringify(data.selectedOptions));
  localStorage.setItem("numPages", JSON.stringify(data.numPages));
  localStorage.setItem("numLanguages", JSON.stringify(data.numLanguages));
  localStorage.setItem("webPageSelected", JSON.stringify(data.webPageSelected));
  localStorage.setItem("totalPrice", JSON.stringify(data.totalPrice));
  console.log(data);
};

