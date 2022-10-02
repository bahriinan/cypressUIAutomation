export default class ShoppingCartPage {

    shoppingCartTitle = "h1";
    deSelectAllItemsLinkText = "#deselect-all";
    subTotalText = "#sc-subtotal-label-buybox";
    priceField = "[id='sc-subtotal-amount-buybox']";
    proceedToCheckOutButton = "[name='proceedToRetailCheckout']";
    checkbox = ".a-checkbox-fancy > label > .a-icon";
    deleteLinkText = ".sc-action-delete > .a-declarative > .a-color-link";
    emptyCart = ".sc-cart-header > .a-row > .a-spacing-mini";
    
    checkShopItem() {

        cy.get(this.shoppingCartTitle).should('be.visible');
        cy.fixture('dataList').then((data)=>{

            cy.contains(this.priceField, data.itemPrice);

        });
        
    }

    checkTotalShop() {

        cy.get(this.shoppingCartTitle).should('be.visible');
        cy.fixture('dataList').then((data)=>{

            cy.contains(this.priceField, data.itemTotalPrice);

        });

    }

    deleteItem() {

        cy.get(this.deleteLinkText).should('be.visible').eq(0).click(); 

    }

 }