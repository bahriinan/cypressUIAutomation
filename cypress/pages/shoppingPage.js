export default class ShoppingPage {

    shoppingItems = "[data-component-type='s-impression-counter']";
    shoppingItems2 = "[data-asin='B0B6W4F7GV'] > .sg-col-inner > .s-widget-container > [data-component-type='s-impression-logger'] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus";
    shoppintItemName = "Zeus Gamdias";
    jeansText = "Jeans";
    sortButton = "#a-autoid-3-announce";
    lowToHigh = "#s-result-sort-select_1";
    highToLow = "#s-result-sort-select_2";
    avrCustomerReview = "#s-result-sort-select_3";
    newestArrivals = "#s-result-sort-select_4";
    itemlist = ".s-no-outline > .a-size-medium-plus";
    jeanItem = "Levi's Men's 505 Fit Jeans (Regular and Big & Tall)";
    lowestPriceItemText = "Versace Jeans Couture Black/Gold Cardholder for mens";

    goToJeans() {

        cy.get(this.itemlist).should('be.visible');
        cy.contains(this.jeansText).click();
        cy.contains(this.jeanItem).wait(1000).should('be.visible');
  
     }

   sortByChoice(sortType) {

        cy.get(this.sortButton).click();
        cy.get(this.sortType).click();

   }  
   
   assertSort(sortText){

        cy.contains(this.sortText).should('be.visible');

   }

   getCameraFirstItem() {

        cy.get(this.shoppingItems).first().click();

   }

   getComputerItem() {

        cy.contains(this.shoppintItemName).first().should('be.visible').click({ force: true });

   }
   
}