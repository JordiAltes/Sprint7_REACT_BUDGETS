export class TemplateBudget {
  clientName;
  budgetName;
  numPages;
  numLanguages;
  totalPrice;
  currentDate;
  selectedKeys

  constructor(
    clientName,
    budgetName,
    numPages,
    numLanguages,
    totalPrice,
    currentDate,
    selectedKeys
  ) {
    this.clientName = clientName;
    this.budgetName = budgetName;
    this.numPages = numPages;
    this.numLanguages = numLanguages;
    this.totalPrice = totalPrice;
    this.currentDate = currentDate;
    this.selectedKeys = selectedKeys
  }
}
