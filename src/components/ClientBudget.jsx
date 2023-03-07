import React from "react";

export function ClientBudget({
  clientName,
  budgetName,
  numPages,
  numLanguages,
  totalPrice,
  selectedKeys
}) {
  return (
    <div>
      <div>
        <h2>Nom del pressupost: {budgetName}</h2>
        <p>
          Client: {clientName}
          <br />
         Serveis contractats: {selectedKeys.toString()}
          <br />
          Pàgines: {numPages}
          <br />
          Idiomes: {numLanguages}
          <br />
          Preu final: {totalPrice}
        </p>
      </div>
    </div>
  );
}
