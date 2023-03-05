/* export const saveDataToLocalStorage = (data) => {
  localStorage.setItem("webFormData", JSON.stringify(data));
  console.log(data);
};
export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("webFormData");
  console.log(data);
  return data ? JSON.parse(data) : null;
};
 */
export const saveDataToLocalStorage = (data) => {
  localStorage.setItem("selectedOptions", JSON.stringify(data.selectedOptions));
  localStorage.setItem("numPages", JSON.stringify(data.numPages));
  localStorage.setItem("numLanguages", JSON.stringify(data.numLanguages));
  localStorage.setItem("webPageSelected", JSON.stringify(data.webPageSelected));
  console.log(data);
};

export const getDataFromLocalStorage = () => {
  const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
  const numPages = parseInt(localStorage.getItem("numPages"));
  const numLanguages = parseInt(localStorage.getItem("numLanguages"));
  const webPageSelected = JSON.parse(localStorage.getItem("webPageSelected"));
  return {
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
  };
};
