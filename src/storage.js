export const getDataFromLocalStorage = () => {
  const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
  const numPages = parseInt(localStorage.getItem("numPages"));
  const numLanguages = parseInt(localStorage.getItem("numLanguages"));
  const webPageSelected = JSON.parse(localStorage.getItem("webPageSelected"));
  const totalPrice = parseInt(localStorage.getItem("totalPrice"));
  const clientName = JSON.parse(localStorage.getItem("clientName"))
  const budgetName = JSON.parse(localStorage.getItem("budgetName"))
  const budgetList = JSON.parse(localStorage.getItem("budgetList"))
  return {
    selectedOptions,
    numPages,
    numLanguages,
    webPageSelected,
    totalPrice,
    clientName,
    budgetName,
    budgetList,
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
  localStorage.setItem("budgetList", JSON.stringify(data.budgetList))
};

/* {filteredBudget.length > 0
  ? filteredBudget.map(
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
    )
  : budgetList.map(
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
    )} */

