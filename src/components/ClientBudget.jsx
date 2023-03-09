import React from "react";

export function ClientBudget({
  clientName,
  budgetName,
  numPages,
  numLanguages,
  totalPrice,
  selectedKeys,
  currentDate
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
          <br />
          Data de creació: {currentDate}
        </p>
      </div>
    </div>
  );
}
