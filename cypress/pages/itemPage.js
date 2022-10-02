export default class ItemPage {

   addToCartButton = "#add-to-cart-button";
   buyNowButton = "#buy-now-button";
   quantityDropDown = "#a-autoid-7-announce";
   addedToCartText = "#sw-atc-details-single-container";
   proceedToCheckOutButton = "[name='proceedToRetailCheckout']"
   goToCartButton = "[id='sw-gtc']"
   navigateCartLink = "#nav-cart-count";
   addToCartText = "Add to Cart";

   itemtoCart() {

        cy.contains(this.addToCartText).should('be.visible').click();
        cy.get(this.addedToCartText).should('be.visible');
        cy.get(this.goToCartButton).click();

   }

}